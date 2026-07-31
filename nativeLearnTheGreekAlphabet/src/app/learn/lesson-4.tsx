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
  SPACING,
  createGlobalStyles,
} from '@/styles/global.styles'

const exercises: Exercise[] = [
  { uppercase: 'ΒΑΖΟ', lowercase: 'βάζο', answer: 'VAzo', meaning: 'Vase' },
  { uppercase: 'ΒΙΒΛΙΟ', lowercase: 'βιβλίο', answer: 'viVLIO', meaning: 'Book' },
  { uppercase: 'ΔΡΟΜΟΣ', lowercase: 'δρόμος', answer: 'DROmos', meaning: 'Road' },
  { uppercase: 'ΔΕΚΑ', lowercase: 'δέκα', answer: 'DEka', meaning: 'Ten' },
  { uppercase: 'ΓΑΛΑ', lowercase: 'γάλα', answer: 'GAla', meaning: 'Milk' },
  { uppercase: 'ΑΓΟΡΑ', lowercase: 'αγορά', answer: 'agoRA', meaning: 'Market' },
  { uppercase: 'ΓΕΝΙΑ', lowercase: 'γένια', answer: 'YEnia', meaning: 'Beard' },
]

const Lesson4 = () => {
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
        Lesson 4 – Β β, Δ δ, Γ γ, Ζ ζ
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Β β - v</Text>
          <Text style={globalStyles.text}>
            This letter is called vita. In Modern Greek, it is pronounced like
            the English v, not b.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Δ δ - th</Text>
          <Text style={globalStyles.text}>
            This letter is called delta. It is pronounced like th in “this” or
            “there”.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Γ γ - g / y
          </Text>

          <Text style={globalStyles.text}>
            Before ε or ι, gamma sounds similar to the English y in “yes”.
          </Text>

          <Text style={globalStyles.text}>
            Before other vowels, it has a deeper sound produced at the back of
            the mouth.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Ζ ζ - z</Text>
          <Text style={globalStyles.text}>
            This letter is called zita. It is pronounced like the English z.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Do not trust the shape
        </Text>

        <Text style={globalStyles.text}>
          Greek Β looks like English B, but it is pronounced v.
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="For gamma, use g for the deeper sound and y before ε or ι."
      />
    </ScrollView>
  )
}

export default Lesson4

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
  })