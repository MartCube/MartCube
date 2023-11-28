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
      <SquareDots class="square-dots" />
    </div>
    <div class="row-wrap reverse">
      <SquareDots class="square-dots" />
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
		@apply w-[100%] flex justify-between p-[2rem];
		@apply border-l-[1px] border-solid border-white;
		&.reverse{
			@apply border-l-[0] border-r-[1px] border-solid border-white;
		}
		.rich-text {
			@apply w-[100%] max-w-[21.5rem] flex flex-col justify-center;
		}
		.square-dots {
			@apply w-[100%] max-w-[21.5rem] fill-lightGrey;
		}
	}
}
</style>
