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
  { uppercase: 'ΕΝΑ', lowercase: 'ένα', answer: 'Ena', meaning: 'One' },
  { uppercase: 'ΕΛΑ', lowercase: 'έλα', answer: 'Ela', meaning: 'Come' },
  { uppercase: 'ΟΛΑ', lowercase: 'όλα', answer: 'Ola', meaning: 'Everything' },
  { uppercase: 'ΜΕΣΑ', lowercase: 'μέσα', answer: 'MEsa', meaning: 'Inside' },
  { uppercase: 'ΜΕΛΙ', lowercase: 'μέλι', answer: 'MEli', meaning: 'Honey' },
  { uppercase: 'ΜΕΝΟΥ', lowercase: 'μενού', answer: 'meNU', meaning: 'Menu' },
  { uppercase: 'ΣΑΛΑΜΙ', lowercase: 'σαλάμι', answer: 'saLAmi', meaning: 'Salami' },
  { uppercase: 'ΕΝΑΣ', lowercase: 'ένας', answer: 'Enas', meaning: 'One — masculine form' },
  { uppercase: 'ΛΕΜΟΝΙ', lowercase: 'λεμόνι', answer: 'leMOni', meaning: 'Lemon' },
]

const Lesson2 = () => {
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
        Lesson 2 – Ε ε, Ο ο, Λ λ, Σ σ/ς
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Ε ε - e</Text>
          <Text style={globalStyles.text}>
            This letter is called epsilon. It is pronounced like e in “bed”.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Ο ο - o</Text>
          <Text style={globalStyles.text}>
            This letter is called omicron. It is pronounced like o in “not”.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Λ λ - l</Text>
          <Text style={globalStyles.text}>
            This letter is called lambda. It is pronounced like the English l.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Σ σ/ς - s</Text>
          <Text style={globalStyles.text}>
            This letter is called sigma. We write σ inside a word and ς at the
            end of a word.
          </Text>

          <Text style={styles.example}>
            σόλο – ένας
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Final sigma
        </Text>

        <Text style={globalStyles.text}>
          The letters σ and ς represent the same sound. The final form ς is
          used only at the end of a word.
        </Text>

        <Text style={styles.example}>
          ΜΕΣΑ – μέσα | ΕΝΑΣ – ένας
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Use capital letters to show the stressed syllable."
      />
    </ScrollView>
  )
}

export default Lesson2

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
      fontSize: FONT_SIZE.lg,
      fontWeight: 'bold',
      color: colors.text,
    },
  })