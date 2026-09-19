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
  { uppercase: 'ΕΙΡΗΝΗ', lowercase: 'ειρήνη', answer: 'iRIni', meaning: 'Peace' },
  { uppercase: 'ΚΛΕΙΔΙ', lowercase: 'κλειδί', answer: 'kliDI', meaning: 'Key' },
  { uppercase: 'ΜΕΝΕΙ', lowercase: 'μένει', answer: 'MEni', meaning: 'He, she or it stays' },
  { uppercase: 'ΛΕΙΠΕΙ', lowercase: 'λείπει', answer: 'LIpi', meaning: 'He, she or it is missing' },
  { uppercase: 'ΟΙΚΟΝΟΜΙΑ', lowercase: 'οικονομία', answer: 'ikonoMIa', meaning: 'Economy' },
  { uppercase: 'ΟΙ', lowercase: 'οι', answer: 'i', meaning: 'The — plural article' },
  { uppercase: 'Η', lowercase: 'η', answer: 'i', meaning: 'The — feminine singular article' },
]

const Lesson6 = () => {
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
        Lesson 6 – The i sound: ι, η, υ, ει, οι
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Ι ι, Η η, Υ υ - i
          </Text>

          <Text style={globalStyles.text}>
            We have already learned three letters that represent the same
            sound: ι, η and υ.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΕΙ ει - i
          </Text>

          <Text style={globalStyles.text}>
            The combination ει is also pronounced like ee in “see”.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΟΙ οι - i
          </Text>

          <Text style={globalStyles.text}>
            The combination οι has exactly the same i sound.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Historical spelling
        </Text>

        <Text style={globalStyles.text}>
          In earlier forms of Greek, these letters and combinations represented
          different vowel sounds. Over time, their pronunciation became
          identical in Modern Greek.
        </Text>

        <Text style={styles.example}>
          ι = η = υ = ει = οι → i
        </Text>

        <Text style={globalStyles.text}>
          Their spelling remains important, but they are pronounced in exactly
          the same way.
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          A grammatical example
        </Text>

        <Text style={globalStyles.text}>
          η — the, singular feminine
        </Text>

        <Text style={globalStyles.text}>
          οι — the, plural
        </Text>

        <Text style={globalStyles.text}>
          These forms have different meanings, but both are pronounced i.
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Remember: ι, η, υ, ει and οι are all pronounced i."
      />
    </ScreenScrollView>
  )
}

export default Lesson6

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
