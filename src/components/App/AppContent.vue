<script setup lang="ts">
import landingSection from '../SanityBlocks/LandingSection/index.vue'
import workSection from '../SanityBlocks/WorkSection/index.vue'
import blogSection from '../SanityBlocks/BlogSection/index.vue'

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
