<script setup lang="ts">
defineProps<{
  articleTags: string[]
  activeTag: string
}>()

defineEmits<{
  (e: 'updateTag', tag: string): void
}>()
</script>

<template>
  <ul class="filter">
    <li
      class="tag" :class="[{ active: activeTag === 'all' }]"
      @click="$emit('updateTag', 'all')"
    >
      <NuxtLink
        to="/blog?tag=all"
        rel="noindex fallow"
      >
        <em>#</em> all
      </NuxtLink>
    </li>
    <li
      v-for="item in articleTags"
      :key="item"
      class="tag" :class="[{ active: activeTag === item }]"
      @click="$emit('updateTag', item)"
    >
      <NuxtLink
        :to="`/blog?tag=${item}`"
        rel="noindex fallow"
      >
        <em>#</em> {{ item }}
      </NuxtLink>
    </li>
  </ul>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.filter{
	@apply w-full h-auto;
	@apply flex gap-[1rem];
	.tag{
		@apply capitalize p-[1rem] cursor-pointer;
		em{
			@apply text-white;
		}
		&.active em{
			@apply text-primary;
		}
		&:hover{
			@apply text-primary;
		}
	}
}
</style>
