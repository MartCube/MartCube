<script lang="ts" setup>
const props = defineProps<{
  id: string
}>()

const src = `https://www.youtube.com/embed/${props.id}?autoplay=1`
// http://www.get-youtube-thumbnail.com/
const thumbnail = `https://i3.ytimg.com/vi/${props.id}/maxresdefault.jpg`

const play = ref(false)
</script>

<template>
  <div class="youtube relative">
    <template v-if="play">
      <div class="relative h-0 w-inherit overflow-hidden pb-[56.25%]">
        <iframe
          class="absolute left-0 top-0 h-full w-full"
          :src="src"
          allow="autoplay"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </template>
    <template v-else>
      <NuxtImg
        class="h-auto max-w-[1280px] w-full object-cover opacity-75"
        :src="thumbnail"
        width="1280"
        height="720"
      />
      <p
        class="absolute left-0 left-50% top-50% h-4rem w-4rem flex cursor-pointer items-center justify-center bg-dark bg-op-75 -translate-x-1/2 -translate-y-1/2"
        @click="play=true"
      >
        <span class="i-icons-play h-3rem w-3rem text-primary" />
      </p>
    </template>
  </div>
</template>
