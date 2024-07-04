<script setup lang="ts">
import type { Article } from '~~/src/assets/types'
import AppImage from '~/components/App/AppImage.vue'

defineProps<{
  data: Article
}>()

const { formatDate } = useDateFormatter()
</script>

<template>
  <NuxtLink
    class="group w-[16rem] flex flex-col"
    :to="`/blog/${data.uid}`"
  >
    <AppImage
      class="h-[9rem] w-[16rem]"
      :src="data.poster"
      :alt="data.title"
      width="256"
      height="144"
      fit="max"
    />
    <div class="flex flex-col gap-2 py-[1rem]">
      <p class="text-small">
        {{ formatDate(data.publishedAt) }}
      </p>
      <h3 class="text-subtitle transition-350 2lines group-hover:text-primary">
        {{ data.title }}
      </h3>
      <div class="flex gap-8 capitalize [&>*]:text-small">
        <span>#{{ data.tag }}</span>
        <span>{{ data.readingTime }}min</span>
      </div>
    </div>
  </NuxtLink>
</template>
