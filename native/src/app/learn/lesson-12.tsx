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
  { uppercase: 'ΠΟΤΕ', lowercase: 'πότε', answer: 'POte', meaning: 'When' },
  { uppercase: 'ΠΟΤΕ', lowercase: 'ποτέ', answer: 'poTE', meaning: 'Never' },
  { uppercase: 'ΜΕΡΟΣ', lowercase: 'μέρος', answer: 'MEros', meaning: 'Place or part' },
  { uppercase: 'ΝΕΡΟ', lowercase: 'νερό', answer: 'neRO', meaning: 'Water' },
  { uppercase: 'ΑΝΘΡΩΠΟΣ', lowercase: 'άνθρωπος', answer: 'ANthropos', meaning: 'Person' },
  { uppercase: 'ΚΑΦΕΣ', lowercase: 'καφές', answer: 'kaFES', meaning: 'Coffee' },
  { uppercase: 'ΜΟΥΣΙΚΗ', lowercase: 'μουσική', answer: 'musiKI', meaning: 'Music' },
]

const Lesson12 = () => {
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
        Lesson 12 – The accent mark
      </Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          The modern Greek accent
        </Text>

        <Text style={globalStyles.text}>
          The accent mark shows which syllable receives the stress when a
          Greek word is pronounced.
        </Text>

        <Text style={styles.example}>
          μαμά → maMA
        </Text>

        <Text style={globalStyles.text}>
          Changing the position of the accent can sometimes change the meaning
          of a word.
        </Text>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Older Greek accent marks
        </Text>

        <Text style={globalStyles.text}>
          In Ancient Greek, church texts and older printed books, you may see
          additional marks such as the grave accent, circumflex and breathing
          marks.
        </Text>

        <Text style={styles.oldMarks}>
          ὰ ᾶ ἀ ἁ
        </Text>

        <Text style={globalStyles.text}>
          Modern Greek normally uses only one accent mark. You do not need the
          older marks to read modern signs and texts.
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Use capital Latin letters to show the stressed syllable."
      />
    </ScreenScrollView>
  )
}

export default Lesson12

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

    oldMarks: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.text,
    },
  })
