<script setup lang="ts">
import { useToggle, onClickOutside } from '@vueuse/core'
import type { Link } from "~~/src/assets/types"

const links: Link[] = [
	{
		value: "/",
		label: "home",
	},
	{
		value: "/about",
		label: "about",
	},
	{
		value: "/work",
		label: "work",
	},
	{
		value: "/blog",
		label: "blog",
	},
	{
		value: "/contact",
		label: "contact",
	},
]
const [menuValue, menuToggle] = useToggle()
const linksRef = ref<HTMLElement | null>(null)
onClickOutside(linksRef, () => menuValue.value = false)



const { breadcrumbs } = useBreadcrumbs()

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
		<div class="breadcrumbs">
			<NuxtLink 
				v-for="item in breadcrumbs" 
				:to="item.value"
			>
				{{item.label}}
			</NuxtLink>
		</div>
		<div :class="['menu', { hide: menuValue }]" @click="menuToggle()">
			<span class="bar" />
			<span class="bar" />
		</div>
	</header>
</template>

<style>
header {
	@apply w-full max-w-section h-[6rem] pb-[1rem] relative;
	@apply flex justify-between items-end;
}
header::after{
	@apply content-[''] absolute w-full h-[1px] bottom-0 left-0 bg-white;
}				

/* links */
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

/* menu */
header .menu{
	@apply w-[2rem] h-[2rem];
	@apply z-10 overflow-hidden cursor-pointer;
	@apply flex flex-col justify-around;
}
header .menu.hide{
	@apply cursor-default;
}
header .menu .bar{
	@apply w-full h-[2px] bg-primary;
	animation: menuAnim 350ms ease forwards;
}
header .menu.hide .bar{
	animation: menuAnimHide 350ms ease forwards;
}
header .menu .bar:last-of-type {
	@apply self-end;
}
/* breadcrumbs */
header .breadcrumbs{
	@apply h-[2rem];
	@apply flex justify-center items-center;
}

/* Animation */
@keyframes menuAnim {
	from {
		width: 0%;
	}
	to {
		width: 100%;
	}
}
@keyframes menuAnimHide {
	from {
		width: 100%;
	}
	to {
		width: 0%;
	}
}
</style>

