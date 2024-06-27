<script setup lang="ts">
import AppLogo from './AppLogo.vue'
</script>

<template>
  <section class="h-full flex flex-col">
    <AppLogo class="my-2rem" />
    <div class="flex flex-col gap-2 [&>p]:w-fit">
      <p> <em class="i-icons-terminal" /> Hello world.</p>
      <p>My name is Martin and I like to build cool things on the web. </p>
      <p>I'm Nuxt <em class="i-icons-nuxt" /> enthusiast due to its exceptional developer experience.</p>
      <p>In my free time I love to fly, surf and mostly ski.</p>
    </div>
  </section>
</template>
