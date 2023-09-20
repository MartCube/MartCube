<script setup lang="ts">
import { PageQuery } from "~~/src/assets/queries"
import type { Page } from "~~/src/assets/types"

const props = defineProps<{
	pagination: boolean,
	tags: boolean,
}>()

// fetch data
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	"blog articles",
	() => fetch<Page>(
		PageQuery, 
		{ 
			pagination: props.pagination, 
			taga: props.tags, 
		})
)

// handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `Blog Not Found`,
	fatal: true
})


</script>

<template>
	<section class="blog-section">
		blog-section
	</section>
</template>

<style>
.blog-section{
	@apply h-[calc(100vh-12rem)] flex justify-center items-center;
}
</style>