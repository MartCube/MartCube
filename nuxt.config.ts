// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
	srcDir: "src",
	typescript: {
		strict: true,
		typeCheck: false,
		shim: false
	},
	components: {
		"dirs": [
			{ "path": "~/components/App", "global": true, pathPrefix: false, },
			{ "path": "~/components/SanityBlocks", "global": true, pathPrefix: false, },
		],
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {	link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]}
	},
	modules: [
		'@pinia/nuxt',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/sanity',
		// 'nuxt-typed-router',
	],
	sanity: {
		projectId: '00y851a9',
		dataset: 'production',
		minimal: true,
		apiVersion: '2023-01-01',
	},
	nitro: {
		prerender: {
			crawlLinks: true,
			// routes: ['/sitemap.xml']
		}
	},
})
