<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import type { Project } from '~/assets/types'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section>
    <div class="relative h-full flex flex-col gap-2rem border-l-0.5">
      <span class="height-grow absolute left-0 top-0 h-0 w-1px bg-cream" />
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :data="project"
        :card-index="index + 1"
      />
    </div>
  </section>
</template>
