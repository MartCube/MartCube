<script setup lang="ts">
defineProps<{
	pagination: boolean,
	tags: boolean,
}>()


</script>

<template>
	<section class="blog-section">
		blog-section
	</section>
</template>

<style>
.blog-section{
	@apply h-[calc(100vh-12rem)] flex justify-center items-center;
}
</style>