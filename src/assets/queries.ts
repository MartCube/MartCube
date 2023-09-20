// Page
export const PageQuery = groq`*[_type == "page" && uid.current == $uid][0]{
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
// Sitemap
export const SitemapQuery = groq`*[ _type in ["page", "article"] ]{
	_type == "page"  => {
		"url": "/" + uid.current + "/",
		"changefreq": "monthly",
		"priority": sitemap.priority,
		"lastmod" :_updatedAt,
	},
	_type == "article"  => {
		"url": "/blog/" + uid.current + "/",
		"changefreq": "monthly",
		"priority": sitemap.priority,
		"lastmod" :_updatedAt,
	},
}`


// Blog
export const Articles_Q = groq`*[_type == "article" && $activeTag in [tag->title, "all"]][$from...$to]{
	title,
	'uid': uid.current,
	'tag': tag->value,
	publishedAt
	'poster': poster.asset._ref
}`
export const ArticleTags_Q = groq`*[_type == "articleTag"].title`
export const ArticleCount_Q = groq`count(*[ _type == "article" && $activeTag in [tag->title, 'all']])`
// Article
export const Article_Q = groq`*[_type == "article" && uid.current == $uid][0]{
	title, 
	'poster': poster.asset._ref, 
	'uid': uid.current,
	'tag': tag->title,
	publishedAt,
	content[] {
		_type == 'block' => { ... },
		_type == 'image' => { _key, _type, "src": asset._ref, },
		_type == 'gallery' => { _key, _type, "images": images[].asset._ref },
		_type == 'youtube' => { ... },
	},
	metaTags {
		title,
		description,
		'image': image.asset._ref,
	}
}`