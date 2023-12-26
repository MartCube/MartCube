<script setup lang="ts">
import ArticleCard from '../BlogSection/ArticleCard.vue'
import type { Article } from '~~/src/assets/types'

defineProps<{
  data: Article[]
}>()
</script>

<template>
  <ul class="article-list">
    <li v-for="item in data" :key="item.uid">
      <ArticleCard :data="item" />
    </li>
  </ul>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.article-list{
	@apply w-full h-[20rem];
	@apply flex justify-around relative;
	&::before{
		position: absolute;
		aspect-ratio: 1 / 1;
		width: 100%;
		height: 100%;
		content: "";
		background-size: 10rem 10rem;
		background-image: url(/bg-grid.png);
		background-position-y: -11px;
		background-position-x: -13px;
		z-index: -1;
		mask-image: linear-gradient(to bottom,white,transparent);
	}
}
</style>
