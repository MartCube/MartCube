<script setup lang="ts">
import type { Project } from '~/assets/types'

defineProps<{
  data: Project
  cardIndex: number
}>()
</script>

<template>
  <div class="w-[100%] flex justify-between">
    <span
      class="w-[10rem] flex items-center justify-center transition-350"
      text="text-[1.5rem] tracking-[0.2rem]"
    >
      {{ String(cardIndex).padStart(2, '0') }}
    </span>
    <NuxtLink
      class="group w-[44rem] flex items-center justify-between py-[2rem]"
      :to="data.website"
      target="_blank"
      external
    >
      <div
        class="h-[100%] max-w-[50%] w-[100%] flex flex-col justify-center"
        transition=" ease-in-out"
      >
        <h2 class="text-[3rem] font-normal tracking-[0.3rem] transition-350 group-hover:text-primary">
          {{ data.title }}
        </h2>
        <p class="opacity-80 transition-350 group-hover:opacity-100">
          {{ data.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
