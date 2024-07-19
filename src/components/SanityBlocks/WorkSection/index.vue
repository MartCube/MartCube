<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import type { Project } from '~/assets/types'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section class="relative h-full flex flex-col gap-2rem border-l-0.5">
    <span class="absolute left-0 top-0 h-0 w-1px animate-[height-grow_2s_ease_both] bg-cream" />
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.title"
      :data="project"
      :card-index="index + 1"
    />
  </section>
</template>
