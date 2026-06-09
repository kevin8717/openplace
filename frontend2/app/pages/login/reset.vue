<template>
	<form
		class="form"
		@submit="submit"
	>
		<h2 class="head">重置密码</h2>
		<p>忘记密码了？别担心，我们都不知道 :)</p>

		<InputText
			v-model="username"
			placeholder="openplace 用户名"
			aria-label="用户名"
			autocomplete="username"
			required
			autofocus
			:disabled="loading"
		/>

		<Message
			v-if="success"
			severity="success"
		>
			密码重置链接已发送至您账户绑定的邮箱，请查收。如未收到，请检查垃圾邮件箱。
		</Message>

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
				重置密码
			</Button>
		</div>

		<div class="reset-link">
			<RouterLink :to="loginURL">
				返回
			</RouterLink>
		</div>
	</form>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Message from "primevue/message";
import { useErrorToast } from "~/composables/useErrorToast";

const { getErrorMessage } = useErrorToast();

definePageMeta({
	layout: "auth"
});

const route = useRoute();

const loading = ref(false);
const username = ref("");
const success = ref(false);
const errorMessage = ref<string | null>(null);
const loginURL = ref("/login");

onMounted(() => {
	const returnTo = route.query.r as string;
	if (returnTo) {
		const params = new URLSearchParams([["r", returnTo]]);
		loginURL.value = `/login?${params.toString()}`;
	}
});

const submit = async (e: Event) => {
	e.preventDefault();
	loading.value = true;
	success.value = false;
	errorMessage.value = null;

	try {
		const config = useRuntimeConfig();
		await $fetch(`${config.public.backendUrl}/auth/request-password-reset`, {
			method: "POST",
			credentials: "include",
			body: {
				username: username.value
			}
		});

		success.value = true;
	} catch (error: unknown) {
		errorMessage.value = getErrorMessage(error);
	}

	loading.value = false;
};
</script>

<style scoped>
/* */
</style>
