<script setup lang="ts">
defineProps<{
	aboutText: any,
	contactText: any,
}>()
</script>

<template>
	<section class="about-section">
		<AppRichText :data="aboutText" class="about-text"/>
		<div class="about-dots">
			<!-- svg -->
		</div>
		<div class="about-dots">
			<!-- svg -->
		</div>
		<AppRichText :data="contactText" class="contact-text"/>
	</section>
</template>

<style>
.about-section{
	@apply max-w-section h-[calc(100vh-12rem)] flex flex-wrap;
}
.rich-text{
	@apply w-[50%] flex flex-col justify-center
}
.about-dots{
	@apply w-[50%] h-[2rem]
}

</style>