<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <h1>{{ error?.statusCode }}</h1>
    <p>{{ error?.statusMessage }}</p>
    <NuxtImg
      class="w-[10rem]"
      src="chopper.png"
    />
    <button
      class="w-fit"
      @click="handleError"
    >
      Home Page
    </button>
  </div>
</template>
