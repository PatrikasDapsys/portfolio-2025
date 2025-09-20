<template>
  <div class="page-title">{{ title }}</div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped lang="scss">
@use '../styles/partials/_z-index';
@use '../styles/partials/_breakpoints';

.page-title {
  text-transform: uppercase;
  line-height: 1;
  font-size: 32px;
  letter-spacing: 6px;
  margin-bottom: 64px;
  z-index: z-index.$outer-text-z-index;

  @media (min-width: breakpoints.$sm-screen-breakpoint) {
    font-size: 48px;
    letter-spacing: 12px;
  }

  @media (min-width: breakpoints.$md-screen-breakpoint) {
    font-size: 64px;
  }
}
</style>
