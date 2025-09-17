import { ref, type ShallowRef } from 'vue'

const MOUSE_OFFSET = 12
const WORD_ROTATE_MS = 2000
const MOUSE_EFFECT_CLASS = 'mouse-effect'
const mouseWords = ['Passion', 'Code', 'Experience', 'Distinctive', 'Transform', 'Inspire']

const useMouseEffect = (contentContainerRef: Readonly<ShallowRef<HTMLDivElement | null>>) => {
  const elContainer = contentContainerRef.value
  if (!elContainer) return

  const currentWordIndex = ref(0)

  let isAnimating = false

  const createElement = (x: number, y: number) => {
    const textElement = document.createElement('div')
    textElement.innerText = mouseWords[currentWordIndex.value]
    textElement.classList.add(MOUSE_EFFECT_CLASS)
    textElement.style.top = `${y}px`
    textElement.style.left = `${x}px`

    textElement.addEventListener('animationend', () => textElement.remove())

    return textElement
  }

  const addMouseWord = (e: MouseEvent) => {
    if (isAnimating) return
    isAnimating = true

    requestAnimationFrame(() => {
      const el = createElement(e.clientX, e.clientY - MOUSE_OFFSET)
      elContainer.appendChild(el)
      isAnimating = false
    })
  }

  const rotateWords = () => {
    setInterval(() => {
      currentWordIndex.value = (currentWordIndex.value + 1) % mouseWords.length
    }, WORD_ROTATE_MS)
  }

  window.addEventListener('mousemove', addMouseWord)
  rotateWords()
}

export { useMouseEffect }
