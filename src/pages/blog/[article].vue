<script lang="ts" setup>
import ArticleContent from '~/components/SanityBlocks/ArticleSection/ArticleContent.vue'
import ArticleInfo from '~/components/SanityBlocks/ArticleSection/ArticleInfo.vue'

import { ArticleQuery } from '~~/src/assets/queries'
import type { Article } from '~~/src/assets/types'

// fetch data
const { params } = useRoute('blog-article')
const { fetch } = useSanity()
const { data, status, error } = await useAsyncData(
  `article-${params.article}`,
  async () => await fetch<Article>(ArticleQuery, { uid: params.article }),
)

// handle error
if (error.value || !data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Article Not Found`,
    fatal: true,
  })
}

if (data.value) useMetaTags(data.value.metaTags)
</script>

<template>
  <main class="page">
    <template v-if="data && status !== 'pending'">
      <article class="mb-[2rem] w-full flex flex-col gap-[2rem]">
        <ArticleInfo
          :poster="data.poster"
          :title="data.title"
          :published-at="data.publishedAt"
          :reading-time="data.readingTime"
          :tag="data.tag"
        />
        <ArticleContent :content="data.content" />
      </article>
    </template>
  </main>
</template>
