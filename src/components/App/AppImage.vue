<script setup lang="ts">
defineProps<{
  src?: string
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
      :width="width"
      :height="height"
      :fit="fit"
      provider="sanity"
    />
  </div>
</template>
