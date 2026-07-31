import { useContext } from 'react'
import {
  ScrollView,
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
  { uppercase: 'ΜΗΛΟ', lowercase: 'μήλο', answer: 'MIlo', meaning: 'Apple' },
  { uppercase: 'ΗΜΕΡΑ', lowercase: 'ημέρα', answer: 'iMEra', meaning: 'Day' },
  { uppercase: 'ΜΟΝΗ', lowercase: 'μόνη', answer: 'MOni', meaning: 'Alone — feminine form' },
  { uppercase: 'ΤΥΡΙ', lowercase: 'τυρί', answer: 'tiRI', meaning: 'Cheese' },
  { uppercase: 'ΜΥΤΗ', lowercase: 'μύτη', answer: 'MIti', meaning: 'Nose' },
  { uppercase: 'ΥΛΗ', lowercase: 'ύλη', answer: 'Ili', meaning: 'Material or subject matter' },
  { uppercase: 'ΛΥΠΗ', lowercase: 'λύπη', answer: 'LIpi', meaning: 'Sadness' },
]

const Lesson5 = () => {
  const { colors } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(colors)
  const styles = createStyles(colors)

  return (
    <ScrollView
      style={globalStyles.screen}
      contentContainerStyle={globalStyles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={globalStyles.title}>
        Lesson 5 – Η η, Υ υ
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Η η - i</Text>

          <Text style={globalStyles.text}>
            This letter is called ita. In Modern Greek, it is pronounced like
            ee in “see”.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Υ υ - i</Text>

          <Text style={globalStyles.text}>
            This letter is called ipsilon. When it appears on its own, it is
            also pronounced like ee in “see”.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Three letters, one modern sound
        </Text>

        <Text style={globalStyles.text}>
          In Modern Greek, ι, η and υ are pronounced in exactly the same way.
        </Text>

        <Text style={styles.example}>
          ι = η = υ → i
        </Text>

        <Text style={globalStyles.text}>
          Their spelling is different, but their pronunciation is the same.
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Remember: ι, η and υ all represent the same i sound."
      />
    </ScrollView>
  )
}

export default Lesson5

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

    example: {
      fontSize: FONT_SIZE.xl,
      fontWeight: 'bold',
      color: colors.text,
    },
  })