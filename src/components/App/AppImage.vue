<script setup lang="ts">
// import { useMediaQuery } from '@vueuse/core'
// const isMobile = useMediaQuery('(max-width: 700px)')

const props = defineProps<{
	src: string,
	width: number,
	height: number,
	alt: string,
	hotspot?:{
		x: string,
		y: string,
	}
}>()

const emits = defineEmits<{
	(e: 'imgLoaded', imgLoaded: true): void 
}>()

const lazyOptions = reactive({
	src: props.src,
	lifecycle: {
		loaded: (el:HTMLImageElement) => {
			emits('imgLoaded', true)
		}
	}
})

</script>

<template>
	<div class="image">
		<SanityImage 
			:asset-id="src" 
			:w="width" 
			:h="height" 
			auto="format"
			fit="crop"
			crop="focalpoint" 
			:fp-x="hotspot?.x" 
			:fp-y="hotspot?.y"
		>
			<template #default="{ src }">
				<img 
					v-lazy="{src: src, lifecycle: lazyOptions.lifecycle}" 
					:width="width" 
					:height="height" 
					:alt="alt"
				/>
			</template>
		</SanityImage>
	</div>
</template>

<style lang="scss" >
.image {
	display: flex;
	position: relative;

	img {
		width: inherit;
		height: inherit;
		object-fit: cover;
		display: block;

		outline: none;
		border: none;
		opacity: 0;

		// image transition 
		&[lazy=loading] {
			opacity: 0;
		}

		&[lazy=error] {
			opacity: 0;
		}

		&[lazy=loaded] {
			opacity: 1;
			transition: all 0.75s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}

}
</style>