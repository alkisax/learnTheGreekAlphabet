import { useContext } from 'react'
import {
  ScrollView,
  Text,
  View,
  Pressable,
} from 'react-native'
import { router } from 'expo-router'

import { ThemeContext } from '@/context/ThemeContext'
import { createGlobalStyles } from '@/styles/global.styles'

const lessons = [
  'Lesson 1 (Αα, Ιι, Μμ, Νν)',
  'Lesson 2 (Εε, Οο, Λλ, Σσς)',
  'Lesson 3 (Ττ, Κκ, Ππ, Ρρ)',
  'Lesson 4 (Ββ, Δδ, Γγ, Ζζ)',
  'Lesson 5 (Ηη, Υυ)',
  'Lesson 6 (The i sound: ι, η, υ, ει, οι)',
  'Lesson 7 (ΑΙ αι: the e sound)',
  'Lesson 8 (Ο ο and Ω ω)',
  'Lesson 9 (ΟΥ ου: the u sound)',
  'Lesson 10 (Φ φ, Χ χ, Θ θ)',
  'Lesson 11 (Ξ ξ, Ψ ψ)',
  'Lesson 12 (The accent mark)',
  'Lesson 13 (ΑΥ αυ, ΕΥ ευ)',
  'Lesson 14 (ΜΠ μπ, ΝΤ ντ)',
  'Lesson 15 (ΓΚ γκ, ΓΓ γγ)',
  'Lesson 16 (ΤΣ τσ, ΤΖ τζ)',
  'Lesson 17 (Separate vowel sounds)',
]

const Learn = () => {
  const { colors } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(colors)

  return (
    <ScrollView
      style={globalStyles.screen}
      contentContainerStyle={globalStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={globalStyles.title}>
        Greek Alphabet Lessons
      </Text>

      {lessons.map((lesson, index) => (
        <Pressable
          key={lesson}
          style={globalStyles.card}
          onPress={() =>
            router.push(`/learn/lesson-${index + 1}` as never)
          }
        >
          <Text style={globalStyles.text}>
            {lesson}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  )
}

export default Learn