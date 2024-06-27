<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const source = ref('martingjorceski@gmail.com')
const { copy, copied } = useClipboard({ source })
</script>

<template>
  <footer
    class="relative mx-auto h-10svh max-w-60rem w-90vw lg:w-full"
    flex="~ justify-between"
    border="~ t-0.5 t-white t-solid"
  >
    <p class="text-small">
      2024 <em class="i-icons-copyright mb-3px" /> All rights reserved
    </p>

    <ul class="flex gap-4">
      <NuxtLink
        to="/"
        class="relative hover:text-primary"
        @click="copy()"
      >
        <span
          class="absolute bottom-[2] right-0 w-full text-small opacity-0 transition-350"
          :class="[{ 'opacity-100 ': copied }]"
        >
          email copied
        </span>
        <span class="i-icons-email text-l" />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/MartCube"
        target="_blank"
        external
        class="hover:text-primary"
      >
        <span class="i-icons-github text-l" />
      </NuxtLink>
    </ul>
  </footer>
</template>
