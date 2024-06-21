<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import type { Project } from '~/assets/types'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section class="">
    <div class="border-l-0.5 border-l-white border-l-solid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :data="project"
        :card-index="index + 1"
      />
    </div>
  </section>
</template>
