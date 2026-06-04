<template>
	<p v-if="rules === null">
		加载中…
	</p>

	<ul v-else class="rules-list">
		<li v-if="rules.isMultiAccountAllowed"><i>🔑</i> 您可以创建多个账号。</li>
		<li v-else><i>🔑</i> 不要创建多个账号。如果检测到多个账号，所有账号将被封禁。</li>

		<li v-if="rules.isOffensiveContentAllowed"><i>🫢</i> 您可以绘制可能冒犯他人的内容。</li>
		<li v-else><i>🫢</i> 不要绘制冒犯性内容。</li>

		<li v-if="rules.isExplicitContentAllowed"><i>🔞</i> 您可以绘制露骨或暗示性内容。</li>
		<li v-else><i>🔞</i> 不要绘制露骨或暗示性内容。</li>

		<li v-if="rules.isGriefingAllowed"><i>🖍️</i> 您可以在现有作品上绘制以遮盖它（破坏）。</li>
		<li v-else><i>🖍️</i> 不要覆盖现有作品（破坏）。</li>

		<li v-if="rules.isKindGriefingAllowed"><i>🤝</i> 如果您是在补充完善，可以在现有作品上绘制。</li>
		<li v-else><i>🤝</i> 不要修改现有作品，即使是改进它。</li>

		<li v-if="rules.isPoliticalGriefingAllowed"><i>🏴‍☠️</i> 您可以在政治旗帜或肖像上绘制。</li>

		<li v-if="!rules.isVPNAllowed"><i>🛜</i> 此实例不允许使用 VPN 或代理。</li>

		<li v-if="rules.isBottingAllowed"><i>🤖</i> 您可以使用机器人自动绘制。</li>
		<li v-else><i>🤖</i> 此实例不允许使用机器人或任何其他自动化工具。</li>

		<li><i>⚠️</i> 不要产生可能影响他人体验的过多流量。</li>
	</ul>

	<p v-if="rules?.extraRules">{{ rules?.extraRules }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
	isVisible: boolean;
}>();

interface Rules {
	isMultiAccountAllowed: boolean;
	isOffensiveContentAllowed: boolean;
	isExplicitContentAllowed: boolean;
	isGriefingAllowed: boolean;
	isKindGriefingAllowed: boolean;
	isPoliticalGriefingAllowed: boolean;
	isVPNAllowed: boolean;
	isBottingAllowed: boolean;
	extraRules?: string;
}

const rules = ref<Rules | null>(null);

onMounted(async () => {
	if (props.isVisible) {
		await loadRules();
	}
});

watch(() => props.isVisible, async (newValue) => {
	if (newValue && rules.value === null) {
		await loadRules();
	}
});

const loadRules = async () => {
	const config = useRuntimeConfig();
	rules.value = await $fetch(`${config.public.backendUrl}/checkrobots`);
};
</script>

<style scoped>
.rules-list {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	list-style: none;
	padding: 0;
}

.rules-list li {
	display: flex;
	flex-direction: row;
	align-items: first baseline;
}

.rules-list i {
	font-style: normal;
	margin-right: 0.75rem;
}
</style>
