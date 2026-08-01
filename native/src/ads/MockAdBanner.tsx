// nativeLearnTheGreekAlphabet\src\ads\MockAdBanner.tsx
import { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { ThemeContext } from '@/context/ThemeContext'
import {
  FONT_SIZE,
  SPACING,
} from '@/styles/global.styles'

const MockAdBanner = () => {
  const { colors } = useContext(ThemeContext)

  const styles = createStyles(colors)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Advertisement
      </Text>

      <Text style={styles.text}>
        Mock Ad Banner
      </Text>
    </View>
  )
}

export default MockAdBanner

const createStyles = (
  colors: Record<string, string>,
) =>
  StyleSheet.create({
    container: {
      minHeight: 60,
      justifyContent: 'center',
      alignItems: 'center',
      padding: SPACING.sm,
      backgroundColor: colors.surfaceAlt,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: colors.border,
    },

    label: {
      fontSize: FONT_SIZE.sm,
      color: colors.dimText,
    },

    text: {
      fontSize: FONT_SIZE.md,
      fontWeight: '600',
      color: colors.text,
    },
  })