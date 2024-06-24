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
if (data.value) useMetaTags(data.value.metaTags)

const { formatDate } = useDateFormatter()
</script>

<template>
  <main class="w-full flex justify-center px-[20%] pt-[2rem]">
    <template v-if="data && status !== 'pending'">
      <article class="mb-[10rem] w-full flex flex-col gap-[2rem]">
        <!-- poster -->
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
        <!-- title -->
        <h1 class="relative w-fit pb-[2rem] text-xl font-thin">
          {{ data.title }}
          <span class="absolute bottom-0 left-0 h-[1px] w-full bg-primary" />
        </h1>
        <!-- info -->
        <p class="flex gap-[2rem]">
          <span> {{ formatDate(data.publishedAt) }}</span>
          <span> <span class="text-primary">#</span>{{ data.tag }}</span>
          <span>{{ data.readingTime }}min</span>
        </p>
        <!-- content -->
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
