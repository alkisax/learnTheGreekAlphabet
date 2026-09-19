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
  { uppercase: 'ΜΠΑΡ', lowercase: 'μπαρ', answer: 'bar', meaning: 'Bar' },
  { uppercase: 'ΜΠΑΝΑΝΑ', lowercase: 'μπανάνα', answer: 'baNAna', meaning: 'Banana' },
  { uppercase: 'ΜΠΙΡΑ', lowercase: 'μπίρα', answer: 'BIra', meaning: 'Beer' },
  { uppercase: 'ΛΑΜΠΑ', lowercase: 'λάμπα', answer: 'LAMba', meaning: 'Lamp' },
  { uppercase: 'ΝΤΟΜΑΤΑ', lowercase: 'ντομάτα', answer: 'doMAta', meaning: 'Tomato' },
  { uppercase: 'ΝΤΟΥΛΑΠΑ', lowercase: 'ντουλάπα', answer: 'duLApa', meaning: 'Wardrobe' },
  { uppercase: 'ΠΑΝΤΑ', lowercase: 'πάντα', answer: 'PANda', meaning: 'Always' },
  { uppercase: 'ΠΕΝΤΕ', lowercase: 'πέντε', answer: 'PENde', meaning: 'Five' },
  { uppercase: 'ΑΝΤΡΑΣ', lowercase: 'άντρας', answer: 'ANdras', meaning: 'Man' },
]

const Lesson14 = () => {
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
        Lesson 14 – ΜΠ μπ, ΝΤ ντ
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΜΠ μπ - b or mb
          </Text>

          <Text style={globalStyles.text}>
            At the beginning of a word, μπ is normally pronounced like the
            English b.
          </Text>

          <Text style={globalStyles.text}>
            Inside a word, it may sound like mb or sometimes simply b.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΝΤ ντ - d or nd
          </Text>

          <Text style={globalStyles.text}>
            At the beginning of a word, ντ is normally pronounced like the
            English d.
          </Text>

          <Text style={globalStyles.text}>
            Inside a word, it may sound like nd or sometimes simply d.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          At the beginning of a word
        </Text>

        <Text style={styles.example}>
          μπαρ → bar{'\n'}
          ντομάτα → doMAta
        </Text>

        <Text style={globalStyles.subtitle}>
          Inside a word
        </Text>

        <Text style={styles.example}>
          λάμπα → LAMba{'\n'}
          πάντα → PANda
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="At the beginning of a word, use b for μπ and d for ντ."
      />
    </ScreenScrollView>
  )
}

export default Lesson14

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
