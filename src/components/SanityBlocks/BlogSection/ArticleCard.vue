<script setup lang="ts">
import type { Article } from '~~/src/assets/types'

const props = defineProps<{
  data: Article
}>()

const formatter = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' })
const date = new Date(props.data.publishedAt)
const newDate = formatter.format(date).replace(',', ' - ')
</script>

<template>
  <NuxtLink class="article-card" :to="`/blog/${data.uid}`">
    <AppImage
      class="poster"
      :src="data.poster"
    />
    <div class="card-info">
      <p>{{ newDate }}</p>
      <h3 class="title">
        {{ data.title }}
      </h3>
      <div class="card-meta">
        <span>#{{ data.tag }}</span>
        <span>time to read</span>
      </div>
    </div>
  </NuxtLink>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.article-card{
	@apply w-[20rem] h-[24rem] flex flex-col ;
	.poster{
		@apply w-[20rem] h-[12rem] object-cover;
	}
	.card-info{
		@apply h-[12rem] bg-dark2 pt-[1rem] pb-[1rem] pl-[2rem] pr-[2rem];
		@apply flex flex-col justify-around;
		.card-meta{
			@apply flex gap-[1rem];
		}
	}

}
</style>
