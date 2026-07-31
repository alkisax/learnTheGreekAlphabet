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
  { uppercase: 'ΕΤΣΙ', lowercase: 'έτσι', answer: 'Etsi', meaning: 'Like this or so' },
  { uppercase: 'ΠΙΤΣΑ', lowercase: 'πίτσα', answer: 'PItsa', meaning: 'Pizza' },
  { uppercase: 'ΚΑΛΤΣΑ', lowercase: 'κάλτσα', answer: 'KALtsa', meaning: 'Sock' },
  { uppercase: 'ΤΣΑΝΤΑ', lowercase: 'τσάντα', answer: 'TSAnda', meaning: 'Bag' },
  { uppercase: 'ΤΖΑΜΙ', lowercase: 'τζάμι', answer: 'TZAmi', meaning: 'Glass or window pane' },
  { uppercase: 'ΤΖΑΤΖΙΚΙ', lowercase: 'τζατζίκι', answer: 'tzaTZIki', meaning: 'Tzatziki' },
  { uppercase: 'ΜΕΛΙΤΖΑΝΑ', lowercase: 'μελιτζάνα', answer: 'meliTZAna', meaning: 'Aubergine or eggplant' },
  { uppercase: 'ΤΖΙΠ', lowercase: 'τζιπ', answer: 'tzip', meaning: 'Jeep' },
]

const Lesson16 = () => {
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
        Lesson 16 – ΤΣ τσ, ΤΖ τζ
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΤΣ τσ - ts
          </Text>

          <Text style={globalStyles.text}>
            The combination τσ is pronounced like ts in the English word
            “cats”.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            ΤΖ τζ - tz / dz
          </Text>

          <Text style={globalStyles.text}>
            The combination τζ represents a voiced sound similar to dz.
          </Text>

          <Text style={globalStyles.text}>
            We will write it as tz, as in the familiar word tzatziki.
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Compare the two sounds
        </Text>

        <Text style={styles.example}>
          τσ → ts{'\n'}
          τζ → tz{'\n\n'}
          πίτσα → PItsa{'\n'}
          τζάμι → TZAmi
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Use ts for τσ and tz for τζ."
      />
    </ScrollView>
  )
}

export default Lesson16

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