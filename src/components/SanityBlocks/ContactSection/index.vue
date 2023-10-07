<script setup lang="ts">
defineProps<{
	contactForm:{
		email:string,
		subject:string,
		message:string,
		submitBtn:string,
	},
	contactMsg: any,
	responseMsg: any,
}>()
</script>

<template>
	<section class="contact-section">
		<!-- <div class="dots"></div> -->
		<ContactForm :data="contactForm"/>
	</section>
</template>

<style>
.contact-section{
	@apply h-[calc(100vh-12rem)] flex flex-col justify-center items-center;
}
</style>	