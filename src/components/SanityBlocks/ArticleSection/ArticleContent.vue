<script setup lang="ts">
import youtube from './YoutubeBlock.vue'
import image from './ImageBlock.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
defineProps<{ content: any }>()

const serializers = {
  types: {
    youtube,
    image,
  },
}
</script>

<template>
  <div class="slide-enter flex flex-col gap-2rem">
    <SanityContent
      :blocks="content"
      :serializers="serializers"
    />
  </div>
</template>
