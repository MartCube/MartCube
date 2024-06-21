<script setup lang="ts">
// import { resolveComponent } from 'vue'
import landingSection from '../SanityBlocks/LandingSection/index.vue'
import workSection from '../SanityBlocks/WorkSection/index.vue'
import blogSection from '../SanityBlocks/BlogSection/index.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
defineProps<{ content: any }>()

const serializers = {
  types: {
    landingSection,
    workSection,
    blogSection,
  },
}
</script>

<template>
  <div class="content w-inherit">
    <SanityContent
      :blocks="content"
      :serializers="serializers"
    />
  </div>
</template>
