<script setup lang="ts">
import type { ArticleCard } from '~~/src/assets/types'

defineProps<{
  data: ArticleCard
}>()
</script>

<template>
  <NuxtLink :to="data.uid">
    <h3>{{ data.title }}</h3>
    <AppImage
      :src="data.poster"
    />
  </NuxtLink>
</template>
