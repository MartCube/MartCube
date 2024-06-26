<script setup lang="ts">
import ArticleCard from './ArticleCard.vue'
import type { Article } from '~~/src/assets/types'

defineProps<{
  data: Article[]
}>()
</script>

<template>
  <ul class="h-[20rem] w-full flex justify-between">
    <li
      v-for="item in data"
      :key="item.uid"
    >
      <ArticleCard :data="item" />
    </li>
  </ul>
</template>
