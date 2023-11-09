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

<style lang="scss">
.image {
display: flex;
position: relative;

// img {
// width: inherit;
// height: inherit;
// object-fit: cover;
// display: block;

// outline: none;
// border: none;
// opacity: 0;

// // image transition
// &[lazy=loading] {
// opacity: 0;
// }

// &[lazy=error] {
// opacity: 0;
// }

// &[lazy=loaded] {
// opacity: 1;
// transition: all 0.75s cubic-bezier(0.215, 0.61, 0.355, 1);
// }
// }

}
</style>
