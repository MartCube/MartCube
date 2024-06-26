<script setup lang="ts">
import type { Article } from '~~/src/assets/types'

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
      width="256"
      height="144"
      fit="max"
    />
    <div class="flex flex-col gap-2 py-[1rem]">
      <p>{{ formatDate(data.publishedAt) }}</p>
      <h4 class="text-l font-normal transition-350 2lines group-hover:text-primary">
        {{ data.title }}
      </h4>
      <div class="flex gap-8 capitalize">
        <span>#{{ data.tag }}</span>
        <span>{{ data.readingTime }}min</span>
      </div>
    </div>
  </NuxtLink>
</template>
