<template>
	<div id="index">
		<BGlogo />
		<MartCube />
		<div class="links">
			<n-link to="/">About</n-link>
			<n-link to="/">Projects</n-link>
			<n-link to="/">Contact</n-link>
		</div>
	</div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
	async asyncData({ $sanity }) {
		const query = groq`*[_type == "Article"]{ title, poster }`
		const data = await $sanity.fetch(query)
		return { data }
	},
}
</script>

<style lang="scss" scoped>
#index {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	.links {
		width: 320px;
		display: flex;
		justify-content: space-between;
		a {
			width: 100%;
			text-align: center;

			color: $text;
			text-decoration: none;
			font-size: 1.2rem;
		}
	}
}
</style>
