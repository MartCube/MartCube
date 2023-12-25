import imageUrlBuilder from '@sanity/image-url'
import type { MetaTags } from '~~/src/assets/types'

export default (data: MetaTags) => {
  const { fullPath } = useRoute()
  const domain = 'https://martcube.netlify.app'
  const url = domain + fullPath

  const builder = imageUrlBuilder({ projectId: useSanity().config.projectId, dataset: 'production' })
  const image = builder.image(data.image).auto('format').url()

  useHead({
    title: data.title,
    htmlAttrs: { lang: 'en' },
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
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
    ogSiteName: '',
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
