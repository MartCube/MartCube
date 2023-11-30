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

	img {
		width: 100%;
		height: inherit;
		object-fit: inherit;

		outline: none;
		border: none;
		// opacity: 0;
		// image transition
		// &[lazy=loading] {
		// 	opacity: 0;
		// }

		// &[lazy=error] {
		// 	opacity: 0;
		// }

		// &[lazy=loaded] {
		// 	opacity: 1;
		// 	transition: all 0.75s cubic-bezier(0.215, 0.61, 0.355, 1);
		// }
	}
}
</style>
