import { ThemeEnum } from '@/enums/theme'
import { getLocalStorageItem, setLocalStorageItem } from '@/helpers/localStorageHelper'
import { onMounted, ref } from 'vue'

const useTheme = () => {
  const THEME_KEY = 'theme'

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
    setLocalStorageItem(THEME_KEY, newTheme)
    manageThemeClasses(newTheme)
  }

  const changeTheme = (newTheme: ThemeEnum) => {
    currentTheme.value = newTheme
    setTheme(newTheme)
  }

  const getStoredTheme = (): ThemeEnum | null => {
    const stored = getLocalStorageItem(THEME_KEY)
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

  return { isTheme, changeTheme }
}

export { useTheme }
