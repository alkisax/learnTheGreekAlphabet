// src/app/index.tsx

import { useContext } from 'react'
import {
  ScrollView,
  Text,
  View,
} from 'react-native'

import { ThemeContext } from '@/context/ThemeContext'
import { createGlobalStyles } from '@/styles/global.styles'
import SupportDeveloperAdButton from '@/ads/SupportDeveloperAdButton'

const Home = () => {
  const { colors } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(colors)

  return (
    <ScrollView
      style={globalStyles.screen}
      contentContainerStyle={[
        globalStyles.scrollContent,
        { flexGrow: 1 }
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={globalStyles.title}>
        Welcome! Καλώς ήρθατε!
      </Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.text}>
          Are you planning to visit Greece? Are you beginning to learn the
          Greek language? Do you enjoy alphabets and writing systems? This app
          is for you!
        </Text>

        <Text style={globalStyles.text}>
          Greek is one of the world’s oldest continuously written languages
          and is still spoken today in Greece and Cyprus. Its alphabet may look
          unfamiliar at first, but many letters are easier to recognize than
          they seem.
        </Text>

        <Text style={globalStyles.text}>
          This app will help you learn the Greek alphabet step by step,
          understand the basic sounds of each letter, and begin reading simple
          Greek words and signs.
        </Text>
      </View>

      <View style={{ marginTop: 'auto' }}>
        <SupportDeveloperAdButton />
      </View>
    </ScrollView>
  )
}

export default Home