// src/app/_layout.tsx

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { ThemeProvider } from '@/context/ThemeContext'
import Layout from '@/layout/Layout'

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}