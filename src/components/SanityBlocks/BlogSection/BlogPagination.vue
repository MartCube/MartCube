<script setup lang="ts">
const props = defineProps<{
  pageSize: number
  activePage: number
  articleTotal: number
}>()

const emit = defineEmits<{
  (e: 'updatePage', page: number): void
}>()

const pageCount = computed((): number => {
  return Math.ceil(props.articleTotal / props.pageSize)
})

function prev() {
  if (props.activePage > 1)
    emit('updatePage', props.activePage - 1)
}
function next() {
  if (props.activePage < pageCount.value)
    emit('updatePage', props.activePage + 1)
}
</script>

<template>
  <ul class="pagination">
    <li
      class="prev" :class="[{ disabled: activePage <= 1 }]"
      @click="prev()"
    >
      <NuxtLink :to="`/blog?page=${activePage - 1}`" rel="prev">
        back
      </NuxtLink>
    </li>
    <li class="pagination-list">
      <ul>
        <li
          v-for="item in pageCount"
          :key="item"
          class="pagination-page" :class="[{ active: activePage === item }]"
          @click="$emit('updatePage', item)"
        >
          <NuxtLink :to="`/blog?page=${item}`">
            {{ item }}
          </NuxtLink>
        </li>
      </ul>
    </li>
    <li
      class="next" :class="[{ disabled: activePage >= pageCount }]"
      @click="next()"
    >
      <NuxtLink :to="`/blog?page=${activePage + 1}`" rel="next">
        next
      </NuxtLink>
    </li>
  </ul>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.pagination {
	@apply w-full h-auto;
	@apply flex justify-between;
}
.pagination-list {
	@apply w-full max-w-[15%];
}
.pagination-list ul {
	@apply w-full flex justify-between;
}
.pagination-list ul .active{
	@apply text-primary;
}
.pagination .prev.disabled a {
	@apply opacity-50 cursor-default pointer-events-none;
}
.pagination .next.disabled a {
	@apply opacity-50 cursor-default pointer-events-none;
}
</style>
