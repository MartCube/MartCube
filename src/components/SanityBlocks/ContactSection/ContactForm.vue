<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import VeeInput from './VeeInput.vue'

defineProps<{
  data: {
    email: string
    subject: string
    message: string
    submitBtn: string
  }
}>()

const validationSchema = toTypedSchema(
  z.object({
    email: z.string().min(1, { message: 'Required' }).email('Email is not valid'),
    subject: z.string().min(1, 'Required'),
    message: z.string().min(1, 'Required'),
  }),
)
const { handleSubmit, isSubmitting } = useForm({ validationSchema })
const onSubmit = handleSubmit(async (values, { resetForm }) => {
  // const emailData = {
  //   email: values.email,
  //   subject: values.subject,
  //   message: values.message,
  // }

  resetForm()
})
</script>

<template>
  <form
    id="form"
    autocomplete="off"
    @submit="onSubmit"
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
@apply w-full max-w-[26rem] h-[600px] p-[2rem];
@apply flex flex-col justify-center gap-[3rem]
}
form .submit{
@apply w-full h-[2rem];
@apply border-l-[1px] border-r-[1px] border-solid border-white;
}
</style>
