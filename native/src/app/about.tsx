import { useContext } from 'react'
import ScreenScrollView from '@/components/ScreenScrollView'
import {
  Text,
  View,
} from 'react-native'

import { ThemeContext } from '@/context/ThemeContext'
import { createGlobalStyles } from '@/styles/global.styles'

const About = () => {
  const { colors } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(colors)

  return (
    <ScreenScrollView
      style={globalStyles.screen}
      contentContainerStyle={globalStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={globalStyles.title}>
        About this app
      </Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.text}>
          Learn the Greek Alphabet is a free educational app for complete
          beginners, travellers and anyone interested in writing systems.
        </Text>

        <Text style={globalStyles.text}>
          Its main goal is to help users recognise Greek letters, understand
          their Modern Greek pronunciation and begin reading simple words,
          names and signs.
        </Text>

        <Text style={globalStyles.text}>
          The lessons focus mainly on reading and pronunciation rather than
          grammar or spelling. Letters and common letter combinations are
          introduced gradually, followed by simple interactive exercises.
        </Text>

        <Text style={globalStyles.text}>
          This is an independent learning project and is not affiliated with
          any school, university or government organisation.
        </Text>
      </View>
    </ScreenScrollView>
  )
}

export default About
