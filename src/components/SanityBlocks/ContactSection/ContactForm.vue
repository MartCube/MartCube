<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
// import emailjs from '@emailjs/browser';

defineProps<{
	data:{
		email:string,
		subject:string,
		message:string,
		submitBtn:string,
	},
}>()

const validationSchema = toTypedSchema(
	z.object({
		email: z.string().min(1, { message: "Required" }).email("Email is not valid"),
		subject: z.string().min(1, 'Required'),
		message: z.string().min(1, 'Required'),
	})
)
const { handleSubmit, isSubmitting, } = useForm({ validationSchema })
const onSubmit = handleSubmit(async (values, { resetForm }) => {
	const emailData = {
		email: values.email,
		subject: values.subject,
		message: values.message,
	}
	// emailjs.send('service_7bcefcm', 'template_contactForm', emailData, 'KYvnHwcmjWB7S78Xm')
	// 	.then(
	// 		(result:any) => {
	// 			console.log('SUCCESS!', result)
	// 		},
	// 		(error:any) => {
	// 			console.log('ERROR...', error)
	// 		},
	// 	)

	resetForm()
})
</script>

<template>
	<form 
		id="form" 
		@submit="onSubmit" 
		autocomplete="off"
	>
		<VeeInput :name="data.email" />
		<VeeInput :name="data.subject" />
		<VeeInput :name="data.message" />
		<button 
			class="submit" 
			type="submit" 
			:disabled="isSubmitting"
		>
			<span class="text">
				{{ data.submitBtn }}
			</span>
		</button>
	</form>
</template>


<style>
form{
	@apply w-full max-w-[32rem] h-[600px];
	@apply flex flex-col justify-center gap-[3rem]
}
</style>

