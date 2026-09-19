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
  { uppercase: 'ΑΥΓΟ', lowercase: 'αυγό', answer: 'avGO', meaning: 'Egg' },
  { uppercase: 'ΑΥΡΙΟ', lowercase: 'αύριο', answer: 'AVrio', meaning: 'Tomorrow' },
  { uppercase: 'ΑΥΛΗ', lowercase: 'αυλή', answer: 'avLI', meaning: 'Yard or courtyard' },
  { uppercase: 'ΑΥΤΟ', lowercase: 'αυτό', answer: 'afTO', meaning: 'This or it' },
  { uppercase: 'ΑΥΤΟΚΙΝΗΤΟ', lowercase: 'αυτοκίνητο', answer: 'aftoKInito', meaning: 'Car' },
  { uppercase: 'ΕΥΡΩ', lowercase: 'ευρώ', answer: 'evRO', meaning: 'Euro' },
  { uppercase: 'ΕΥΚΟΛΟ', lowercase: 'εύκολο', answer: 'EFkolo', meaning: 'Easy' },
  { uppercase: 'ΕΥΧΑΡΙΣΤΩ', lowercase: 'ευχαριστώ', answer: 'efchariSTO', meaning: 'Thank you' },
  { uppercase: 'ΕΥΘΥΝΗ', lowercase: 'ευθύνη', answer: 'efTHIni', meaning: 'Responsibility' },
]

const Lesson13 = () => {
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
        Lesson 13 – ΑΥ αυ, ΕΥ ευ
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΑΥ αυ - av or af
          </Text>

          <Text style={globalStyles.text}>
            The combination αυ is pronounced either av or af, depending on
            the next sound.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΕΥ ευ - ev or ef
          </Text>

          <Text style={globalStyles.text}>
            The combination ευ follows the same rule. It is pronounced either
            ev or ef.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          The basic rule
        </Text>

        <Text style={globalStyles.text}>
          Before a vowel or a voiced consonant, use v.
        </Text>

        <Text style={globalStyles.text}>
          Before θ, κ, ξ, π, σ, τ, φ, χ or ψ, use f.
        </Text>

        <Text style={styles.example}>
          αυγό → avGO{'\n'}
          αυτό → afTO{'\n'}
          ευρώ → evRO{'\n'}
          εύκολο → EFkolo
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Decide whether αυ and ευ are pronounced with v or f."
      />
    </ScreenScrollView>
  )
}

export default Lesson13

const createStyles = (colors: Record<string, string>) =>
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

    example: {
      fontSize: FONT_SIZE.lg,
      lineHeight: 30,
      fontWeight: 'bold',
      color: colors.text,
    },
  })
