<script setup lang="ts">
import RectangleDots from './RectangleDots.vue'

import type { Project } from '~/assets/types'

defineProps<{
  data: Project
  cardIndex: number
}>()
</script>

<template>
  <div class="project-card">
    <span class="index">
      {{ String(cardIndex).padStart(2, '0') }}
    </span>
    <NuxtLink
      class="content"
      :to="data.website"
      target="_blank"
      external
    >
      <div class="info">
        <h2>{{ data.title }}</h2>
        <p>{{ data.description }}</p>
      </div>
      <RectangleDots />
    </NuxtLink>
  </div>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.project-card{
@apply w-[100%] flex justify-between;
}

.project-card .index{
@apply w-[10rem] flex justify-center items-center;
@apply text-darkGrey text-[1.5rem] font-light tracking-[0.2rem];
@apply transition duration-300 ease-in-out;
}

.project-card .content {
@apply flex justify-between items-center;
@apply w-[44rem] flex pt-[2rem] pb-[2rem];
@apply border-b-[1px] border-solid border-white;
}

.project-card .content .info{
@apply w-[100%] h-[100%] max-w-[50%];
@apply flex flex-col justify-center ;

@apply transition duration-300 ease-in-out;
@apply text-lightGrey;
}

.project-card .content .info h2{
@apply  text-[3rem] font-light tracking-[0.3rem];
}
.project-card .content .rectangle-dots{
@apply fill-lightGrey;
}
/* Hover */
.project-card:hover .index {
@apply text-primary;
}
.project-card:hover .content .info {
@apply text-white;
}
.project-card:hover .content .rectangle-dots{
@apply fill-primary;
}
</style>
