<script setup lang="ts">
import { onClickOutside, useToggle } from '@vueuse/core'
import type { Link } from '~~/src/assets/types'

const links: Link[] = [
  {
    value: '/',
    label: 'home',
  },

  {
    value: '/work',
    label: 'work',
  },
  {
    value: '/blog',
    label: 'blog',
  },
]

const [menuValue, menuToggle] = useToggle()
const linksRef = ref<HTMLElement | null>(null)
onClickOutside(linksRef, () => menuValue.value = false)
</script>

<template>
  <header
    class="mx-auto h-10svh max-w-60rem w-90vw lg:w-full"
    flex="~ row items-center"
  >
    <nav
      :class="[{ flex: menuValue }]"
      class="fixed left-0 top-0 z-9 hidden h-full w-full bg-dark"
      flex="items-center justify-center"
      md="md:relative md:flex md:w-fit"
    >
      <ul
        ref="linksRef"
        class="flex flex-col gap-16"
        md="md:h-10svh md:flex-row md:gap-10"
      >
        <li
          v-for="link in links"
          :key="link.value"
          class="slide-enter h-full flex items-center justify-center md:h-full"
          @click="menuValue=false"
        >
          <NuxtLink
            class="p-8 text-subtitle capitalize transition-350 md:px-0 hover:text-primary"
            :to="link.value"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <span class="absolute bottom-0 left-0 h-1px w-0 bg-cream md:animate-[width-grow_1.5s_ease_both]" />
    </nav>
    <button
      class="h-[2rem] w-[2rem] flex flex-col justify-around md:hidden"
      @click="menuToggle()"
    >
      <span class="h-[2px] w-0 origin-left animate-[width-grow_0.75s_ease_both] bg-primary" />
      <span class="ml-auto h-[2px] w-0 origin-right animate-[width-grow_0.75s_ease_both] bg-primary" />
    </button>
  </header>
</template>
