<script setup lang="ts">
import type { Project } from '~/assets/types'

defineProps<{
  data: Project
}>()
</script>

<template>
  <section class="project-card">
    <h2>{{ data.title }}</h2>
    <p>{{ data.description }}</p>
  </section>
</template>

<style>
.project-card{
@apply flex flex-col;
}
</style>
