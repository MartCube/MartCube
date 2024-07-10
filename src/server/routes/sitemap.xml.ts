import { SitemapStream, streamToPromise } from 'sitemap'
import { SitemapQuery } from '~~/src/assets/queries'
import type { Sitemap } from '~~/src/assets/types'

export default defineEventHandler(async (event) => {
  // fetch
  const { client } = useSanity()
  const routes: Sitemap[] = await client.fetch(SitemapQuery)

  // generate sitemap
  const sitemap = new SitemapStream({ hostname: 'https://martcube.netlify.app' })
  routes.forEach((route) => {
    sitemap.write({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: route.lastmod,
    })
  })
  sitemap.end()

  setHeader(event, 'content-type', 'application/xml')
  return streamToPromise(sitemap)
})
