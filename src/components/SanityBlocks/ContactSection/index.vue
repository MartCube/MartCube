<script setup lang="ts">
import { StringMappingType } from "typescript";
import type { ContactForm } from "~~/src/assets/types"

defineProps<{
	email: string,
	subject: string,
	message: string,
	submitBtn: string,
	contactMsg: any,
}>()
</script>

<template>
	<section class="contact-section">
		{{ email }}
		{{ subject }}
		{{ message }}
		{{ submitBtn }}
		<AppRichText :data="contactMsg" />
	</section>
</template>

<style>
.contact-section{
	@apply h-[calc(100vh-12rem)] flex flex-col justify-center items-center;
}
</style>