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
  { uppercase: 'ΓΚΟΛ', lowercase: 'γκολ', answer: 'gol', meaning: 'Goal' },
  { uppercase: 'ΓΚΡΙ', lowercase: 'γκρι', answer: 'gri', meaning: 'Grey' },
  { uppercase: 'ΓΚΑΖΙ', lowercase: 'γκάζι', answer: 'GAzi', meaning: 'Gas or accelerator' },
  { uppercase: 'ΠΑΓΚΟΣ', lowercase: 'πάγκος', answer: 'PANgos', meaning: 'Bench or counter' },
  { uppercase: 'ΑΓΚΑΘΙ', lowercase: 'αγκάθι', answer: 'anGAthi', meaning: 'Thorn' },
  { uppercase: 'ΑΓΓΛΙΑ', lowercase: 'Αγγλία', answer: 'anGLIa', meaning: 'England' },
  { uppercase: 'ΕΓΓΟΝΙ', lowercase: 'εγγόνι', answer: 'enGOni', meaning: 'Grandchild' },
  { uppercase: 'ΑΓΓΟΥΡΙ', lowercase: 'αγγούρι', answer: 'anGUri', meaning: 'Cucumber' },
]

const Lesson15 = () => {
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
        Lesson 15 – ΓΚ γκ, ΓΓ γγ
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΓΚ γκ - g or ng
          </Text>

          <Text style={globalStyles.text}>
            At the beginning of a word, γκ is normally pronounced like the
            English g in “go”.
          </Text>

          <Text style={globalStyles.text}>
            Inside a word, it may sound like ng followed by g, although many
            speakers pronounce it simply as g.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΓΓ γγ - ng
          </Text>

          <Text style={globalStyles.text}>
            The combination γγ normally appears inside words. It is usually
            pronounced like ng followed by a g sound.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          The basic pattern
        </Text>

        <Text style={styles.example}>
          γκολ → gol{'\n'}
          πάγκος → PANgos{'\n'}
          Αγγλία → anGLIa
        </Text>

        <Text style={globalStyles.text}>
          Before an e or i sound, the Greek g sound becomes softer.
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Use g at the beginning of a word and ng for the fuller sound inside a word."
      />
    </ScrollView>
  )
}

export default Lesson15

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