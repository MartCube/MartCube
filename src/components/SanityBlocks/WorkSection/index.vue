<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import type { Project } from '~/assets/types'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section class="work-section">
		<div class="project-list">
			<ProjectCard
				v-for="(project, index) in projects"
				:key="project.title"
				:data="project"
				:card-index="index + 1"
			/>
		</div>
		<button>load more</button>
  </section>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
.work-section{
	@apply mb-[5rem] flex flex-col items-center;
	.project-list{
		@apply mt-[5rem] mb-[5rem] border-l-[1px] border-solid border-white;
		@apply w-full flex flex-col;
	}
	button{
		@apply h-[2rem] capitalize;
		@apply border-b border-solid border-primary;
	}
}
</style>
