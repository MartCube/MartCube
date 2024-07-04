<script setup lang="ts">
import type { Project } from '~/assets/types'

defineProps<{
  data: Project
  cardIndex: number
}>()
</script>

<template>
  <div class="slide-enter w-[100%] flex">
    <span
      class="mx-1rem mt-0.5rem flex items-start justify-center transition-350"
      text="text-[1.5rem] tracking-[0.2rem]"
      lg="lg:mx-4rem lg:mt-1.5rem"
    >
      {{ String(cardIndex).padStart(2, '0') }}
    </span>
    <NuxtLink
      class="group"
      flex="flex flex-col justify-center"
      :to="data.website"
      target="_blank"
      external
    >

      <h2
        class="text-[3rem] text-title text-primary font-normal tracking-[0.3rem] transition-350 group-hover:text-primary"
        lg="lg:text-[3rem] lg:line-height-4rem lg-text-cream"
      >
        {{ data.title }}
      </h2>
      <p
        class="text-small opacity-80 transition-350 group-hover:opacity-100"
        lg="lg:w-75% lg:text-base"
      >
        {{ data.description }}
      </p>
    </NuxtLink>
  </div>
</template>
