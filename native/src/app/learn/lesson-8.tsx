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
  { uppercase: 'ΩΡΑ', lowercase: 'ώρα', answer: 'Ora', meaning: 'Hour or time' },
  { uppercase: 'ΜΟΝΟ', lowercase: 'μόνο', answer: 'MOno', meaning: 'Only' },
  { uppercase: 'ΔΡΟΜΟΣ', lowercase: 'δρόμος', answer: 'DROmos', meaning: 'Road' },
  { uppercase: 'ΖΩΝΗ', lowercase: 'ζώνη', answer: 'ZOni', meaning: 'Zone or belt' },
  { uppercase: 'ΚΟΣΜΟΣ', lowercase: 'κόσμος', answer: 'KOsmos', meaning: 'World or people' },
  { uppercase: 'ΩΡΑΙΟ', lowercase: 'ωραίο', answer: 'oreO', meaning: 'Beautiful or nice' },
  { uppercase: 'ΟΝΟΜΑ', lowercase: 'όνομα', answer: 'Onoma', meaning: 'Name' },
  { uppercase: 'ΜΩΡΟ', lowercase: 'μωρό', answer: 'moRO', meaning: 'Baby' },
]

const Lesson8 = () => {
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
        Lesson 8 – Ο ο and Ω ω
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Ο ο - o
          </Text>

          <Text style={globalStyles.text}>
            This letter is called omicron.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Ω ω - o
          </Text>

          <Text style={globalStyles.text}>
            This letter is called omega. In Modern Greek, it has exactly the
            same pronunciation as ο.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          One sound, two letters
        </Text>

        <Text style={globalStyles.text}>
          In Ancient Greek, omicron and omega represented different vowel
          lengths. This distinction no longer exists in Modern Greek.
        </Text>

        <Text style={styles.example}>
          ο = ω → o
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Remember: ο and ω sound exactly the same."
      />
    </ScreenScrollView>
  )
}

export default Lesson8

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
