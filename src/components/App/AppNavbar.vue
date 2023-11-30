<script setup lang="ts">
import { onClickOutside, useToggle } from '@vueuse/core'
import type { Link } from '~~/src/assets/types'

const links: Link[] = [
  {
    value: '/',
    label: 'home',
  },
  {
    value: '/about',
    label: 'about',
  },
  {
    value: '/work',
    label: 'work',
  },
  {
    value: '/blog',
    label: 'blog',
  },
  {
    value: '/contact',
    label: 'contact',
  },
]
const [menuValue, menuToggle] = useToggle()
const linksRef = ref<HTMLElement | null>(null)
onClickOutside(linksRef, () => menuValue.value = false)

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <header>
    <nav class="links" :class="[{ show: menuValue }]">
      <ul ref="linksRef">
        <li
          v-for="link in links"
          :key="link.value"
          class="link"
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
        :key="item.value"
        :to="item.value"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
    <div class="menu" :class="[{ hide: menuValue }]" @click="menuToggle()">
      <span class="bar" />
      <span class="bar" />
    </div>
  </header>
</template>

<!-- eslint-disable no-tabs -->
<style lang="postcss" scoped>
header {
	@apply w-full max-w-section h-[6rem] pb-[1rem] relative;
	@apply flex justify-between items-end;
	&::after{
		@apply content-[''] absolute w-full h-[1px] bottom-0 left-0 bg-white;
	}
	/* links */
	.links{
		@apply hidden;
		@apply fixed z-10 top-0 left-0 w-full h-full bg-dark;
		@apply justify-center items-center;
		&.show{
			@apply flex;
		}
		ul{
			@apply w-full flex justify-evenly;
			li a{
				@apply text-title uppercase select-none;
			}
		}
	}
	/* menu */
	.menu{
		@apply w-[2rem] h-[2rem];
		@apply z-10 overflow-hidden cursor-pointer;
		@apply flex flex-col justify-around;

		.bar{
			@apply w-full h-[2px] bg-primary;
			animation: menuAnim 350ms ease forwards;
			&:last-of-type {
				@apply self-end;
			}
		}
		&.hide{
			@apply cursor-default;
			.bar{
				animation: menuAnimHide 350ms ease forwards;
			}
		}
	}
	/* breadcrumbs */
	.breadcrumbs{
		@apply w-fit h-[2rem];
		@apply flex justify-center items-center;
		a{
			@apply text-subtitle capitalize;
			@apply flex justify-center items-center gap-[1rem];
			&:first-child::before{
				@apply content-[''] w-[1px] h-[2rem] bg-white;
			}

			&::after{
				@apply content-[''] w-[1rem] h-[1px] bg-white;
			}

			&:last-child{
				@apply pl-[1rem] text-primary;
				&::after{
					@apply hidden;
				}
			}
		}
	}
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
