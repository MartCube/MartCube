<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
	name: string,
}>()

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
	<div class="field">
		<div class="error">
			<span v-show="errorMessage"> 
				{{ errorMessage }} 
			</span>
		</div>
		<input 
			type="text"
			v-model="value" 
			:class="{ success: !errorMessage && value }" 
			:id="name" 
			:name="name"
			:placeholder="name" 
		/>
		<div class="line"></div>
	</div>
</template>

<style scoped>
.field{
	@apply w-full relative;
	@apply flex flex-col;
}

/* error */
.field .error{
	@apply absolute top-[-1rem] right-0;
}
.field .error span{ 
	@apply text-base text-error;
}

/* input */
.field input{
	@apply w-full h-[3rem];
	@apply bg-[transparent] outline-none;
	@apply border-b-[1px] border-solid border-white;
	@apply text-white text-base;
}
.field input::placeholder{
	@apply text-lightGrey text-base capitalize;
}
.field input:focus~.line{
	@apply w-full;
}

.line{
	@apply w-0; /* will change */
	@apply absolute bottom-0 left-0 h-[1px] bg-primary;
}

</style>



