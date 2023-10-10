<script setup lang="ts">
defineProps<{ data: any }>()
</script>

<template>
  <div class="rich-text">
    <SanityContent :blocks="data" />
  </div>
</template>
