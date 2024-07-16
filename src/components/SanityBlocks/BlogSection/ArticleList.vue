<script setup lang="ts">
import ArticleCard from './ArticleCard.vue'
import type { Article } from '~~/src/assets/types'

defineProps<{
  data: Article[] | undefined
}>()
</script>

<template>
  <ul
    class="slide-enter w-full flex flex-wrap justify-between gap-3rem"
    lg="lg:flex-row lg:justify-start lg:gap-6rem"
  >
    <li
      v-for="item in data"
      :key="item.uid"
    >
      <ArticleCard :data="item" />
    </li>
  </ul>
</template>
