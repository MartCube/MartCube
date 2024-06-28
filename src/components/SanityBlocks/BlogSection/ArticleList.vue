<script setup lang="ts">
import ArticleCard from './ArticleCard.vue'
import type { Article } from '~~/src/assets/types'

defineProps<{
  data: Article[]
}>()
</script>

<template>
  <ul
    class="slide-enter w-full flex flex-wrap justify-between gap-2rem"
    lg="lg:flex-row gap-0"
  >
    <li
      v-for="item in data"
      :key="item.uid"
    >
      <ArticleCard :data="item" />
    </li>
  </ul>
</template>
