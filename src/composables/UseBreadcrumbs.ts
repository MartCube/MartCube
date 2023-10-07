interface Link {
	value: string,
	label: string,
}


export const useBreadcrumbs = () => {
	// const router = useRouter()
	// const routes = router.getRoutes()
	const route = useRoute()
	

	const HOMEPAGE = { label: 'Mart Cube', value: '/' }
	const breadcrumbs = ref<Link[]>([HOMEPAGE])


	function getBreadcrumbs(currentRoute: string): Link[] {
		
		// create links from current route
		// create link only first level
		// /blog/atomic-bent-100  -> /blog
		// /work -> /work
		// grab link from first to second slash "/"

		return [
			
		]
	}

	watch(() => ({
			path: route.path,
	}), (route) => {
			if (route.path === '/') {
				breadcrumbs.value = []
				return
			}
			breadcrumbs.value = getBreadcrumbs(route.path)
	}, {
			immediate: true,
	})

	return {
			breadcrumbs
	}
}