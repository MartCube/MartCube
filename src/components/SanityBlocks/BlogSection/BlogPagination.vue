<script setup lang="ts">
const props = defineProps<{
  pageSize: number
  activePage: number
  articleTotal: number
}>()

const emit = defineEmits<{ (e: 'updatePage', page: number): void }>()

const pageCount = computed((): number => {
  return Math.ceil(props.articleTotal / props.pageSize)
})

function prev() {
  if (props.activePage > 1) emit('updatePage', props.activePage - 1)
}
function next() {
  if (props.activePage < pageCount.value) emit('updatePage', props.activePage + 1)
}
</script>

<template>
  <ul class="h-[4rem] max-w-[20rem] w-full flex items-center self-center justify-between">
    <li>
      <NuxtLink
        to="/blog"
        class="group flex p-[1rem]"
        :class="{ disabled: activePage <= 1 }"
        @click="prev()"
      >
        <span class="i-icons-chevron text-[2rem] group-hover:text-primary" />
      </NuxtLink>
    </li>
    <li>
      <ul class="w-full flex justify-center">
        <li
          v-for="item in pageCount"
          :key="item"
          @click="$emit('updatePage', item)"
        >
          <NuxtLink
            class="p-[1rem] hover:text-primary"
            :class="[{ 'text-primary': activePage === item }]"
            :to="`/blog?page=${item}`"
          >
            {{ item }}
          </NuxtLink>
        </li>
      </ul>
    </li>
    <li>
      <NuxtLink
        :to="`/blog?page=${activePage + 1}`"
        class="group flex p-[1rem]"
        :class="{ disabled: activePage >= pageCount }"
        @click="next()"
      >
        <span class="i-icons-chevron rotate-180 text-[2rem] group-hover:text-primary" />
      </NuxtLink>
    </li>
  </ul>
</template>

<!--
"articleTotal": count(*[ _type == "article" && $activeTag in [tag->value, 'all']]),

const pageSize = 1
const activePage = ref(1)
const params = ref({
  from: activePage.value * pageSize - pageSize,
  to: activePage.value * pageSize,
})

function updatePage(value: number) {
  activePage.value = value
  // update params
  params.value.from = activePage.value * pageSize - pageSize
  params.value.to = activePage.value * pageSize
}

<BlogPagination
v-if="data.articleTotal > pageSize"
:article-total="data.articleTotal"
:active-page="activePage"
:page-size="pageSize"
@update-page="updatePage"
/>
-->
