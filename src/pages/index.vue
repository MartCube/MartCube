<script setup lang="ts">
import { PageQuery } from '~~/src/assets/queries'
import type { Page } from '~~/src/assets/types'
import AppContent from '~/components/App/AppContent.vue'

// fetch data
const { fetch } = useSanity()
const { data, status, error } = await useAsyncData(
  'landing-page',
  async () => await fetch<Page>(PageQuery, { uid: 'landing' }),
)

// handle error
if (error.value || !data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

if (data.value)useMetaTags(data.value.metaTags)
</script>

<template>
  <main class="page">
    <template v-if="data && status !== 'pending'">
      <AppContent :content="data.content" />
    </template>
  </main>
</template>
