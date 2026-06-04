<template>
	<form
		class="form"
		:disabled="loading ? 'disabled' : null"
		@submit="submit"
	>
		<h2 class="head">欢迎回来！</h2>

		<InputText
			v-model="username"
			placeholder="用户名"
			aria-label="用户名"
			autocomplete="username"
			required
			autofocus
			:disabled="loading"
		/>

		<InputText
			v-model="password"
			placeholder="密码"
			aria-label="密码"
			type="password"
			autocomplete="current-password"
			required
			minlength="8"
			:disabled="loading"
		/>

		<Message
			v-if="errorMessage"
			severity="error"
		>
			{{ errorMessage }}
		</Message>

		<div class="buttons-container">
			<Button
				severity="primary"
				type="submit"
				:disabled="loading"
			>
				登录
			</Button>
		</div>

		<div class="agreement">
			登录即表示您同意本实例所有者制定的规则。
		</div>

		<div class="reset-link">
			新来到 openplace？
			<RouterLink :to="rulesURL">
				注册
			</RouterLink>
			<br>
			忘记密码？
			<RouterLink :to="resetURL">
				重置密码
			</RouterLink>
		</div>
	</form>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Message from "primevue/message";
import { useErrorToast } from "~/composables/useErrorToast";

const { getErrorMessage } = useErrorToast();

interface LoginResponse {
	success: boolean;
	isNewAccount: boolean;
	error?: string;
}

definePageMeta({
	layout: "auth"
});

const router = useRouter();
const route = useRoute();
const { fetchUserProfile } = useUserProfile();

const loading = ref(false);
const username = ref("");
const password = ref("");
const errorMessage = ref<string | null>(null);
const registerURL = ref("/login/register");
const rulesURL = ref("/login/rules");
const resetURL = ref("/login/reset");

onMounted(async () => {
	const returnTo = route.query.r as string;
	if (returnTo) {
		const params = new URLSearchParams([["r", returnTo]]);
		registerURL.value = `/login/register?${params.toString()}`;
		rulesURL.value = `/login/rules?${params.toString()}`;
		resetURL.value = `/login/reset?${params.toString()}`;
	}

	try {
		if (await fetchUserProfile()) {
			// Already logged in, redirect now
			done(true);
		}
	} catch {
		// Ignore
	}
});

const done = (replace = false) => {
	const returnTo = route.query.r as string ?? "/";
	if (replace) {
		router.replace(returnTo);
	} else {
		router.push(returnTo);
	}
};

const submit = async (e: Event) => {
	e.preventDefault();
	loading.value = true;
	errorMessage.value = null;

	try {
		const config = useRuntimeConfig();
		const { success, error } = await $fetch<LoginResponse>(`${config.public.backendUrl}/login`, {
			method: "POST",
			credentials: "include",
			body: {
				username: username.value,
				password: password.value
			}
		});

		if (success) {
			done();
		} else {
			throw new Error(error);
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
