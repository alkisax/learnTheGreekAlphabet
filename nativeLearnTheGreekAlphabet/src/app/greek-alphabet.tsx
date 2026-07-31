// src/app/greek-alphabet.tsx

import { useContext } from 'react'
import {
  ScrollView,
  Text,
  View,
} from 'react-native'

import { ThemeContext } from '@/context/ThemeContext'
import { createGlobalStyles } from '@/styles/global.styles'

const GreekAlphabet = () => {
  const { colors } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(colors)

  return (
    <ScrollView
      style={globalStyles.screen}
      contentContainerStyle={globalStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={globalStyles.title}>
        The Greek Alphabet for beginners
      </Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.text}>
          The Greek alphabet has 24 letters, each with an uppercase and a
          lowercase form. In ancient times, Greek was written mainly with
          capital letters. Lowercase letters developed much later, during the
          Byzantine period, from faster handwritten forms.
        </Text>

        <Text style={globalStyles.text}>
          The alphabet was created around the eighth century BC and was adapted
          from the Phoenician script. One of its most important innovations was
          the use of separate letters for vowels as well as consonants.
        </Text>

        <Text style={globalStyles.text}>
          It was first used for Ancient Greek and later for Koine Greek, the
          common form of Greek spoken across much of the eastern Mediterranean.
          The same alphabet is still used for Modern Greek, although the
          pronunciation of several letters has changed.
        </Text>

        <Text style={globalStyles.text}>
          The Greek alphabet also influenced many later writing systems.
          Through the ancient Italic alphabets, it became the ancestor of the
          Latin alphabet used in English and many other languages.
        </Text>

        <Text style={globalStyles.text}>
          Modern Greek also uses combinations of two letters, such as αι, ει,
          οι, ου, αυ and ευ. These combinations may represent a single vowel
          sound or a special combination of sounds.
        </Text>

        <Text style={globalStyles.text}>
          Modern Greek is written from left to right. In early Greek
          inscriptions, however, writing could also run from right to left or
          alternate direction on each line. This alternating style is called
          boustrophedon, meaning “as the ox turns while ploughing.”
        </Text>
      </View>
    </ScrollView>
  )
}

export default GreekAlphabet