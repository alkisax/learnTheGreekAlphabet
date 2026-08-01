// src/layout/Layout.tsx

import { useContext } from 'react'
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native'
import { Link, Slot } from 'expo-router'

import Navbar from '@/layout/layoutComponents/Navbar'
import MockAdBanner from '@/ads/MockAdBanner'
import { ThemeContext } from '@/context/ThemeContext'
import { SPACING } from '@/styles/global.styles'

const Layout = () => {
  const { colors } = useContext(ThemeContext)

  const styles = createStyles(colors)

  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.content}>
        <Slot />
      </View>

      <MockAdBanner />

      <View style={styles.footer}>
        <Link href="/about" asChild>
          <Pressable>
            <Text style={styles.footerLink}>
              About
            </Text>
          </Pressable>
        </Link>

        <Link href="/privacy" asChild>
          <Pressable>
            <Text style={styles.footerLink}>
              Privacy
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

export default Layout

const createStyles = (
  colors: Record<string, string>,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    content: {
      flex: 1,
    },

    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: SPACING.lg,
      paddingHorizontal: SPACING.md,
      paddingVertical: SPACING.md,
      backgroundColor: colors.background,
    },

    footerLink: {
      fontSize: 14,
      color: colors.dimText,
    },
  })