<template>
	<div class="blog">
		<h1>blog</h1>
		<div v-for="article in articles" :key="article.title">
			<h4>{{ article.title }}</h4>
			<img :src="$urlFor(article.poster).width(360)" :alt="article.title" />
		</div>
	</div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type == "Article"]{ title, poster }`

export default {
	data: () => ({ articles: {} }),
	async fetch() {
		this.articles = await this.$sanity.fetch(query)
	},
}
</script>

<style lang="scss" scoped>
.blog {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
}
</style>
