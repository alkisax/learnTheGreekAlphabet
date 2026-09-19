import { useContext } from 'react'
import ScreenScrollView from '@/components/ScreenScrollView'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import LessonExercises, {
  type Exercise,
} from '@/components/lessons/exercises/LessonExercises'
import { ThemeContext } from '@/context/ThemeContext'
import {
  FONT_SIZE,
  SPACING,
  createGlobalStyles,
} from '@/styles/global.styles'

const exercises: Exercise[] = [
  { uppercase: 'ΠΟΥ', lowercase: 'που', answer: 'pu', meaning: 'Where, that or which' },
  { uppercase: 'ΜΟΥ', lowercase: 'μου', answer: 'mu', meaning: 'My or to me' },
  { uppercase: 'ΣΟΥ', lowercase: 'σου', answer: 'su', meaning: 'Your or to you' },
  { uppercase: 'ΚΟΥΤΙ', lowercase: 'κουτί', answer: 'kuTI', meaning: 'Box' },
  { uppercase: 'ΜΟΥΣΙΚΗ', lowercase: 'μουσική', answer: 'musiKI', meaning: 'Music' },
  { uppercase: 'ΛΟΥΛΟΥΔΙ', lowercase: 'λουλούδι', answer: 'luluDI', meaning: 'Flower' },
  { uppercase: 'ΤΟΥΡΙΣΤΑΣ', lowercase: 'τουρίστας', answer: 'tuRIstas', meaning: 'Tourist' },
  { uppercase: 'ΟΥΡΑΝΟΣ', lowercase: 'ουρανός', answer: 'uraNOS', meaning: 'Sky' },
]

const Lesson9 = () => {
  const { colors } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(colors)
  const styles = createStyles(colors)

  return (
    <ScreenScrollView
      style={globalStyles.screen}
      contentContainerStyle={globalStyles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={globalStyles.title}>
        Lesson 9 – ΟΥ ου: the u sound
      </Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          ΟΥ ου - u
        </Text>

        <Text style={globalStyles.text}>
          The combination ου represents one sound. It is pronounced like oo
          in “food”.
        </Text>

        <Text style={globalStyles.text}>
          Do not pronounce the letters separately.
        </Text>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Two letters, one sound
        </Text>

        <Text style={globalStyles.text}>
          Although ου contains two written letters, it normally represents
          the single Modern Greek sound u.
        </Text>

        <Text style={styles.example}>
          ου → u
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint='Read ου like oo in “food”.'
      />
    </ScreenScrollView>
  )
}

export default Lesson9

const createStyles = (colors: Record<string, string>) =>
  StyleSheet.create({
    noteCard: {
      gap: SPACING.md,
      padding: SPACING.lg,
      backgroundColor: colors.surfaceAlt,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: colors.border,
    },

    example: {
      fontSize: FONT_SIZE.xl,
      fontWeight: 'bold',
      color: colors.text,
    },
  })
