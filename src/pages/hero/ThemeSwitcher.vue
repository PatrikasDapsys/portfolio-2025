<template>
  <div class="theme-switcher">
    <button
      v-for="theme in Object.values(ThemeEnum)"
      :key="theme"
      class="theme-switcher__option"
      @click="() => changeTheme(theme)"
    >
      <i :class="isTheme(theme) ? 'fa-solid fa-square' : 'fa-regular fa-square'"></i>
      {{ theme }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { ThemeEnum } from '@/enums/theme'

const { changeTheme, isTheme } = useTheme()
</script>

<style scoped lang="scss">
@use '../../styles/partials/_colors';

.theme-switcher {
  display: flex;
  gap: 8px;

  &__option {
    text-transform: uppercase;
    background-color: unset;
    border: none;
    font-size: 16px;
    cursor: pointer;
    font-weight: 400;
    color: colors.$base-text-color;
  }
}

.light-theme {
  .theme-switcher {
    &__option {
      color: colors.$light-base-text-color;
    }
  }
}
</style>
