<script setup lang="ts">
import { type ArticleCard } from '~~/src/assets/types'

defineProps<{
  data: ArticleCard[]
}>()
</script>

<template>
  <ul class="article-list">
    <li v-for="item in data" :key="item.uid">
      <ArticleCard :data="item" />
    </li>
  </ul>
</template>

<style>
.article-list{
@apply w-full h-auto;
@apply flex justify-evenly;
}
</style>
