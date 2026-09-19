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
  { uppercase: 'ΜΑΪΟΣ', lowercase: 'Μάιος', answer: 'MAios', meaning: 'May' },
  { uppercase: 'ΚΕΪΚ', lowercase: 'κέικ', answer: 'KEik', meaning: 'Cake' },
  { uppercase: 'ΜΑΪΜΟΥ', lowercase: 'μαϊμού', answer: 'maiMU', meaning: 'Monkey' },
  { uppercase: 'ΚΑΪΚΙ', lowercase: 'καΐκι', answer: 'kaIki', meaning: 'A small traditional boat' },
  { uppercase: 'ΠΡΟΪΟΝ', lowercase: 'προϊόν', answer: 'proiON', meaning: 'Product' },
  { uppercase: 'ΠΡΟΫΠΟΘΕΣΗ', lowercase: 'προϋπόθεση', answer: 'proiPOthesi', meaning: 'Requirement or precondition' },
  { uppercase: 'ΚΟΡΟΪΔΕΥΩ', lowercase: 'κοροϊδεύω', answer: 'koroiDEvo', meaning: 'I tease or deceive' },
]

const Lesson17 = () => {
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
        Lesson 17 – Separate vowel sounds
      </Text>

      <View style={styles.sections}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            When two vowels are read separately
          </Text>

          <Text style={globalStyles.text}>
            Combinations such as αι, ει, οι, αυ and ευ normally represent
            special sounds.
          </Text>

          <Text style={globalStyles.text}>
            Sometimes, however, the two vowels must be pronounced separately.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Accent on the first vowel
          </Text>

          <Text style={globalStyles.text}>
            When the first vowel has the accent, the two letters are pronounced
            separately.
          </Text>

          <Text style={styles.example}>
            Μάιος → MA-ios{'\n'}
            κέικ → KE-ik{'\n'}
            άυπνος → A-ipnos
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            The diaeresis: ϊ and ϋ
          </Text>

          <Text style={globalStyles.text}>
            The two dots are called a diaeresis, or διαλυτικά in Greek.
          </Text>

          <Text style={globalStyles.text}>
            They show that ι or υ must be pronounced separately from the vowel
            before it.
          </Text>

          <Text style={styles.example}>
            μαϊμού → mai-MU{'\n'}
            προϊόν → pro-i-ON{'\n'}
            προϋπόθεση → pro-i-PO-thesi
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Accent and diaeresis together
          </Text>

          <Text style={globalStyles.text}>
            When the second vowel is both separate and stressed, it carries
            both the diaeresis and the accent.
          </Text>

          <Text style={styles.example}>
            καΐκι → ka-I-ki{'\n'}
            ΐ  ΰ
          </Text>
        </View>
      </View>

      <View style={styles.noteCard}>
        <Text style={globalStyles.subtitle}>
          Capital letters
        </Text>

        <Text style={globalStyles.text}>
          Greek words written entirely in capital letters normally omit the
          accent mark. The diaeresis may remain so that the vowels are still
          read separately.
        </Text>

        <Text style={styles.example}>
          Μάιος → ΜΑΪΟΣ{'\n'}
          μαϊμού → ΜΑΪΜΟΥ
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Read neighbouring vowels separately. Do not treat them as the usual αι, ει, οι, αυ or ευ combinations."
      />
    </ScreenScrollView>
  )
}

export default Lesson17

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
