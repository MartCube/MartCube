// app
export interface MetaTags {
	title: string,
	description: string,
	image: string,
}
export interface Sitemap {
	url: string,
	changefreq: string,
	priority: number,
	lastmod: string,
}
export interface Error {
	url: string;
	statusCode: string;
	statusMessage: string;
	message: string;
	stack: string;
}
export interface Link {
	value: string,
	label: string,	
}

// components
export interface ArticleCard {
	title: string,
	poster?: string,
	uid: string,
	tag: string,
	publishedAt: string
}
export interface ContactForm {
	email: string;
	subject: string;
	message: string;
}

// sanity docs
export interface Page {
	title: string,
	uid: string,
	content: any[],
	metaTags: MetaTags,
}
export interface Article extends ArticleCard {
	content: any[],
	metaTags: {
		title: string,
		description: string,
		image: string
	}
}
export interface Project {
	title: string,
	description: string,
	website: string,
	poster: string,
}



