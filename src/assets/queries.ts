/* eslint-disable no-tabs */
export const PageQuery = groq`*
[_type == "page" && uid.current == $uid][0]{
	title,
	'uid': uid.current,
	content[]{
		_type == "landingSection" => {...},
		_type == "aboutSection" => {...},
		_type == "contactSection" => {...},
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
	content[] {
		_type == 'block' => { ... },
		// _type == 'image' => { _key, _type, "src": asset._ref, },
		// _type == 'gallery' => { _key, _type, "images": images[].asset._ref },
		// _type == 'youtube' => { ... },
	},
	metaTags {
		title,
		description,
		"image": image.asset._ref,
	}
}`

// Blog - $activeTag $from $to
export const BlogQuery = groq`{
	"articleList":*[_type == "article" && $activeTag in [tag->value,"all"]][$from...$to]{
		title,
		publishedAt,
		'uid': uid.current,
		'tag': tag->value,
		'poster': poster.asset._ref,
	},
	"articleTags": *[_type == "articleTag"].value,
	"articleTotal": count(*[ _type == "article" && $activeTag in [tag->value, 'all']]),
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
