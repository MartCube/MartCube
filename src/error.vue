<script setup lang="ts">
defineProps<{
  error: {
    url: string
		statusCode: number
		statusMessage: string
		message: string
		description: string
		data: any
  }
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error">
		<NuxtImg src="/chopper.png"/>
    <h2>Error {{ error.statusCode }}</h2>
    <button @click="handleError">back to home</button>
  </div>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.error{
	@apply w-full h-screen flex flex-col justify-center items-center gap-[1rem];
	img{
		@apply w-[10rem];
	}
	h2{
		@apply text-title;
	}
	button{
		@apply w-[10rem] h-[2rem] text-base capitalize;
		@apply border-l-[1px] border-r-[1px] border-solid border-white;
	}
}
</style>