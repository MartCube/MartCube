<template>
	<div class="article">
		<template v-if="$fetchState.error"> <!-- <Error /> -->error </template>
		<template v-else-if="$fetchState.pending"> <!-- loading animation -->animation </template>
		<template v-else>
			<SanityImage :asset-id="article.poster" width="800" auto="format" :alt="article.title" />
			<h1 class="title">{{ article.title }}</h1>
			<SanityContent :blocks="article.content" class="content" />
		</template>
	</div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type == "Article" && slug.current == $slug][0]{
	title,
	"poster": poster.asset._ref,
	content
}`

export default {
	data: () => ({
		article: null,
		serializers: {
			types: 'img',
		},
	}),
	async fetch() {
		const fetch = await this.$sanity.fetch(query, {
			slug: this.$route.params.article,
		})
		this.article = fetch
	},
}
</script>

<style lang="scss" scoped>
.article {
	// height: 100vh;
	padding-top: 10%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	.title {
		padding: 2rem 0;
	}
	.content {
		width: 800px;

		h3 {
			padding: 1rem 0;
		}
		h4 {
			padding: 0.5rem 0;
		}
	}
}
</style>
