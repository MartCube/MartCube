<script setup lang="ts">
import { ArticleQuery } from '~~/src/assets/queries'
import type { Article } from '~~/src/assets/types'

// fetch data
const { params } = useRoute()
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
`page ${params.page}`,
() => fetch<Article>(ArticleQuery, { uid: params.article }),
)

// handle error
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `${params.article} Not Found`,
    fatal: true,
  })
}

// useMetaTags(data.value.metaTags)
</script>

<template>
  <section class="article">
    <template v-if="data && !pending">
      {{ data.title }}
    </template>
  </section>
</template>
