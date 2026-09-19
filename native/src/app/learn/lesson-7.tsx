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
  { uppercase: 'ΚΑΙ', lowercase: 'και', answer: 'ke', meaning: 'And' },
  { uppercase: 'ΑΙΜΑ', lowercase: 'αίμα', answer: 'Ema', meaning: 'Blood' },
  { uppercase: 'ΠΑΙΔΙ', lowercase: 'παιδί', answer: 'peDI', meaning: 'Child' },
  { uppercase: 'ΚΑΙΡΟΣ', lowercase: 'καιρός', answer: 'keROS', meaning: 'Weather' },
  { uppercase: 'ΠΑΙΖΕΙ', lowercase: 'παίζει', answer: 'PEzi', meaning: 'He or she plays' },
  { uppercase: 'ΚΑΛΟΚΑΙΡΙ', lowercase: 'καλοκαίρι', answer: 'kalokeRI', meaning: 'Summer' },
  { uppercase: 'ΕΙΝΑΙ', lowercase: 'είναι', answer: 'Ine', meaning: 'Is or are' },
]

const Lesson7 = () => {
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
        Lesson 7 – ΑΙ αι: the e sound
      </Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          ΑΙ αι - e
        </Text>

        <Text style={globalStyles.text}>
          In Modern Greek, the combination αι is pronounced exactly like ε:
          like the e in “bed”.
        </Text>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Same sound, different spelling
        </Text>

        <Text style={globalStyles.text}>
          In older forms of Greek, αι had a different pronunciation. Today,
          the difference remains only in spelling.
        </Text>

        <Text style={styles.example}>
          ε = αι → e
        </Text>

        <Text style={globalStyles.text}>
          When reading Modern Greek aloud, pronounce them in exactly the same
          way.
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Remember: αι and ε have the same sound."
      />
    </ScreenScrollView>
  )
}

export default Lesson7

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
