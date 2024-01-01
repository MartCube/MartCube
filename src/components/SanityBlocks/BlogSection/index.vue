<script setup lang="ts">
import TagFilter from '../BlogSection/TagFilter.vue'
import ArticleList from '../BlogSection/ArticleList.vue'
import BlogPagination from '../BlogSection/BlogPagination.vue'
import { BlogQuery } from '~~/src/assets/queries'
import type { Blog } from '~~/src/assets/types'

// State
const pageSize = 3
const { query } = useRoute()
const activeTag = ref('all')
const activePage = ref(1)

if (query.tag)
  activeTag.value = String(query.tag)
if (query.page)
  activePage.value = Number(query.page)

const params = ref({
  from: activePage.value * pageSize - pageSize,
  to: activePage.value * pageSize,
})

// fetch data
const { fetch } = useSanity()
const { data } = await useAsyncData(
  'blog articles',
  () => fetch<Blog>(
    BlogQuery,
    {
      activeTag: activeTag.value,
      from: params.value.from,
      to: params.value.to,
    },
  ),
  {
    watch: [
      activeTag,
      activePage,
    ],
  },
)
// handle error
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog Not Found',
    fatal: true,
  })
}

function updateTag(value: string) {
  activeTag.value = value
  // reset pagination
  activePage.value = 1
  params.value = { from: 0, to: 3 }
}
function updatePage(value: number) {
  activePage.value = value
  // update params
  params.value.from = activePage.value * pageSize - pageSize
  params.value.to = activePage.value * pageSize
}
</script>

<template>
  <section class="blog-section">
    <TagFilter
      :article-tags="data!.articleTags"
      :active-tag="activeTag"
      @update-tag="updateTag"
    />
    <ArticleList :data="data!.articleList" />
    <BlogPagination
      :article-total="data!.articleTotal"
      :active-page="activePage"
      :page-size="pageSize"
      @update-page="updatePage"
    />
  </section>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.blog-section{
	@apply w-full max-w-section h-auto relative;
	@apply flex flex-col gap-[2rem];
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
		mask-image: linear-gradient(to top,transparent, white, transparent );
	}
}
</style>
