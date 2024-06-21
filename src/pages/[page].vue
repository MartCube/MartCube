<script setup lang="ts">
import { PageQuery } from '~~/src/assets/queries'
import type { Page } from '~~/src/assets/types'

// fetch data
const { params } = useRoute('page')
const { fetch } = useSanity()
const { data, pending } = await useLazyAsyncData(
  `page ${params.page}`,
  () => fetch<Page>(PageQuery, { uid: params.page }),
)

// handle error
if (!pending && !data.value) {
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
    <template v-if="data && !pending">
      <AppContent :content="data.content" />
    </template>
  </div>
</template>
