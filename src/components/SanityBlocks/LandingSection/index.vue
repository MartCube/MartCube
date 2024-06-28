<script setup lang="ts">
import AppLogo from './AppLogo.vue'
</script>

<template>
  <section class="h-full flex flex-col">
    <AppLogo class="slide-enter my-2rem" />
    <div class="slide-enter flex flex-col gap-2 [&>p]:w-fit">
      <p class="slide-enter">
        <em class="i-icons-terminal" /> Hello world.
      </p>
      <p class="slide-enter">
        My name is Martin and I like to build cool things on the web.
      </p>
      <p class="slide-enter">
        I'm Nuxt <em class="i-icons-nuxt" /> enthusiast due to its exceptional developer experience.
      </p>
      <p class="slide-enter">
        In my free time I love to fly, surf and mostly ski.
      </p>
    </div>
  </section>
</template>
