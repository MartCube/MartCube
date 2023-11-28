<script setup lang="ts">
// import { resolveComponent } from 'vue'
import landingSection from '../SanityBlocks/LandingSection/index.vue'
import aboutSection from '../SanityBlocks/AboutSection/index.vue'
import workSection from '../SanityBlocks/WorkSection/index.vue'
import blogSection from '../SanityBlocks/BlogSection/index.vue'
import contactSection from '../SanityBlocks/ContactSection/index.vue'

defineProps<{ content: any }>()

const serializers = {
  types: {
    landingSection,
    aboutSection,
    workSection,
    blogSection,
    contactSection,
  },
}
</script>

<template>
  <div class="content">
    <SanityContent :blocks="content" :serializers="serializers" />
  </div>
</template>
