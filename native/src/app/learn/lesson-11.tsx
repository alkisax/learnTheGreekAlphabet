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
  { uppercase: 'ΤΑΞΙ', lowercase: 'ταξί', answer: 'taKSI', meaning: 'Taxi' },
  { uppercase: 'ΞΕΝΟΣ', lowercase: 'ξένος', answer: 'KSEnos', meaning: 'Foreigner or stranger' },
  { uppercase: 'ΕΞΟΔΟΣ', lowercase: 'έξοδος', answer: 'EKSodos', meaning: 'Exit' },
  { uppercase: 'ΛΕΞΗ', lowercase: 'λέξη', answer: 'LEKsi', meaning: 'Word' },
  { uppercase: 'ΨΑΡΙ', lowercase: 'ψάρι', answer: 'PSAri', meaning: 'Fish' },
  { uppercase: 'ΨΩΜΙ', lowercase: 'ψωμί', answer: 'psoMI', meaning: 'Bread' },
  { uppercase: 'ΨΥΧΗ', lowercase: 'ψυχή', answer: 'psiCHI', meaning: 'Soul' },
  { uppercase: 'ΥΨΗΛΟΣ', lowercase: 'υψηλός', answer: 'ipsiLOS', meaning: 'Tall or high' },
]

const Lesson11 = () => {
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
        Lesson 11 – Ξ ξ, Ψ ψ
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Ξ ξ - ks
          </Text>

          <Text style={globalStyles.text}>
            This letter is called xi. It represents the sounds k and s
            together.
          </Text>

          <Text style={styles.example}>
            ξ → ks
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Ψ ψ - ps
          </Text>

          <Text style={globalStyles.text}>
            This letter is called psi. It represents the sounds p and s
            together.
          </Text>

          <Text style={styles.example}>
            ψ → ps
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          One letter, two sounds
        </Text>

        <Text style={globalStyles.text}>
          Although each is written as one letter, ξ and ψ represent
          combinations of two consonant sounds.
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Use ks for ξ and ps for ψ."
      />
    </ScreenScrollView>
  )
}

export default Lesson11

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
      fontSize: FONT_SIZE.xl,
      fontWeight: 'bold',
      color: colors.text,
    },
  })
