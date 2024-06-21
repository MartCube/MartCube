import imageUrlBuilder from '@sanity/image-url'
import type { MetaTags } from '~~/src/assets/types'

export default (data: MetaTags) => {
  const url = useRuntimeConfig().public.siteURL + useRoute().fullPath

  const builder = imageUrlBuilder({ projectId: useSanity().config.projectId, dataset: 'production' })
  const image = builder.image(data.image).auto('format').url()

  useHead({
    title: data.title,
    htmlAttrs: { lang: 'en' },
  })

  useSeoMeta({
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    author: 'Mart Cube',
    title: data.title,
    description: data.description,
    // OpenGraph
    ogType: 'website',
    ogLocale: 'en_US',
    ogSiteName: 'martcube',
    ogTitle: data.title,
    ogDescription: data.description,
    ogImage: image,
    ogImageAlt: data.title,
    ogUrl: url,
    // Twitter
    twitterTitle: data.title,
    twitterDescription: data.description,
    twitterImage: image,
    twitterImageAlt: data.title,
    twitterCard: 'summary_large_image',
  })
}
