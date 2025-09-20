<template>
  <ul class="page-links">
    <li class="page-links__link" v-for="entry in popupData">
      <Popup
        :iconClass="entry.iconClass"
        :link="entry.link"
        :hoverText="entry.hoverText"
        isTooltipBelow
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import popupData from '@/data/popupData'
import Popup from '../../components/Popup.vue'
</script>

<style scoped lang="scss">
@use '../../styles/partials/_colors';
@use '../../styles/partials/_z-index';
@use '../../styles/partials/_breakpoints';

$links-gap: 24px;

.page-links {
  display: flex;
  width: 100%;
  padding: 32px;
  border: 2px solid colors.$base-text-color-dark;
  list-style: none;
  flex-wrap: wrap;
  gap: $links-gap;

  &__link {
    display: flex;
    justify-content: center;
    width: calc(50% - $links-gap / 2);
  }

  @media (min-width: breakpoints.$md-screen-breakpoint) {
    padding-bottom: 48px;
    flex-wrap: nowrap;
    gap: unset;
    justify-content: space-around;

    &__link {
      width: unset;
    }
  }
}
</style>
