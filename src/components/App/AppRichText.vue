<script setup lang="ts">
// https://github.com/saiichihashimoto/sanity-typed/tree/main/packages/client
// eslint-disable-next-line @typescript-eslint/no-explicit-any
defineProps<{ data: any }>()
</script>

<template>
  <div class="rich-text">
    <SanityContent :blocks="data" />
  </div>
</template>
