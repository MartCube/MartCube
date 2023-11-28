<script setup lang="ts">
defineProps<{
  src?: string
  sizes?: string
  placeholder?: boolean
  width?: string
  height?: string
  quality?: string
  format?: string
}>()
</script>

<template>
  <div class="image">
    <NuxtImg
      :src="src"
      provider="sanity"
    />
  </div>
</template>

<!-- eslint-disable no-tabs -->
<style lang="scss">
.image {
	display: flex;
	position: relative;
}
</style>
