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
  <div>
		<NuxtImg src="/chopper.png" />
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>