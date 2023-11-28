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
    <ContactDots class="contact-dots" />
    <ContactForm :data="contactForm" />
  </section>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.contact-section{
	@apply flex justify-between items-center mt-[1rem] mb-[1rem];
	.contact-dots{
		@apply w-[100%] h-auto fill-lightGrey
	}

}
</style>
