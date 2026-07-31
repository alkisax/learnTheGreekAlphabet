import { useContext, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

import { ThemeContext } from '@/context/ThemeContext'
import {
  FONT_SIZE,
  SPACING,
  createGlobalStyles,
} from '@/styles/global.styles'

export type Exercise = {
  uppercase: string
  lowercase: string
  answer: string
  meaning: string
}

type Props = {
  exercises: Exercise[]
  hint: string
}

const normalize = (value: string) =>
  value.trim().toLocaleLowerCase('en-US')

const LessonExercises = ({
  exercises,
  hint,
}: Props) => {
  const { colors } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(colors)
  const styles = createStyles(colors)

  const [answers, setAnswers] =
    useState<Record<number, string>>({})

  const [revealed, setRevealed] =
    useState<Record<number, boolean>>({})

  return (
    <View style={styles.container}>
      <Text style={globalStyles.subtitle}>
        Exercises
      </Text>

      <Text style={globalStyles.text}>
        Write how each Greek word sounds using Latin letters.
      </Text>

      <Text style={globalStyles.dimText}>
        {hint}
      </Text>

      {exercises.map((exercise, index) => {
        const userAnswer = answers[index] ?? ''

        const isCorrect =
          normalize(userAnswer) ===
          normalize(exercise.answer)

        return (
          <View
            key={`${exercise.lowercase}-${index}`}
            style={globalStyles.card}
          >
            <Text style={styles.word}>
              {exercise.uppercase} – {exercise.lowercase}
            </Text>

            <Text style={globalStyles.text}>
              How do you read this word?
            </Text>

            <TextInput
              value={userAnswer}
              placeholder="Write in Latin letters"
              placeholderTextColor={colors.dimText}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(value) =>
                setAnswers((previous) => ({
                  ...previous,
                  [index]: value,
                }))
              }
              style={[
                globalStyles.input,
                isCorrect && styles.correctInput,
              ]}
            />

            {isCorrect && (
              <View style={styles.result}>
                <Text style={globalStyles.successText}>
                  Correct!
                </Text>

                <Text style={globalStyles.text}>
                  <Text style={styles.bold}>
                    {exercise.lowercase}
                  </Text>
                  {' means '}
                  <Text style={styles.bold}>
                    {exercise.meaning}
                  </Text>
                  .
                </Text>
              </View>
            )}

            <Pressable
              style={globalStyles.secondaryButton}
              onPress={() =>
                setRevealed((previous) => ({
                  ...previous,
                  [index]: true,
                }))
              }
            >
              <Text style={globalStyles.secondaryButtonText}>
                Reveal solution
              </Text>
            </Pressable>

            {revealed[index] && (
              <View style={styles.result}>
                <Text style={styles.solution}>
                  {exercise.answer}
                </Text>

                <Text style={globalStyles.text}>
                  {exercise.meaning}
                </Text>
              </View>
            )}
          </View>
        )
      })}
    </View>
  )
}

export default LessonExercises

const createStyles = (
  colors: Record<string, string>,
) =>
  StyleSheet.create({
    container: {
      gap: SPACING.lg,
      marginTop: SPACING.xl,
    },

    word: {
      fontSize: FONT_SIZE.xl,
      fontWeight: 'bold',
      color: colors.text,
    },

    bold: {
      fontWeight: 'bold',
    },

    correctInput: {
      borderColor: colors.success,
      backgroundColor: colors.surfaceAlt,
    },

    result: {
      gap: SPACING.xs,
    },

    solution: {
      fontSize: FONT_SIZE.lg,
      fontWeight: 'bold',
      color: colors.text,
    },
  })