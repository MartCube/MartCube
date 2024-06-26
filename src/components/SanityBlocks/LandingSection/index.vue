<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import AppLogo from './AppLogo.vue'

const source = ref('martingjorceski@gmail.com')
const { copy, copied } = useClipboard({ source })
</script>

<template>
  <section class="[&>p]:w-fit">
    <AppLogo class="mb-2rem" />
    <p> <em class="i-icons-terminal" /> Hello world.</p>
    <p>My name is Martin and I like to build cool things on the web. </p>
    <p>I'm Nuxt <em class="i-icons-nuxt" /> enthusiast due to its exceptional developer experience.</p>
    <p>In my free time I love to fly, surf and mostly ski.</p>

    <NuxtLink
      to="/"
      class="relative mt-4rem w-fit flex items-center gap-2 leading-[2rem] hover:text-primary"
      @click="copy()"
    >
      <span :class="['absolute top-[-2rem] opacity-0 text-cream transition-350', { 'opacity-100 ': copied }]">
        email copied
      </span>
      Write me an email <span class="i-icons-email text-l" />
    </NuxtLink>
    <NuxtLink
      to="https://github.com/MartCube"
      target="_blank"
      external
      class="w-fit flex items-center gap-2 leading-[2rem] hover:text-primary"
    >
      Find me on GitHub <span class="i-icons-github text-l" />
    </NuxtLink>
  </section>
</template>
