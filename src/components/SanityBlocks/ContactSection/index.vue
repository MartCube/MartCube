<script setup lang="ts">
import ContactForm from './ContactForm.vue'
import ContactDots from './ContactDots.vue'

defineProps<{
  contactForm: {
    email: string
    subject: string
    message: string
    submitBtn: string
  }
  contactMsg: any
  responseMsg: any
}>()
</script>

<template>
  <section class="contact-section">
    <ContactForm :data="contactForm" />
  </section>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.contact-section{
	@apply w-full max-w-section h-auto relative;
	@apply flex justify-between items-center;
	&::before{
		position: absolute;
		aspect-ratio: 1 / 1;
		width: 100%;
		height: 100%;
		content: "";
		background-size: 10rem 10rem;
		background-image: url(/bg-grid.png);
		background-position-y: -12px;
		background-position-x: 11px;
		z-index: -1;
		mask-image: linear-gradient(to right,transparent, white );
	}

}
</style>
