<script setup lang="ts">
defineProps<{
  poster: string
  title: string
  publishedAt: string
  readingTime: string
  tag: string
}>()

const { formatDate } = useDateFormatter()
</script>

<template>
  <!-- poster -->
  <NuxtImg
    class="h-auto max-w-[1280px] w-full object-cover"
    :src="poster"
    :alt="title"
    width="1280"
    height="720"
    fit="max"
    loading="lazy"
    provider="sanity"
    placeholder
  />
  <!-- title -->
  <h1 class="slide-enter relative w-fit pb-[2rem] text-title">
    {{ title }}
    <span class="absolute bottom-0 left-0 h-[1px] w-full bg-primary" />
  </h1>
  <!-- info -->
  <p
    class="slide-enter flex gap-2rem [&>span]:text-small"
    lg="lg:gap-1rem lg:[&>span]:text-base"
  >
    <span> {{ formatDate(publishedAt) }}</span>
    <span class="capitalize">
      <span class="text-primary">#</span>{{ tag }}
    </span>
    <span>{{ readingTime }}min</span>
  </p>
</template>
