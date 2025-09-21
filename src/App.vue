<template>
  <div :ref="contentContainerRefName">
    <HeroPage />
    <ExperiencePage />
    <ContactPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import HeroPage from './pages/hero/HeroPage.vue'
import { useMouseEffect } from './composables/useMouseEffect'
import ExperiencePage from './pages/experience/ExperiencePage.vue'
import ContactPage from './pages/contact/ContactPage.vue'

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
<!-- TODO: use @ for scss imports -->
