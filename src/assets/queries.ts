/* eslint-disable @stylistic/no-tabs */

export const PageQuery = groq`*
[_type == "page" && uid.current == $uid][0]{
	content[]{
		_type == "landingSection" => {...},
		_type == "blogSection" => {...},
		_type == "workSection" => {
			...,
			projects[]->{...}
		},
	},
	metaTags {
		title,
		description,
		"image": image.asset._ref,
	}
}`

// Article - $uid
export const ArticleQuery = groq`*[_type == "article" && uid.current == $uid][0]{
	title,
	publishedAt,
	'uid': uid.current,
	'tag': tag->value,
	'poster': poster.asset._ref,
	"readingTime": string(round(length(pt::text(content)) / 5 / 180 ) + 1),
	content[] {
		_type == 'block' => { ... },
	},
	metaTags {
		title,
		description,
		"image": image.asset._ref,
	}
}`

// Blog - $activeTag
export const BlogQuery = groq`{
	"articleList":*[_type == "article" && $activeTag in [tag->value,"all"]]{
		title,
		publishedAt,
		'uid': uid.current,
		'tag': tag->value,
		'poster': poster.asset._ref,
		"readingTime": string(round(length(pt::text(content)) / 5 / 180 ) + 1),
	},
	"articleTags": *[_type == "articleTag"] | order(value asc).value,
}`

// Sitemap
export const SitemapQuery = groq`*[ _type in ["page", "article"] ]{
 	_type == "page"  => {
		"url": "/" + uid.current + "/",
		"changefreq": "monthly",
		"priority": sitePriority,
		"lastmod" :_updatedAt,
	},
	_type == "article"  => {
		"url": "/blog/" + uid.current + "/",
		"changefreq": "monthly",
		"priority": sitePriority,
		"lastmod" :_updatedAt,
	},
}`
