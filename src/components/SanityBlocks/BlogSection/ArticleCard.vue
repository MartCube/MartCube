<script setup lang="ts">
import type { ArticleCard } from "~~/src/assets/types"

defineProps<{
	data: ArticleCard
}>()
</script>

<template>
	<NuxtLink :to="data.uid">
		{{ data.title }}
	</NuxtLink>
</template>