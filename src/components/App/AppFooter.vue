<script setup lang="ts">
import { useClipboard, useScroll } from '@vueuse/core'

const source = ref('martingjorceski@gmail.com')
const { copy, copied } = useClipboard({ source })

// Track the scroll position using VueUse's useScroll
const { y } = useScroll(window)

// Reactive variable to control button visibility
const showButton = ref<boolean>(false)

// Watch the y-axis scroll value and show button after 200px
watch(y, (currentY: number) => {
  showButton.value = currentY > 200
})

// Scroll to the top with smooth behavior
const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer
    class="relative mx-auto h-10svh max-w-60rem w-90vw lg:w-full"
    flex="~ justify-between items-center gap-4"
  >
    <span class="absolute right-0 top-0 h-1px w-0 flex animate-[width-grow_1.5s_ease_both] bg-cream" />

    <p class="slide-enter text-small">
      <em class="i-icons-copyright mb-3px" /> All rights reserved
    </p>

    <ul class="slide-enter flex gap-4 [&_a]:text-subtitle [&_a:hover]:text-primary">
      <li>
        <button
          class="text-subtitle text-cream hover:text-primary"
          aria-label="Copy Email"
          @click="copy()"
        >
          <em class="i-icons-email" />
        </button>
      </li>
      <li>
        <NuxtLink
          to="https://www.linkedin.com/in/martin-gjorcheski-737769104/"
          aria-label="LinkedIn"
          target="_blank"
          external
        >
          <em class="i-icons-linkedin" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="https://github.com/MartCube"
          aria-label="GitHub"
          target="_blank"
          external
        >
          <em class="i-icons-github" />
        </NuxtLink>
      </li>
    </ul>

    <span
      class="absolute right-0 top-[-2rem] w-fit text-small opacity-0 transition-350"
      :class="[{ 'opacity-100 ': copied }]"
    >
      email copied
    </span>

    <button
      v-if="showButton"
      class="fixed bottom-[6rem] right-[5svw] h-[2.5rem] w-[2.5rem] rounded-full bg-dark text-[2rem] text-white opacity-55 transition-350 hover:opacity-100"
      flex="~ items-center justify-center"
      lg="lg:bottom-[1.5rem] lg:right-[1.5rem]"
      @click="scrollToTop"
    >
      <em class="i-icons-chevron rotate-90" />
    </button>
  </footer>
</template>
