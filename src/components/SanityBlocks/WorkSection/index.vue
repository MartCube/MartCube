<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import type { Project } from '~/assets/types'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section class="work-section">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.title"
      :data="project"
      :card-index="index + 1"
    />
  </section>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.work-section{
	@apply mt-[5rem] flex flex-col items-end;
	@apply border-l-[1px] border-solid border-white;
}
</style>
