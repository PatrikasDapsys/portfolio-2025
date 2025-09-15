const setLocalStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

const getLocalStorageItem = (key: string) => {
  return localStorage.getItem(key)
}

export { setLocalStorageItem, getLocalStorageItem }
