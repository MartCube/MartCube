<script setup lang="ts">
import type { Project } from '~/assets/types';

defineProps<{
	projects: Project[]
}>()
</script>

<template>
	<section class="work-section">
		<ProjectCard v-for="project in projects" :data="project" />
	</section>
</template>

<style>
.work-section{
	@apply h-[calc(100vh-12rem)] flex flex-col justify-center gap-[2rem];
}
</style>