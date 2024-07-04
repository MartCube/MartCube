<script lang="ts" setup>
defineProps<{
  src: string
}>()
</script>

<template>
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
</template>
