<script setup lang="ts">
const props = defineProps<{
	pageSize: number,
	activePage: number,
	articleTotal: number,
}>()

const pageCount = computed((): number => { 
	return Math.ceil( props.articleTotal / props.pageSize) 
})

defineEmits<{
  (e: 'updatePage', page: number): void
}>()
</script>

<template>
	<ul class="pagination">
			<li 
				:class="['prev', { disabled: activePage <= 1}]"
				@click="$emit('updatePage', activePage-1)"
			>
				<NuxtLink :to="`/blog?page=${activePage-1}`" rel="prev">
					back
				</NuxtLink>
			</li>
			<li class="pagination-list">
				<ul>
					<li 
						v-for="item in pageCount" 
						:class="['pagination-page', { active: activePage == item }]" 
						@click="$emit('updatePage', item)"
					>
						<NuxtLink :to="`/blog?page=${item}`" >
							{{ item }}
						</NuxtLink>
					</li>
				</ul>
			</li>
			<li
				:class="['next', { disabled: activePage >= pageCount}]"
				@click="$emit('updatePage', activePage+1)"
			>
				<NuxtLink :to="`/blog?page=${activePage+1}`" rel="next">
					next
				</NuxtLink>
		</li>
	</ul>
</template>

<style>
.pagination{
	@apply w-full h-auto;
	@apply flex justify-between;
}
.pagination-list{
	@apply w-full max-w-[15%];
}
.pagination-list ul {
	@apply w-full flex justify-between;
}
.pagination .prev.disabled a{
	@apply opacity-50 cursor-default;
}
</style>
