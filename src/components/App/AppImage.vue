<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
  width?: string
  height?: string
  fit?: string
}>()
</script>

<template>
  <div class="image">
    <NuxtImg
      class="h-inherit w-inherit object-cover"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :fit="fit"
      loading="lazy"
      provider="sanity"
      placeholder
    />
  </div>
</template>
