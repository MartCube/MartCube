<script setup lang="ts">
import { useToggle, onClickOutside } from '@vueuse/core'
import type { Link } from "~~/src/assets/types"

const links: Link[] = [
	{
		value: "/",
		label: "home",
	},
	{
		value: "/about/",
		label: "about",
	},
	{
		value: "/work/",
		label: "work",
	},
	{
		value: "/blog/",
		label: "blog",
	},
	{
		value: "/contact/",
		label: "contact",
	},
]
const [menuValue, menuToggle] = useToggle()
const linksRef = ref<HTMLElement | null>(null)

onClickOutside(linksRef, () => menuValue.value = false)
</script>

<template>
	<header>
		<nav :class="['links', { show: menuValue }]">
			<ul ref="linksRef"> 
				<li 
					class="link" 
					v-for="link in links" 
					@click="menuValue = false"
				>
					<NuxtLink :to="link.value">
						{{ link.label }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<div class="menu" @click="menuToggle()">
			menu
		</div>
	</header>
</template>

<style>
header {
	@apply w-full h-[6rem] max-w-section;
	@apply relative flex flex-row-reverse items-end;
}
header::after{
	@apply content-[''] absolute w-full h-[1px] bottom-0 left-0 bg-white;
}					


header .links{
	@apply hidden;
	@apply fixed z-10 top-0 left-0 w-full h-full bg-dark;
	@apply justify-center items-center;
}
header .links.show{
	@apply flex;
}
header .links ul{
	@apply w-full flex justify-evenly;
}
header .links ul li a{
	@apply text-title uppercase select-none;
}


header .menu{
	@apply cursor-pointer;
}
</style>