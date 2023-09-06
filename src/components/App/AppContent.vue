<script setup lang="ts">
import { resolveComponent } from 'vue'
defineProps<{ content: any }>()

const serializers = {
	types: {
		landingBlock: resolveComponent('LazyLandingBlock'),
		aboutBlock: resolveComponent('LazyAboutBlock'),
		contactBlock: resolveComponent('LazyContactBlock'),
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