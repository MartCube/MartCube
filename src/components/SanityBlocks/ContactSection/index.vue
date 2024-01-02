<script setup lang="ts">
import ContactForm from './ContactForm.vue'

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
		<div class="contact-info">
			<!-- social medias -->
		</div>
  </section>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.contact-section{
	@apply w-full max-w-section min-h-[35rem] relative;
	@apply flex justify-between items-center;
	/* .contact-info{
		@apply ;
	} */
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
		mask-image: linear-gradient(to right,transparent, white, transparent );
	}
}
</style>
