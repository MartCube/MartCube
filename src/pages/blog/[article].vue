<script lang="ts" setup>
import { ArticleQuery } from '~~/src/assets/queries'
import type { Article } from '~~/src/assets/types'

// fetch data
const { params } = useRoute('blog-article')
const { fetch } = useSanity()
const { data, status } = await useLazyAsyncData(
  `article page ${params.article}`,
  () => fetch<Article>(ArticleQuery, { uid: params.article }),
)

// handle error
if (status.value !== 'idle' && !data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Article Not Found`,
    fatal: true,
  })
}

// if (data.value)useMetaTags(data.value.metaTags)
</script>

<template>
  <div>
    <template v-if="data && status !== 'pending'">
      <h2>{{ data.title }}</h2>
      <p>{{ data.tag }}</p>
      <p>Time to read:{{ data.readingTime }}min</p>
    </template>
  </div>
</template>
