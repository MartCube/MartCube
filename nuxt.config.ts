// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  srcDir: 'src',
  typescript: {
    strict: true,
    typeCheck: false,
    shim: false,
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },
  components: {
    dirs: [
      { path: '~/components/App', global: true, pathPrefix: false },
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: { link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }] },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity',
    '@nuxt/image',
  ],
  sanity: {
    projectId: '00y851a9',
    dataset: 'production',
    minimal: true,
    apiVersion: '2023-01-01',
  },
  image: {
    sanity: {
      projectId: '00y851a9',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      // routes: ['/sitemap.xml']
    },
  },
  experimental: {
    componentIslands: true,
  },
})
