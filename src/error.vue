<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="h-full min-h-100svh flex flex-col items-center justify-center gap-5">
    <NuxtImg
      class="h-12rem"
      src="chopper.png"
      lazyload="true"
    />

    <h1 class="font-size-[3rem] leading-[4rem]">
      {{ error?.statusCode }}
    </h1>
    <p class="text-title opacity-75">
      {{ error?.statusMessage }}
    </p>
    <button
      class="w-fit border-b-0.5 border-b-primary border-b-solid pb-2 text-base text-cream hover:text-primary"
      @click="handleError"
    >
      Home Page
    </button>
  </div>
</template>
