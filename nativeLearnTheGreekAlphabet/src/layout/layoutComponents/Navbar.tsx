// nativeLearnTheGreekAlphabet\src\layout\layoutComponents\Navbar.tsx
import { useContext } from 'react'
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  router,
  usePathname,
} from 'expo-router'

import { ThemeContext } from '@/context/ThemeContext'
import {
  FONT_SIZE,
  SPACING,
} from '@/styles/global.styles'

const heroImage = require('../../../assets/images/heroImage.png')

const Navbar = () => {
  const pathname = usePathname()
  const { colors } = useContext(ThemeContext)

  const styles = createStyles(colors)

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }

    return pathname.startsWith(path)
  }

  const links = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'The Greek Alphabet',
      path: '/greek-alphabet',
    },
    {
      label: 'Learn',
      path: '/learn',
    },
  ] as const

  return (
    <View>
      <Image
        source={heroImage}
        style={styles.heroImage}
        resizeMode="cover"
        accessibilityLabel="Learn the Greek Alphabet"
      />

      <View style={styles.navigation}>
        {links.map((link) => (
          <Pressable
            key={link.path}
            onPress={() => router.push(link.path)}
          >
            <Text
              style={[
                styles.link,
                isActive(link.path) && styles.activeLink,
              ]}
            >
              {link.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default Navbar

const createStyles = (
  colors: Record<string, string>,
) =>
  StyleSheet.create({
    heroImage: {
      width: '100%',
      height: 210,
    },

    navigation: {
      minHeight: 70,
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: SPACING.lg,
      paddingHorizontal: SPACING.md,
      paddingVertical: SPACING.md,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },

    link: {
      fontSize: FONT_SIZE.md,
      fontWeight: '500',
      color: colors.text,
    },

    activeLink: {
      fontWeight: 'bold',
      color: colors.primary,
    },
  })