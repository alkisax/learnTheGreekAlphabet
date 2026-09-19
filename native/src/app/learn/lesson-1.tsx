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
  {
    uppercase: 'ΜΑΜΑ',
    lowercase: 'μαμά',
    answer: 'maMA',
    meaning: 'Mum',
  },
  {
    uppercase: 'ΜΑΝΑ',
    lowercase: 'μάνα',
    answer: 'MAna',
    meaning: 'Mother',
  },
  {
    uppercase: 'ΜΙΑ',
    lowercase: 'μία',
    answer: 'MIa',
    meaning: 'One — feminine form',
  },
  {
    uppercase: 'ΜΙΝΙ',
    lowercase: 'μίνι',
    answer: 'MIni',
    meaning: 'Mini',
  },
]

const Lesson1 = () => {
  const { colors } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(colors)
  const styles = createStyles(colors)

  return (
    <ScreenScrollView
      style={globalStyles.screen}
      contentContainerStyle={globalStyles.scrollContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={globalStyles.title}>
        Lesson 1 – Α α, Ι ι, Μ μ, Ν ν
      </Text>

      <View style={styles.lettersContainer}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Α α - a
          </Text>

          <Text style={globalStyles.text}>
            This letter is called{' '}
            <Text style={styles.bold}>alpha</Text>.
            It is pronounced like{' '}
            <Text style={styles.bold}>a</Text> in “father”.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Ι ι - i
          </Text>

          <Text style={globalStyles.text}>
            This letter is called{' '}
            <Text style={styles.bold}>iota</Text>.
            It is pronounced like{' '}
            <Text style={styles.bold}>ee</Text> in “see”.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Μ μ - m
          </Text>

          <Text style={globalStyles.text}>
            This letter is called{' '}
            <Text style={styles.bold}>mi</Text>.
            It is pronounced like the English{' '}
            <Text style={styles.bold}>m</Text>.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>
            Ν ν - n
          </Text>

          <Text style={globalStyles.text}>
            This letter is called{' '}
            <Text style={styles.bold}>ni</Text>.
            It is pronounced like the English{' '}
            <Text style={styles.bold}>n</Text>.
          </Text>
        </View>
      </View>

      <View style={styles.accentCard}>
        <Text style={globalStyles.subtitle}>
          The accent mark
        </Text>

        <Text style={globalStyles.text}>
          In lowercase Greek, the accent mark shows which syllable is
          stressed. For now, we will show the stressed syllable with capital
          letters in the Latin transcription.
        </Text>

        <Text style={styles.example}>
          ΜΑΜΑ – μαμά → maMA
        </Text>

        <Text style={globalStyles.text}>
          We will explain Greek stress more carefully in a later lesson.
        </Text>
      </View>

      <LessonExercises
        exercises={exercises}
        hint="Use capital letters to show the stressed syllable. For example, maMA means that the second syllable is stressed."
      />
    </ScreenScrollView>
  )
}

export default Lesson1

const createStyles = (
  colors: Record<string, string>,
) =>
  StyleSheet.create({
    lettersContainer: {
      gap: SPACING.md,
    },

    accentCard: {
      gap: SPACING.md,
      padding: SPACING.lg,
      borderRadius: 18,
      backgroundColor: colors.surfaceAlt,
      borderWidth: 1,
      borderColor: colors.border,
    },

    example: {
      fontSize: FONT_SIZE.lg,
      fontWeight: 'bold',
      color: colors.text,
    },

    bold: {
      fontWeight: 'bold',
    },
  })
