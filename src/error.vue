<!-- <script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="h-full min-h-100svh flex flex-col items-center justify-center gap-5">
    <NuxtImg
      class="w-[10rem]"
      src="chopper.png"
    />
    <h1 class="text-xl">
      {{ error?.statusCode }}
    </h1>
    <p class="text-l opacity-75">
      {{ error?.statusMessage }}
    </p>
    <button
      class="w-fit cursor-pointer border-b-0.5 border-b-primary border-none border-b-solid bg-transparent pb-2 text-m text-cream hover:text-primary"
      @click="handleError"
    >
      Home Page
    </button>
  </div>
</template> -->

<template>
  <NuxtLayout>
    <div>
      <h1>Dang</h1>
      <p>It looks like something broke.</p>
      <p>Sorry about that.</p>
    </div>
  </NuxtLayout>
</template>
