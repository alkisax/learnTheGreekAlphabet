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
  SPACING,
  createGlobalStyles,
} from '@/styles/global.styles'

const exercises: Exercise[] = [
  { uppercase: 'ΠΑΡΚΟ', lowercase: 'πάρκο', answer: 'PARko', meaning: 'Park' },
  { uppercase: 'ΜΕΤΡΟ', lowercase: 'μετρό', answer: 'meTRO', meaning: 'Metro' },
  { uppercase: 'ΠΟΡΤΑ', lowercase: 'πόρτα', answer: 'PORta', meaning: 'Door' },
  { uppercase: 'ΠΑΤΡΑ', lowercase: 'Πάτρα', answer: 'PAtra', meaning: 'A city in Greece' },
  { uppercase: 'ΚΡΕΜΑ', lowercase: 'κρέμα', answer: 'KREma', meaning: 'Cream' },
  { uppercase: 'ΤΟΜΑΤΑ', lowercase: 'τομάτα', answer: 'toMAta', meaning: 'Tomato' },
  { uppercase: 'ΠΕΡΙΠΤΕΡΟ', lowercase: 'περίπτερο', answer: 'peRIptero', meaning: 'Kiosk' },
  { uppercase: 'ΚΑΡΤΑ', lowercase: 'κάρτα', answer: 'KARta', meaning: 'Card' },
]

const Lesson3 = () => {
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
        Lesson 3 – Τ τ, Κ κ, Π π, Ρ ρ
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Τ τ - t</Text>
          <Text style={globalStyles.text}>
            This letter is called taf. It is pronounced like the English t.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Κ κ - k</Text>
          <Text style={globalStyles.text}>
            This letter is called kappa. It is pronounced like the English k.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Π π - p</Text>
          <Text style={globalStyles.text}>
            This letter is called pi. It is pronounced like the English p.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Ρ ρ - r</Text>
          <Text style={globalStyles.text}>
            This letter is called ro. It is pronounced like a tapped or lightly
            rolled r.
          </Text>

          <Text style={globalStyles.text}>
            Greek Ρ looks like English P, but represents an r sound.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Letters that look familiar
        </Text>

        <Text style={globalStyles.text}>
          Some Greek letters resemble Latin letters. Greek Ρ, however, is
          pronounced r, not p.
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Use capital letters to show the stressed syllable."
      />
    </ScreenScrollView>
  )
}

export default Lesson3

const createStyles = (
  colors: Record<string, string>,
) =>
  StyleSheet.create({
    sections: {
      gap: SPACING.md,
    },

    noteCard: {
      gap: SPACING.md,
      padding: SPACING.lg,
      backgroundColor: colors.surfaceAlt,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: colors.border,
    },
  })
