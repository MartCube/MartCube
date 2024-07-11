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
      placeholder
    />
    <div class="flex flex-col gap-2 py-[1rem]">
      <p class="text-small opacity-[0.75] transition-350 group-hover:opacity-[1]">
        {{ formatDate(data.publishedAt) }}
      </p>
      <h3 class="text-subtitle transition-350 2lines group-hover:text-primary">
        {{ data.title }}
      </h3>
      <div class="flex gap-8 capitalize opacity-[0.75] transition-350 [&>*]:text-small group-hover:opacity-[1]">
        <span>#{{ data.tag }}</span>
        <span>{{ data.readingTime }}min</span>
      </div>
    </div>
  </NuxtLink>
</template>
