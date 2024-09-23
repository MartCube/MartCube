// https://www.sanity.io/docs/sanity-typegen
// https://www.sanity.io/learn/course/typescripted-content/introduction

export interface MetaTags {
  title: string
  description: string
  image: string
}
export interface Sitemap {
  url: string
  changefreq: string
  priority: number
  lastmod: string
}
export interface Error {
  url: string
  statusCode: string
  statusMessage: string
  message: string
  stack: string
}
export interface Link {
  value: string
  label: string
}

// sanity docs
export interface Page {
  title: string
  uid: string
  content: any[]
  metaTags: MetaTags
}
export interface Blog {
  articleList: Article[]
  articleTags: string[]
}
export interface Article {
  title: string
  publishedAt: string
  uid: string
  tag: string
  poster: string
  readingTime: string
  content: any[]
  metaTags: MetaTags
}
export interface Project {
  title: string
  description: string
  website: string
  poster: string
}
