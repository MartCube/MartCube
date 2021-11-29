<template>
	<div class="blog">
		<h1>blog</h1>
		<n-link v-for="article in articles" :key="article.title" class="blog_card" :to="`/blog/${article.uid}`">
			<h4>{{ article.title }}</h4>
			<SanityImage :asset-id="article.poster" width="360" auto="format" :alt="article.title" />
		</n-link>
	</div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type == "Article"]{ 
	"uid":slug.current,
	title, 
	"poster": poster.asset._ref, 
	// content 
}`

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
	.blog_card {
		text-decoration: none;
		color: $text;
	}
}
</style>
