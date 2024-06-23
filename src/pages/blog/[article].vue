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

if (data.value)useMetaTags(data.value.metaTags)
</script>

<template>
  <main class="w-full flex justify-center px-[20%] pt-[2rem]">
    <template v-if="data && status !== 'pending'">
      <article class="mb-[10rem] w-full flex flex-col gap-[2rem]">
        <div class="relative h-0 w-inherit overflow-hidden pb-[56.25%]">
          <NuxtImg
            class="absolute left-0 top-0 h-full w-full object-cover"
            :src="data.poster"
            width="1280"
            height="720"
            fit="max"
            provider="sanity"
          />
        </div>
        <h1 class="relative w-fit pb-[2rem] text-xl font-thin">
          {{ data.title }}
          <span class="absolute bottom-0 left-0 h-[1px] w-full bg-primary" />
        </h1>

        <AppRichText :data="data.content" />
      </article>
    </template>
  </main>
</template>

<!-- image block should look like this
<figure>
<img src="image.jpg" alt="Description of image">
<figcaption>This is the image caption.</figcaption>
</figure>
-->
