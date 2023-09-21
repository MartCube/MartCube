<script setup lang="ts">
import { BlogQuery } from "~~/src/assets/queries"
import type { Blog } from "~~/src/assets/types"

// State
const pageSize = 2
const { query } = useRoute()
const activeTag = ref('all')
if ( query.tag ) activeTag.value = String(query.tag)
const activePage = ref(1)
if ( query.page ) activePage.value = Number(query.page)

const params = ref({ 
	from: activePage.value * pageSize - pageSize, 
	to: activePage.value * pageSize
})


// fetch data
const { fetch } = useSanity()
const { data, pending, refresh } = await useAsyncData(
	"blog articles",
	() => fetch<Blog>(
		BlogQuery, 
		{ 
			activeTag: activeTag.value, 
			from: params.value.from, 
			to: params.value.to,
		})
)
// handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `Blog Not Found`,
	fatal: true
})


function updateTag(value: string) {
	activeTag.value = value
	// reset pagination
	activePage.value = 1
	params.value = { from: 0, to: 2 }
	// refetch
	refresh()
}
function updatePage(value: number) {
	activePage.value = value
	// update params
	params.value.from = activePage.value * pageSize - pageSize
	params.value.to = activePage.value * pageSize
	// refetch
	refresh()
}
</script>

<template>
	<section class="blog-section">
		<template v-if="data && !pending">
			<TagFilter
				:article-tags="data.articleTags"
				:active-tag="activeTag"
				@update-tag="updateTag"
			/>
			<ArticleList :data="data.articleList"/>
			<BlogPagination
				:article-total="data.articleTotal"
				:active-page="activePage"
				:page-size="pageSize"
				@update-page="updatePage"
			/>
		</template>
	</section>
</template>

<style>
.blog-section{
	@apply w-full max-w-section h-[calc(100vh-12rem)];
	@apply flex flex-col justify-between items-center;
}
</style>