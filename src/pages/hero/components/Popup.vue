<template>
  <a
    class="popup"
    target="_blank"
    rel="nofollow noopener noindex"
    :aria-label="hoverText"
    :href="link"
    :data-hover="hoverText"
  >
    <i :class="['popup__icon', iconClass]"></i>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  iconClass: string
  link: string
  hoverText: string
}>()
</script>

<style scoped lang="scss">
@use '../../../styles/partials/_breakpoints';

$icon-size: 24px;
$hover-text-padding: 6px;

.popup {
  position: relative;

  &__icon {
    font-size: $icon-size;
  }

  &:before {
    display: none;
    opacity: 0;
    transition: all 0.3s ease;
    content: attr(data-hover);
    padding: $hover-text-padding;
    padding-right: $icon-size;
    position: absolute;
    right: -100%;
    transform: scale(0.5);
    top: calc($hover-text-padding * -2);
    pointer-events: none;
    white-space: nowrap;

    @media (min-width: breakpoints.$md-screen-breakpoint) {
      display: block;
    }
  }

  &:hover {
    &::before {
      pointer-events: unset;
      opacity: 1;
      right: 100%;
      transform: unset;
    }
  }
}
</style>
