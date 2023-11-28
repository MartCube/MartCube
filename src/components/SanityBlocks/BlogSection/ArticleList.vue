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
	@apply w-full h-auto;
	@apply flex justify-evenly;
}
</style>
