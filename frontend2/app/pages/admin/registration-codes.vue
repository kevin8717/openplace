<template>
	<div class="admin-container">
		<h1>注册码管理</h1>

		<section class="section">
			<h2>创建新注册码</h2>
			<form class="create-form" @submit="createCode">
				<div class="form-row">
					<InputText
						v-model="newCode"
						placeholder="输入注册码"
						aria-label="新注册码"
						autocomplete="off"
						required
						minlength="4"
						maxlength="64"
						:disabled="creating"
					/>
					<InputNumber
						v-model="newMaxUses"
						placeholder="最大使用次数"
						aria-label="最大使用次数"
						:min="1"
						:disabled="creating"
						class="max-uses-input"
					/>
					<Button severity="primary" type="submit" :disabled="creating || !newCode.trim()">
						{{ creating ? "创建中..." : "创建" }}
					</Button>
				</div>
				<Message v-if="createError" severity="error">
					{{ createError }}
				</Message>
				<Message v-if="createSuccess" severity="success">
					{{ createSuccess }}
				</Message>
			</form>
		</section>

		<section class="section">
			<h2>已有注册码</h2>

			<Message v-if="loadError" severity="error">
				{{ loadError }}
			</Message>

			<div v-if="loading" class="loading">
				加载中...
			</div>

			<div v-else-if="codes.length === 0" class="empty">
				暂无注册码，请在上方创建一个。
			</div>

			<DataTable
				v-else
				:value="codes"
				striped-rows
				show-gridlines
				table-style="min-width: 50rem"
			>
				<Column field="id" header="ID" sortable />
				<Column field="code" header="注册码" sortable />
				<Column field="maxUses" header="最大使用次数" sortable />
				<Column field="useCount" header="已使用" sortable>
					<template #body="slotProps">
						<tag
							:severity="slotProps.data.useCount >= slotProps.data.maxUses ? 'danger' : 'success'"
						>
							{{ slotProps.data.useCount }} / {{ slotProps.data.maxUses }}
						</tag>
					</template>
				</Column>
				<Column field="createdAt" header="创建时间" sortable>
					<template #body="slotProps">
						{{ formatDate(slotProps.data.createdAt) }}
					</template>
				</Column>
				<Column header="操作">
					<template #body="slotProps">
						<Button
							severity="danger"
							size="small"
							@click="deleteCode(slotProps.data.id)"
							:disabled="deletingId === slotProps.data.id"
						>
							{{ deletingId === slotProps.data.id ? "删除中..." : "删除" }}
						</Button>
					</template>
				</Column>
			</DataTable>
		</section>
	</div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Message from "primevue/message";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";

definePageMeta({
	layout: "admin"
});

interface RegistrationCode {
	id: number;
	code: string;
	maxUses: number;
	useCount: number;
	createdAt: string;
}

const config = useRuntimeConfig();
const backendUrl = config.public.backendUrl;

// State
const codes = ref<RegistrationCode[]>([]);
const loading = ref(true);
const loadError = ref<string | null>(null);

const newCode = ref("");
const newMaxUses = ref(1);
const creating = ref(false);
const createError = ref<string | null>(null);
const createSuccess = ref<string | null>(null);

const deletingId = ref<number | null>(null);

// Load codes
async function loadCodes() {
	loading.value = true;
	loadError.value = null;

	try {
		const data = await $fetch<{ codes: RegistrationCode[] }>(`${backendUrl}/staff/registration-codes`, {
			credentials: "include"
		});
		codes.value = data.codes;
	} catch (error: unknown) {
		const msg = error instanceof Error ? error.message : "Failed to load registration codes";
		loadError.value = msg;
	} finally {
		loading.value = false;
	}
}

// Create code
async function createCode(e: Event) {
	e.preventDefault();
	creating.value = true;
	createError.value = null;
	createSuccess.value = null;

	try {
		await $fetch(`${backendUrl}/staff/registration-codes`, {
			method: "POST",
			credentials: "include",
			body: {
				code: newCode.value.trim(),
				maxUses: newMaxUses.value
			}
		});

		createSuccess.value = `注册码 "${newCode.value}" 创建成功！`;
		newCode.value = "";
		newMaxUses.value = 1;
		await loadCodes();
	} catch (error: unknown) {
		const msg = error instanceof Error ? error.message : "Failed to create code";
		createError.value = msg;
	} finally {
		creating.value = false;
	}
}

// Delete code
async function deleteCode(id: number) {
	deletingId.value = id;

	try {
		await $fetch(`${backendUrl}/staff/registration-codes/${id}`, {
			method: "DELETE",
			credentials: "include"
		});
		await loadCodes();
	} catch (error: unknown) {
		const msg = error instanceof Error ? error.message : "Failed to delete code";
		loadError.value = msg;
	} finally {
		deletingId.value = null;
	}
}

function formatDate(dateStr: string): string {
	const date = new Date(dateStr);
	return date.toLocaleString();
}

onMounted(() => {
	loadCodes();
});
</script>

<style scoped>
.admin-container {
	max-width: 900px;
	margin: 0 auto;
	padding: 2rem;
}

.admin-container h1 {
	margin-bottom: 2rem;
	font-size: 1.5rem;
}

.section {
	margin-bottom: 2rem;
	background: var(--p-surface-card);
	border: 1px solid var(--p-surface-border);
	border-radius: 8px;
	padding: 1.5rem;
}

.section h2 {
	margin-bottom: 1rem;
	font-size: 1.15rem;
}

.create-form {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.form-row {
	display: flex;
	gap: 0.5rem;
	align-items: center;
}

.form-row :deep(.p-inputtext) {
	flex: 1;
}

.max-uses-input {
	width: 120px;
}

.loading,
.empty {
	padding: 2rem;
	text-align: center;
	color: var(--p-text-muted-color);
}
</style>
