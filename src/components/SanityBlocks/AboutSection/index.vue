<script setup lang="ts">
import SquareDots from './SquareDots.vue'

defineProps<{
  aboutText: any
  contactText: any
}>()
</script>

<template>
  <section class="about-section">
    <div class="row-wrap">
      <AppRichText
        class="rich-text"
        :data="aboutText"
      />
    </div>
    <div class="row-wrap reverse">
      <AppRichText
        class="rich-text"
        :data="contactText"
      />
    </div>
  </section>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.about-section {
	@apply flex flex-col gap-[5rem] mt-[5rem] mb-[5rem];
	.row-wrap {
		@apply w-[100%] h-[21rem] flex justify-between ;
		@apply border-l-[1px] border-solid border-white relative;

		&::before{
			position: absolute;
			aspect-ratio: 1 / 1;
			width: 100%;
			height: 100%;
			content: "";
			background-size: 10rem 10rem;
			background-image: url(/bg-grid.png);
			background-position-y: -12px;
			background-position-x: 11px;
			z-index: -1;
			mask-image: linear-gradient(to bottom,transparent, white, transparent );
		}
		&.reverse{
			@apply justify-end border-l-[0] border-r-[1px] border-solid border-white;
		}
		.rich-text {
			@apply w-[100%] max-w-[30rem] p-[5rem];
			@apply flex flex-col justify-center;
		}
	
	}
}
</style>
