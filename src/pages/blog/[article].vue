<script lang="ts" setup>
import ArticleContent from '~/components/SanityBlocks/ArticleSection/ArticleContent.vue'
import { ArticleQuery } from '~~/src/assets/queries'
import type { Article } from '~~/src/assets/types'

// fetch data
const { params } = useRoute('blog-article')
const { fetch } = useSanity()
const { data, status } = await useLazyAsyncData(
  `article ${params.article}`,
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

function ImgLoad() {
  console.log('image load')
}
</script>

<template>
  <main class="page">
    <template v-if="data && status !== 'pending'">
      <article class="mb-[2rem] w-full flex flex-col gap-[2rem]">
        <!-- poster -->
        <div class="relative h-0 w-inherit overflow-hidden pb-[56.25%]">
          <NuxtImg
            class="absolute left-0 top-0 h-full w-full object-cover"
            :src="data.poster"
            :alt="data.title"
            width="1280"
            height="720"
            fit="max"
            loading="lazy"
            provider="sanity"
            placeholder
            @load="ImgLoad()"
          />
        </div>
        <!-- title -->
        <h1 class="relative w-fit pb-[2rem] text-title">
          {{ data.title }}
          <span class="absolute bottom-0 left-0 h-[1px] w-full bg-primary" />
        </h1>
        <!-- info -->
        <p
          class="flex gap-2rem [&>span]:text-small"
          lg="lg:gap-1rem lg:[&>span]:text-base"
        >
          <span> {{ formatDate(data.publishedAt) }}</span>
          <span class="capitalize"> <span class="text-primary">#</span>{{ data.tag }}</span>
          <span>{{ data.readingTime }}min</span>
        </p>
        <!-- content -->
        <ArticleContent :content="data.content" />
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
