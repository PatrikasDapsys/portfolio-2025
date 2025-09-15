<template>
  <div class="theme-switcher">
    <div class="theme-switcher__option" @click="changeTheme">
      <i v-if="isTheme(ThemeEnum.DARK)" class="fa-solid fa-square"></i>
      <i v-else class="fa-regular fa-square"></i>
      {{ ThemeEnum.DARK }}
    </div>
    <div class="theme-switcher__option" @click="changeTheme">
      <i v-if="isTheme(ThemeEnum.LIGHT)" class="fa-solid fa-square"></i>
      <i v-else class="fa-regular fa-square"></i>
      {{ ThemeEnum.LIGHT }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ThemeEnum } from '@/enums/theme'
import { getLocalStorageItem, setLocalStorageItem } from '@/helpers/localStorageHelper'
import { onMounted, ref } from 'vue'

const themeKey = 'theme'

const currentTheme = ref<ThemeEnum>(ThemeEnum.DARK)

const isTheme = (themeOption: ThemeEnum) => {
  return currentTheme.value === themeOption
}

const isThemeEnum = (value: string | null): value is ThemeEnum => {
  return Object.values(ThemeEnum).includes(value as ThemeEnum)
}

const manageThemeClasses = (theme: ThemeEnum) => {
  const LIGHT_THEME_CLASS = 'light-theme'

  if (theme === ThemeEnum.LIGHT) {
    document.body.classList.add(LIGHT_THEME_CLASS)
  } else {
    document.body.classList.remove(LIGHT_THEME_CLASS)
  }
}

const setTheme = (newTheme: ThemeEnum) => {
  setLocalStorageItem(themeKey, newTheme)
  manageThemeClasses(newTheme)
}

const changeTheme = () => {
  if (currentTheme.value === ThemeEnum.DARK) {
    currentTheme.value = ThemeEnum.LIGHT
    setTheme(ThemeEnum.LIGHT)
  } else {
    currentTheme.value = ThemeEnum.DARK
    setTheme(ThemeEnum.DARK)
  }
}

const getStoredTheme = (): ThemeEnum | null => {
  const stored = getLocalStorageItem(themeKey)
  return isThemeEnum(stored) ? stored : null
}

const getCurrentTheme = () => {
  const storedTheme = getStoredTheme()

  if (storedTheme) {
    currentTheme.value = storedTheme
    manageThemeClasses(currentTheme.value)
  } else {
    currentTheme.value = ThemeEnum.DARK
    setTheme(ThemeEnum.DARK)
  }
}

onMounted(() => {
  getCurrentTheme()
})
</script>

<style scoped lang="scss">
@use '../../styles/partials/_colors';

.theme-switcher {
  text-transform: uppercase;
  display: flex;
  gap: 8px;

  &__option {
    cursor: pointer;
    font-weight: 300;
    color: colors.$base-text-color;
  }
}
</style>
