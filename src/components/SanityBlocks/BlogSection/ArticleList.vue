<script setup lang="ts">
import ArticleCard from './ArticleCard.vue'
import type { Article } from '~~/src/assets/types'

defineProps<{
  data: Article[] | undefined
}>()
</script>

<template>
  <ul
    v-auto-animate
    class="slide-enter w-full flex flex-wrap justify-between gap-2rem"
    lg="lg:flex-row gap-0"
  >
    <li
      v-for="(item, index) in data"
      :key="item.uid"
      :style="{ transitionDelay: `${index * 0.1}s` }"
    >
      <ArticleCard :data="item" />
    </li>
  </ul>
</template>

<style>
.fade-translate-enter-active,
.fade-translate-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-translate-enter-from,
.fade-translate-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-translate-enter-to,
.fade-translate-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
