<script setup lang="ts">
import { PageQuery } from '~~/src/assets/queries'
import type { Page } from '~~/src/assets/types'

// fetch data
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
  'page landing',
  () => fetch<Page>(PageQuery, { uid: 'landing' }),
)

// handle error
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Index Not Found',
    fatal: true,
  })
}

// useMetaTags(data.value.metaTags)
</script>

<template>
  <div class="page">
    <template v-if="data && !pending">
      <AppContent :content="data.content" />
    </template>
  </div>
</template>

<style>
.page {
@apply min-h-[calc(100vh-12rem)];
}
</style>
