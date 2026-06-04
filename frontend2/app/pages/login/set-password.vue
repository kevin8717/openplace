<template>
	<form
		class="form"
		@submit="submit"
	>
		<h2 class="head">重置密码</h2>

		<InputText
			v-model="password"
			placeholder="新密码"
			aria-label="新密码"
			type="password"
			autocomplete="new-password"
			required
			minlength="8"
			:disabled="loading"
		/>

		<InputText
			v-model="passwordConfirm"
			placeholder="确认密码"
			aria-label="确认密码"
			type="password"
			autocomplete="new-password"
			required
			minlength="8"
			:disabled="loading"
		/>

		<Message
			v-if="success"
			severity="success"
		>
			密码已重置。
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
				保存
			</Button>
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

const router = useRouter();
const route = useRoute();

const loading = ref(false);
const password = ref("");
const passwordConfirm = ref("");
const success = ref(false);
const errorMessage = ref<string | null>(null);

const submit = async (e: Event) => {
	e.preventDefault();
	loading.value = true;
	success.value = false;
	errorMessage.value = null;

	if (password.value !== passwordConfirm.value) {
		loading.value = false;
		errorMessage.value = "Passwords do not match";
		return;
	}

	try {
		const token = route.query.token as string;
		const config = useRuntimeConfig();
		await $fetch(`${config.public.backendUrl}/auth/reset-password`, {
			method: "POST",
			credentials: "include",
			body: {
				token,
				password: password.value
			}
		});

		success.value = true;
		setTimeout(() => {
			router.push("/login");
		}, 2000);
	} catch (error: unknown) {
		errorMessage.value = getErrorMessage(error);
	}

	loading.value = false;
};
</script>

<style scoped>
/* */
</style>
