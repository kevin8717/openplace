<template>
	<Dialog
		modal
		dismissable-mask
		:draggable="false"
		:visible="isOpen"
		:style="{
			width: '40rem',
			maxWidth: '100svw',
			height: 'calc(100svh - 4rem)',
		}"
		:breakpoints="{
			'500px': 'calc(100svw - 4rem)',
			'640px': '90svw',
		}"
		@update:visible="handleClose"
	>
		<template #header>
			<div />
		</template>

		<div>
			<div class="about-logo">
				<img
					src="/img/logo-512x512.png"
					alt=""
					width="64"
					height="64"
				>
				<span>openplace</span>
			</div>

			<div class="section">
				<p>
					openplace 是 wplace 的一个免费非官方开源后端。我们旨在为所有用户提供自由和灵活性，让您能够为自己、朋友甚至社区打造个性化的 wplace 体验。
				</p>

				<p v-if="isOpenplaceLive">
					<strong>这是官方 openplace.live 实例。</strong>加入我们的 <a href="https://discord.gg/ZRC4DnP9Z2">Discord 社区</a>！
				</p>

				<p v-else>
					<strong>这是一个 openplace 实例。</strong>它与 openplace 项目无关。如有任何问题，请联系此实例的管理员。
				</p>
			</div>

			<div class="section">
				<h3>规则</h3>

				<p>
					为了保持 openplace 对每个人公平安全，请您遵守以下规则。违反规则可能导致临时或永久封禁。
				</p>

				<Rules :is-visible="isOpen" />
			</div>

			<p class="muted">
				openplace 由 <a href="https://github.com/openplaceteam/openplace/contributors" target="_blank">开源贡献者</a> 开发。使用 <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a> 提供的地图服务。
			</p>

			<p class="muted">
				<a href="https://www.openmaptiles.org/" target="_blank">© OpenMapTiles</a> 数据来自 <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>
			</p>

			<p class="muted">
				卫星数据 © Google
			</p>
		</div>
	</Dialog>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog";

defineProps<{
	isOpen: boolean;
}>();

const emit = defineEmits<{
	close: [];
}>();

const isOpenplaceLive = ref(false);

onMounted(() => {
	isOpenplaceLive.value = location.hostname === "openplace.live";
});

const handleClose = () => {
	emit("close");
};
</script>

<style scoped>
.about-logo {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin: 0 0 3.5rem 0;
	font: 400 2.25rem/1 "Pixelify Sans Variable", var(--bs-body-font-family);
}

@media (min-width: 375px) {
	.about-logo {
		font-size: 2.5rem;
	}
}

@media (min-width: 390px) {
	.about-logo {
		font-size: 3rem;
	}
}

@media (min-width: 500px) {
	.about-logo {
		font-size: 3.5rem;
	}
}

.about-logo img {
	width: auto;
	height: 1.15em;
}

.section {
	margin: 3rem 0;
}

.muted {
	color: var(--p-text-muted-color);
	font-size: 0.85rem;
}

.muted a {
	color: inherit;
}
</style>
