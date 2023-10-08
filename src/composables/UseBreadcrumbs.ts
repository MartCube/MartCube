import type { Link } from "~~/src/assets/types"

export const useBreadcrumbs = () => {
	const route = useRoute()
	
	const homePage = { 
		label: 'Mart Cube', 
		value: '/' 
	}
	let pageLink = { 
		label: '', 
		value: '' 
	}
	const breadcrumbs = ref<Link[]>([homePage])


	function getCurrentRoute(currentRoute: string): Link[] {
		
		if(route.name == 'page'){
			pageLink = {
				label: currentRoute.replace(/\//g, ''),
				value: currentRoute,
			}
		}
		else if (route.name == 'blog-article'){
			pageLink = {
				label: 'blog',
				value: '/blog/',
			}
		}

		return [
			homePage,
			pageLink
		]
	}

	watch(() => ({
			path: route.path,
	}), (route) => {
			if (route.path === '/') {
				breadcrumbs.value = []
				return
			}
			breadcrumbs.value = getCurrentRoute(route.path)
	}, {
			immediate: true,
	})

	return {
			breadcrumbs
	}
}