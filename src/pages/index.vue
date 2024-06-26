<script setup lang="ts">
import { PageQuery } from '~~/src/assets/queries'
import type { Page } from '~~/src/assets/types'
import AppContent from '~/components/App/AppContent.vue'

// fetch data
const { fetch } = useSanity()
const { data, status } = await useLazyAsyncData(
  'page landing',
  () => fetch<Page>(PageQuery, { uid: 'landing' }),
)

// handle error
if (status.value !== 'idle' && !data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

if (data.value)useMetaTags(data.value.metaTags)
</script>

<template>
  <div class="w-full flex justify-center px-[20%] pt-[2rem]">
    <template v-if="data && status !== 'pending'">
      <AppContent :content="data.content" />
    </template>
  </div>
</template>
