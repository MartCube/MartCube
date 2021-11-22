export default {
	target: 'static',
	components: true,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'MartCube',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
		link: [{ rel: 'icon', type: 'png', href: 'favicon.png' }],
	},

	css: ['~/assets/main.scss'],

	plugins: [],

	styleResources: { scss: ['./assets/colors.scss'] },

	modules: ['@nuxtjs/sanity/module'],

	sanity: {
		// add runtime configuration to protect
		projectId: 'sp2ehz21',
	},

	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources'],

	build: {},
}
