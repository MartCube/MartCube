<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRef } from 'vue'

const props = defineProps<{
	data: {
		name: string,
		placeholder: string,
		type: string,
	}
}>()
const nameRef = toRef(props.data, 'name')
const { errorMessage, value} = useField(nameRef, {})
</script>

<template>
	<div class="field">
		<div class="error">
			<span v-show="errorMessage"> 
				{{ errorMessage }} 
			</span>
		</div>
		<input 
			v-if="data.type == 'text'" 
			:class="{ success: !errorMessage && value }" 
			v-model="value" 
			type="text" 
			:id="data.name" 
			:name="data.name" 
			:placeholder="data.placeholder" />
	</div>
</template>

<style lang="scss" scoped>
.field {
	width: 100%;
	height: 3rem;
	position: relative;

	display: flex;
	flex-direction: column;

	.error {
		position: absolute;
		top: -1rem;
		right: 1.5rem;

		span {
			color: $error;
			font-weight: 300;
			font-size: .75rem;
			line-height: .75rem;
		}
	}

	input {
		width: 100%;
		height: 3rem;
		padding: 0 1.5rem;
		border-radius: 1.5rem;
		border: 1px solid $text;

		color: $text;
		font-size: 1.2rem;


		&::placeholder {
			color: $text;
		}

		&.success {
			border-color: $secondary;
		}

		&.error {
			border-color: $error;
		}
	}
}
</style>