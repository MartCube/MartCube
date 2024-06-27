<script setup lang="ts">
import { PageQuery } from '~~/src/assets/queries'
import type { Page } from '~~/src/assets/types'
import AppContent from '~/components/App/AppContent.vue'

// fetch data
const { params } = useRoute('page')
const { fetch } = useSanity()
const { data, status } = await useLazyAsyncData(
  `page ${params.page}`,
  () => fetch<Page>(PageQuery, { uid: params.page }),
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
  <div class="mx-auto max-w-60rem min-h-80svh w-90vw flex justify-center pb-4rem pt-2rem lg:w-full">
    <template v-if="data && status !== 'pending'">
      <AppContent :content="data.content" />
    </template>
  </div>
</template>
