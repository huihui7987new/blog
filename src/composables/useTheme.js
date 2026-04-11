import { reactive } from 'vue'

const state = reactive({
  theme: 'tech',
  mode: 'light'
})

export function useThemeStore() {
  const setTheme = (theme) => {
    state.theme = theme
    localStorage.setItem('blog-theme', theme)
  }

  const setMode = (mode) => {
    state.mode = mode
    localStorage.setItem('blog-mode', mode)
  }

  const toggleMode = () => {
    const newMode = state.mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
  }

  return {
    currentTheme: state.theme,
    currentMode: state.mode,
    setTheme,
    setMode,
    toggleMode
  }
}
