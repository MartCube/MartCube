<script lang="ts" setup>
defineProps<{
  src: string
  caption: string
}>()
</script>

<template>
  <figure>
    <NuxtImg
      class="h-auto max-w-[1280px] w-full object-cover"
      :src="src"
      width="1280"
      height="720"
      fit="max"
      loading="lazy"
      provider="sanity"
      placeholder
    />
    <figcaption class="text-center text-primary italic">
      "<span class="text-small">{{ caption }}</span>"
    </figcaption>
  </figure>
</template>
