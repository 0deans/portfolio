import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'dark' | 'light' | 'system'

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark'
        }))
    }),
    { name: 'theme' }
  )
)

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement

  const systemTheme =
    theme === 'system' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  if (systemTheme || theme === 'dark') {
    root.classList.add('dark')
    return
  }

  root.classList.remove('dark')
}
