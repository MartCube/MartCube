<script setup lang="ts">
import { useNow, useDateFormat } from '@vueuse/core'

const formatted = useDateFormat(useNow(), 'YYYY')
function scrollToTop(){
	window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<template>
	<footer>
		<span>
			{{ formatted }} © All rights reserved 
		</span>
		<div
			class="scroll-top"
			@click="scrollToTop()">
			arrow
		</div>
	</footer>
</template>


<style>
footer {
	@apply w-full h-[6rem] max-w-section;
	@apply relative flex justify-between items-start;
}
footer::after{
	@apply content-[''] absolute w-full h-[1px] top-0 left-0 bg-white;
}					

footer .scroll-top{
	@apply cursor-pointer;
}
</style>