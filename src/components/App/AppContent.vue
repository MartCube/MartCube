<script setup lang="ts">
import { resolveComponent } from 'vue'
defineProps<{ content: any }>()

const serializers = {
	types: {
		landingSection: resolveComponent('LazyLandingSection'),
		aboutSection: resolveComponent('LazyAboutSection'),
		contactSection: resolveComponent('LazyContactSection'),
		blogSection: resolveComponent('LazyBlogSection'),
		workSection: resolveComponent('LazyWorkSection'),
	},
}
</script>

<template>
	<SanityContent :blocks="content" :serializers="serializers" />
</template>

<style>
.content {
	width: 100%;
	height: 100%;
	min-height: 100vh;
}
</style>