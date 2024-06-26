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
onClickOutside(linksRef, () => (menuValue.value = false))
</script>

<!-- exactActiveClass -->
<template>
  <header
    class="mx-auto h-[6rem] max-w-60rem w-90vw lg:w-full"
    flex="~ row items-center"
  >
    <nav
      class="py-[1rem]"
      :class="{ show: menuValue }"
    >
      <ul
        ref="linksRef"
        class="w-full flex gap-2"
      >
        <li
          v-for="(link, i) in links"
          :key="link.value"
          @click="menuValue = false"
        >
          <NuxtLink
            class="p-4 text-base capitalize transition-350 hover:text-primary"
            :class="{ 'pl-0': i==0 }"
            :to="link.value"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div
      class="menu"
      :class="[{ hide: menuValue }]"
      @click="menuToggle()"
    >
      <span class="bar" />
      <span class="bar" />
    </div>
  </header>
</template>

<style>

</style>
