<template>
  <a
    class="popup"
    :class="{ 'popup--tooltip-below': isTooltipBelow }"
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
  isTooltipBelow?: boolean
}>()
</script>

<style scoped lang="scss">
@use '../styles/partials/_breakpoints';
@use '../styles/mixins.scss';

$icon-size: 24px;
$hover-text-padding: 6px;
$animation-duration: 300ms;

$popup-tooltip-left: '&:not(.popup--tooltip-below)::before';

.popup {
  position: relative;
  transition: filter $animation-duration ease-in-out;

  &__icon {
    font-size: $icon-size;
  }

  &::before {
    display: none;
    opacity: 0;
    @include mixins.transition-mixin($animation-duration, ease, transform, right, top);
    content: attr(data-hover);
    position: absolute;
    transform: scale(0.5);
    pointer-events: none;
    white-space: nowrap;

    @media (min-width: breakpoints.$md-screen-breakpoint) {
      display: block;
    }
  }

  &:hover {
    filter: brightness(1.5);

    &::before {
      pointer-events: unset;
      opacity: 1;
    }
  }

  #{$popup-tooltip-left} {
    padding: $hover-text-padding;
    padding-right: $icon-size;
    right: -100%;
    top: calc($hover-text-padding * -2);
  }

  &:hover {
    #{$popup-tooltip-left} {
      transform: unset;
      right: 100%;
    }
  }

  &--tooltip-below {
    &:before {
      padding: $hover-text-padding;
      left: 50%;
      top: 0;
      transform: translateX(-50%) scale(0.5);
    }
  }

  &--tooltip-below {
    &:hover::before {
      top: 100%;
      transform: translateX(-50%) scale(1);
    }
  }

  &--tooltip-below &__icon {
    font-size: 38px;
  }
}
</style>
