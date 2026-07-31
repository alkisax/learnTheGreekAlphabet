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
  { uppercase: 'ΦΩΣ', lowercase: 'φως', answer: 'fos', meaning: 'Light' },
  { uppercase: 'ΦΙΛΟΣ', lowercase: 'φίλος', answer: 'FIlos', meaning: 'Friend' },
  { uppercase: 'ΚΑΦΕΣ', lowercase: 'καφές', answer: 'kaFES', meaning: 'Coffee' },
  { uppercase: 'ΘΕΑΤΡΟ', lowercase: 'θέατρο', answer: 'THEatro', meaning: 'Theatre' },
  { uppercase: 'ΑΘΗΝΑ', lowercase: 'Αθήνα', answer: 'aTHIna', meaning: 'Athens' },
  { uppercase: 'ΘΑΛΑΣΣΑ', lowercase: 'θάλασσα', answer: 'THAlassa', meaning: 'Sea' },
  { uppercase: 'ΧΑΡΤΗΣ', lowercase: 'χάρτης', answer: 'CHARtis', meaning: 'Map' },
  { uppercase: 'ΧΕΡΙ', lowercase: 'χέρι', answer: 'CHEri', meaning: 'Hand' },
  { uppercase: 'ΧΑΡΑ', lowercase: 'χαρά', answer: 'chaRA', meaning: 'Joy' },
]

const Lesson10 = () => {
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
        Lesson 10 – Φ φ, Χ χ, Θ θ
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Φ φ - f
          </Text>

          <Text style={globalStyles.text}>
            This letter is called fi. It is pronounced like the English f.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Χ χ - ch
          </Text>

          <Text style={globalStyles.text}>
            This letter is called chi. Before a, o and u sounds, it resembles
            the sound in the Scottish word “loch”.
          </Text>

          <Text style={globalStyles.text}>
            Before e and i sounds, it becomes softer.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Θ θ - th
          </Text>

          <Text style={globalStyles.text}>
            This letter is called thita. It is pronounced like th in “think”.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Two different th sounds
        </Text>

        <Text style={globalStyles.text}>
          θ sounds like the th in “think”, while δ sounds like the th in “this”.
        </Text>

        <Text style={styles.example}>
          θ → think | δ → this
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Use f for φ, ch for χ and th for θ."
      />
    </ScrollView>
  )
}

export default Lesson10

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
      fontWeight: 'bold',
      color: colors.text,
    },
  })