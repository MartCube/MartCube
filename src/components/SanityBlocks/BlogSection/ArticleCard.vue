<script setup lang="ts">
import type { Article } from '~~/src/assets/types'

defineProps<{
  data: Article
}>()
</script>

<template>
  <NuxtLink :to="`/blog/${data.uid}`">
    <h3>{{ data.title }}</h3>
    <AppImage
      :src="data.poster"
    />
  </NuxtLink>
</template>
