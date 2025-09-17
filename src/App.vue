<template>
  <div :ref="contentContainerRefName">
    <Hero />
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import Hero from './pages/hero/Hero.vue'
import { useMouseEffect } from './composables/useMouseEffect'

const contentContainerRefName = 'content-container'

const contentContainerRef = useTemplateRef<HTMLDivElement>(contentContainerRefName)

onMounted(() => {
  useMouseEffect(contentContainerRef)
})
</script>

<style lang="scss">
@use './styles/base';
</style>
<!-- TODO: Loading page -->
<!-- TODO: Gradient background -->
<!-- TODO: css styling order package -->
