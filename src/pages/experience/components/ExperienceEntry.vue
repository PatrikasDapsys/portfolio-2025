<template>
  <div class="experience-entry">
    <div class="experience-entry__title">{{ title }}</div>
    <div class="experience-entry__paragraph">{{ paragraph }}</div>
  </div>
</template>

<script setup lang="ts">
import MaskGroup from '../MaskGroup.vue'

defineProps<{
  title: string
  paragraph: string
}>()
</script>

<style scoped lang="scss">
@use '../../../styles/partials/_colors';
@use '../../../styles/mixins.scss';

.experience-entry {
  width: 80%;
  padding: 4px 0px 4px 16px;
  border-left: 1px solid colors.$base-text-color-darkest;
  color: colors.$base-text-color-darkest;
  transition: color 200ms ease-in-out;
  @include mixins.transition-mixin(200ms, ease-in-out, border-color, color);

  &:hover {
    border-color: colors.$base-text-color;
    color: colors.$base-text-color;
  }

  &__title {
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 4px;
  }
}

.light-theme {
  .experience-entry {
    color: colors.$base-text-color-dark;

    &:hover {
      border-color: colors.$light-base-text-color;
      color: colors.$light-base-text-color;
    }
  }
}
</style>
