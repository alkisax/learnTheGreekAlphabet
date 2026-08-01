// src/context/ThemeContext.tsx

import {
  createContext,
  useState,
  type ReactNode,
} from 'react'

import {
  COLORS,
  type AppColors,
} from '@/styles/global.styles'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  colors: AppColors
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  colors: COLORS.light,
  toggle: () => {},
})

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggle = () => {
    setTheme((previousTheme) =>
      previousTheme === 'light'
        ? 'dark'
        : 'light',
    )
  }

  const colors =
    theme === 'dark'
      ? COLORS.dark
      : COLORS.light

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors,
        toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}