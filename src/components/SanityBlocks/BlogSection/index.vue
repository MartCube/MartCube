<script setup lang="ts">
import TagFilter from './TagFilter.vue'
import ArticleList from './ArticleList.vue'
import { BlogQuery } from '~~/src/assets/queries'
import type { Blog } from '~~/src/assets/types'

// fetch data
const activeTag = ref('all')
const { fetch } = useSanity()
const { data, status } = await useLazyAsyncData(
  'blog articles',
  () =>
    fetch<Blog>(BlogQuery, {
      activeTag: activeTag.value,
    }),
  {
    watch: [activeTag],
  },
)
// handle error
if (status.value !== 'idle' && !data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog Not Found',
    fatal: true,
  })
}

function updateTag(value: string) {
  activeTag.value = value
}
</script>

<template>
  <section class="h-auto w-full flex flex-col gap-[4rem]">
    <TagFilter
      :article-tags="data?.articleTags"
      :active-tag="activeTag"
      @update-tag="updateTag"
    />
    <template v-if="data && status !== 'pending'">
      <ArticleList :data="data.articleList" />
    </template>
  </section>
</template>
