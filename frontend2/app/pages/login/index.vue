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

	<!-- 邮箱验证弹窗 -->
	<Dialog
		v-model:visible="showEmailDialog"
		header="验证邮箱"
		:modal="true"
		:closable="false"
		:draggable="false"
		:style="{ width: '400px' }"
	>
		<div class="email-dialog-content">
			<!-- 第一步：输入邮箱 -->
			<template v-if="emailStep === 'input'">
				<p>请填写您的邮箱地址以完成登录。</p>
				<InputText
					v-model="newEmail"
					placeholder="请输入邮箱地址"
					type="email"
					class="email-input"
					autocomplete="email"
					:disabled="emailSubmitting"
				/>
				<Message
					v-if="emailError"
					severity="error"
				>
					{{ emailError }}
				</Message>
			</template>
			<!-- 第二步：输入验证码 -->
			<template v-else-if="emailStep === 'code'">
				<p>验证码已发送至 <b>{{ newEmail }}</b>，请输入验证码。</p>
				<InputText
					v-model="verificationCode"
					placeholder="请输入 6 位验证码"
					class="email-input"
					maxlength="6"
					:disabled="emailSubmitting"
				/>
				<div class="code-actions">
					<Button
						severity="secondary"
						text
						:disabled="codeCooldown > 0"
						@click="resendCode"
					>
						{{ codeCooldown > 0 ? `${codeCooldown}s 后重发` : "重新发送" }}
					</Button>
				</div>
				<Message
					v-if="emailError"
					severity="error"
				>
					{{ emailError }}
				</Message>
			</template>
		</div>
		<template #footer>
			<Button
				v-if="emailStep === 'input'"
				severity="primary"
				:disabled="emailSubmitting || !newEmail"
				@click="sendCode"
			>
				发送验证码
			</Button>
			<Button
				v-else
				severity="primary"
				:disabled="emailSubmitting || verificationCode.length !== 6"
				@click="verifyCode"
			>
				验证
			</Button>
		</template>
	</Dialog>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Message from "primevue/message";
import Dialog from "primevue/dialog";
import { useErrorToast } from "~/composables/useErrorToast";

const { getErrorMessage } = useErrorToast();

interface LoginResponse {
	success: boolean;
	needsEmail?: boolean;
	verifyToken?: string;
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

// 邮箱验证状态
const showEmailDialog = ref(false);
const emailStep = ref<"input" | "code">("input");
const newEmail = ref("");
const verificationCode = ref("");
const emailError = ref<string | null>(null);
const emailSubmitting = ref(false);
const codeCooldown = ref(0);
const verifyToken = ref("");
let codeCooldownTimer: ReturnType<typeof setInterval> | null = null;

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

const sendCode = async () => {
	emailSubmitting.value = true;
	emailError.value = null;

	try {
		const config = useRuntimeConfig();
		await $fetch(`${config.public.backendUrl}/me/email/send-code`, {
			method: "POST",
			headers: verifyToken.value ? { "x-verify-token": verifyToken.value } : undefined,
			credentials: "include",
			body: { email: newEmail.value }
		});
		emailStep.value = "code";
		startCodeCooldown();
	} catch (error: unknown) {
		emailError.value = getErrorMessage(error);
	} finally {
		emailSubmitting.value = false;
	}
};

const startCodeCooldown = () => {
	codeCooldown.value = 60;
	if (codeCooldownTimer) clearInterval(codeCooldownTimer);
	codeCooldownTimer = setInterval(() => {
		codeCooldown.value--;
		if (codeCooldown.value <= 0) {
			if (codeCooldownTimer) clearInterval(codeCooldownTimer);
		}
	}, 1000);
};

const resendCode = async () => {
	if (codeCooldown.value > 0) return;
	await sendCode();
};

const verifyCode = async () => {
	emailSubmitting.value = true;
	emailError.value = null;

	try {
		const config = useRuntimeConfig();
		await $fetch(`${config.public.backendUrl}/me/email/verify`, {
			method: "POST",
			headers: verifyToken.value ? { "x-verify-token": verifyToken.value } : undefined,
			credentials: "include",
			body: { email: newEmail.value, code: verificationCode.value }
		});
		showEmailDialog.value = false;
		if (codeCooldownTimer) clearInterval(codeCooldownTimer);
		// 验证成功后后端已下发 cookie，跳转
		done();
	} catch (error: unknown) {
		emailError.value = getErrorMessage(error);
	} finally {
		emailSubmitting.value = false;
	}
};

const submit = async (e: Event) => {
	e.preventDefault();
	loading.value = true;
	errorMessage.value = null;

	try {
		const config = useRuntimeConfig();
		const res = await $fetch<LoginResponse>(`${config.public.backendUrl}/login`, {
			method: "POST",
			credentials: "include",
			body: {
				username: username.value,
				password: password.value
			}
		});

		if (res.success) {
			if (res.needsEmail) {
				// 保存 verifyToken，后端未下发 cookie，用 token 调用邮箱接口
				verifyToken.value = res.verifyToken ?? "";
				emailStep.value = "input";
				newEmail.value = "";
				verificationCode.value = "";
				emailError.value = null;
				showEmailDialog.value = true;
				await new Promise<void>(() => {});
			}
			done();
		} else {
			throw new Error(res.error);
		}
	} catch (error: unknown) {
		errorMessage.value = getErrorMessage(error);
	}

	loading.value = false;
};
</script>

<style scoped>
/* */
.email-dialog-content {
	display: flex;
	flex-direction: column;
	gap: 12px;
}
.email-dialog-content p {
	margin: 0;
}
.email-input {
	width: 100%;
}
.code-actions {
	display: flex;
	justify-content: center;
}
</style>
