<template>
	<form
		class="form"
		:disabled="loading ? 'disabled' : null"
		@submit="submit"
	>
		<h2 v-if="welcome" class="head">还差最后一步..</h2>
		<h2 v-else class="head">关联 Discord 账号</h2>

		<div
			v-if="discordUserId"
			class="form"
		>
			<p>
				<strong>Discord 用户名：</strong>
				{{ discordUsername }}
			</p>

			<Message
				v-if="boost"
				severity="success"
			>
				<strong v-if="boost === 'booster'">
					感谢您对我们服务器的贡献！
				</strong>

				<strong v-else-if="boost === 'active'">
					感谢您成为活跃的服务器成员！
				</strong>

				<strong v-else-if="boost === 'special'">
					您拥有特殊成员身份！
				</strong>

				您的绘画冷却时间已设置为 {{ cooldown }} 秒。
			</Message>

			<Message
				v-else
				severity="info"
			>
				您目前不符合任何加速条件。当您符合条件时会收到通知。
			</Message>

			<p>您要取消关联 Discord 账号吗？</p>
			<p>取消关联后，您可以再次编辑您的 Discord 用户名字段。</p>
		</div>

		<div
			v-else
			class="form"
		>
			<p>将您的 Discord 账号连接到 openplace。</p>
			<p>关联 Discord 账号后，您将获得专属特权，如缩短冷却时间、账号恢复等更多功能。</p>
			<p>关联期间，您个人资料上的 Discord 用户名无法更改。您可以随时取消关联。</p>
		</div>

		<Message
			v-if="errorMessage"
			severity="error"
		>
			{{ errorMessage }}
		</Message>

		<div class="buttons-container">
			<Button
				v-if="discordUserId"
				severity="danger"
				type="submit"
				:disabled="loading"
			>
				取消关联 Discord 账号
			</Button>

			<Button
				v-else
				severity="primary"
				type="submit"
				:disabled="loading"
			>
				关联 Discord 账号
			</Button>
		</div>

		<div v-if="welcome" class="buttons-container">
			<Button
				v-slot="slotProps"
				as-child
				severity="secondary"
				:disabled="loading"
			>
				<RouterLink
					:to="returnTo"
					:class="slotProps.class"
					:style="{ 'text-decoration': 'none' }"
				>
					暂不关联
				</RouterLink>
			</Button>
		</div>

		<div v-if="!welcome" class="reset-link">
			<RouterLink
				v-if="returnTo !== '/'"
				:to="returnTo"
			>
				取消
			</RouterLink>
		</div>
	</form>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Message from "primevue/message";
import { useErrorToast } from "~/composables/useErrorToast";
import { useUserProfile } from "~/composables/useUserProfile";
import { FetchError } from "ofetch";

const { getErrorMessage } = useErrorToast();
const { fetchUserProfile } = useUserProfile();

interface DiscordAuthURLResponse {
	url: string;
}

definePageMeta({
	layout: "auth"
});

const route = useRoute();

const loading = ref(false);
const discordUserId = ref<string | null>(null);
const discordUsername = ref<string | null>(null);
const cooldown = ref(0);
const boost = ref<string | null>(null);
const errorMessage = ref<string | null>(null);
const welcome = ref(false);
const returnTo = ref("/");

onMounted(async () => {
	returnTo.value = route.query.r as string ?? "/";
	errorMessage.value = route.query.error as string;
	welcome.value = route.query.for === "welcome";
	loading.value = true;

	try {
		const config = useRuntimeConfig();
		await $fetch(`${config.public.backendUrl}/discord/configured`);
	} catch (error: unknown) {
		errorMessage.value = error instanceof FetchError && error.statusCode === 503
			? "此实例未启用 Discord 关联功能。"
			: getErrorMessage(error);
		return;
	}

	await updateProfile();
	loading.value = false;
});

const updateProfile = async () => {
	const user = await fetchUserProfile();
	discordUserId.value = user?.discordUserId ?? null;
	discordUsername.value = user?.discord ?? null;
	cooldown.value = Math.floor((user?.charges?.cooldownMs ?? 0) / 1000);
	boost.value = user?.charges?.boost ?? null;
};

const submit = async (e: Event) => {
	e.preventDefault();
	loading.value = true;
	errorMessage.value = null;

	try {
		const config = useRuntimeConfig();
		if (discordUserId.value) {
			// Unlink
			await $fetch(`${config.public.backendUrl}/discord/unlink`, {
				method: "POST",
				credentials: "include"
			});
			await updateProfile();
		} else {
			// Link
			const { url } = await $fetch<DiscordAuthURLResponse>(`${config.public.backendUrl}/discord/auth-url`, {
				method: "POST",
				credentials: "include"
			});

			location.href = url;
		}
	} catch (error: unknown) {
		errorMessage.value = getErrorMessage(error);
	}

	loading.value = false;
};
</script>

<style scoped>
/* */
</style>
