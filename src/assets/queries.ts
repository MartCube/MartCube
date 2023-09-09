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