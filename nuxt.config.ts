// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: '2024-09-16',
  css: ['~/assets/base.css'],
  srcDir: 'src',

  app: {
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
      routes: [
        '/sitemap.xml',
        '/_ipx/_/chopper.png',
      ],
    },
  },

})
