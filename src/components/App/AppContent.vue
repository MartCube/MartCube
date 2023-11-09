<script setup lang="ts">
import { resolveComponent } from 'vue'

defineProps<{ content: any }>()

const serializers = {
  types: {
    landingSection: resolveComponent('LandingSection'),
    aboutSection: resolveComponent('AboutSection'),
    contactSection: resolveComponent('ContactSection'),
    blogSection: resolveComponent('BlogSection'),
    workSection: resolveComponent('WorkSection'),
  },
}
</script>

<template>
  <SanityContent :blocks="content" :serializers="serializers" />
</template>

<style>
.content {
width: 100%;
height: 100%;
min-height: 100vh;
}
</style>
