<script setup lang="ts">
// rewrite https://vuejs.org/guide/components/v-model.html
defineProps<{
  articleTags: string[] | undefined
  activeTag: string
}>()
defineEmits<{ (e: 'updateTag', tag: string): void }>()
</script>

<template>
  <ul class="slide-enter w-full flex flex-wrap items-center gap-[2rem]">
    <li
      v-for="item in articleTags"
      :key="item"
      @click="$emit('updateTag', item)"
    >
      <NuxtLink
        :to="{ path: '/blog', query: { tag: item } }"
        rel="noindex fallow"
        class="py-4 text-small capitalize transition-350 hover:text-primary"
      >
        <em :class="[{ 'text-primary': activeTag === item }]">#</em>{{ item }}
      </NuxtLink>
    </li>
  </ul>
</template>
