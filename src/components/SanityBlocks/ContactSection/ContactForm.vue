<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
// import emailjs from '@emailjs/browser';

// form data
const data = {
	title:'Get In Touch',
	name: {
		name: 'name',
		placeholder: 'Full Name',
		type: 'text',
	},
	email: {
		name: 'email',
		placeholder: 'Email',
		type: 'text',
	},
	message: {
		name: 'message',
		placeholder: 'Message',
		type: 'text',
	},
	button: 'Submit',
}
const responseMsg = ref(false)

const validationSchema = toTypedSchema(
	z.object({
		name: z.string().min(1, 'Required'),
		email: z.string().min(1, { message: "Required" }).email("Email is not valid"),
		message: z.string().min(1, 'Required'),
	})
)
const { handleSubmit, isSubmitting, } = useForm({ validationSchema })
const onSubmit = handleSubmit(async (values, { resetForm }) => {
	const emailData = {
		name: values.name,
		email: values.email,
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
	responseMsg.value = true
})
</script>

<template>
	<form id="form" @submit="onSubmit" autocomplete="off">
		<h2 class="title">{{ data.title }}</h2>
		<VeeInput :data="data.name" />
		<VeeInput :data="data.email" />
		<VeeInput :data="data.message" />
		<AppBtn 
			class="submit" 
			type="submit" 
			:disabled="isSubmitting">
			<span class="text">{{ data.button }}</span>
		</AppBtn>
		<div 
			v-if="responseMsg"
			class="response">
			<h2>Message Send!</h2>
			<div>
				<p>Thank you for reaching out to us.</p>
				<p>We will write you back as soon as posiblle.</p>
			</div>
			<AppBtn @click="responseMsg = false">
				<span class="text">Okey</span>
			</AppBtn>
		</div>
	</form>
</template>

<style lang="scss" scoped>
form {
	width: 100%;
	max-width: 32rem;
	height: 600px;
	padding-right: 5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3rem;

	position: relative;

	.title{
		color: $text;
		font-size: 32px;
		font-weight: 400;
		letter-spacing: 0.1rem ;
	}

	.response {
		z-index: 2;
		width: 100%;
		height: 100%;
		position: absolute;
		background: $white;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		h2{
			font-size: 2rem;
			line-height: 2.5rem;
		}
		p {
			line-height: 1.5rem;
		}
	}

	
	
	opacity: 0;
	transition: all .25s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	&.show{
		opacity: 1;
	}

	@media (max-width: 1200px) {
		padding: 0;
		align-items: center;
		.submit{
			width: 100%;
		}
	}
}
</style>