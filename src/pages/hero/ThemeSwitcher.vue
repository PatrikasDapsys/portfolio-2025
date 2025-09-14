<template>
  <div class="theme-switcher">
    <div class="theme-switcher__option">
      <i class="fa-regular fa-square"></i>
      Light
    </div>
    <div class="theme-switcher__option">
      <i class="fa-solid fa-square"></i>
      Dark
    </div>
  </div>
</template>
<!-- TODO -->
<script setup lang="ts"></script>

<style scoped lang="scss">
@use '../../styles/partials/_colors';

.theme-switcher {
  text-transform: uppercase;
  display: flex;
  gap: 8px;

  &__option {
    font-weight: 300;
    color: colors.$base-text-color;
  }
}
</style>
