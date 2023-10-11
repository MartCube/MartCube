<script setup lang="ts">
import type { Article } from '~~/src/assets/types'

defineProps<{
  data: Article[]
}>()
</script>

<template>
  <ul class="article-list">
    <li v-for="item in data" :key="item.uid">
      {{ item.title }}
    </li>
  </ul>
</template>

<style>
.article-list{
@apply w-full h-auto;
@apply flex justify-evenly;
}
</style>
