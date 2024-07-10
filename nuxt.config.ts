// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  css: ['~/assets/base.css'],
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  modules: [
    'nuxt-typed-router',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@unocss/nuxt',
    '@nuxtjs/sanity',
    '@nuxt/image',
    '@formkit/auto-animate',
  ],
  eslint: {
    config: {
      // https://github.com/eslint-community/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts
      stylistic: true,
      // autoInit: false,
      // standalone: false,
    },
  },
  sanity: {
    projectId: 'n11vgkgk',
    dataset: 'production',
    minimal: true,
    apiVersion: '2024-06-04', // JavaScript client, no prefix 'v' is needed
  },
  image: {
    sanity: {
      projectId: 'n11vgkgk',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml'],
    },
  },
})
