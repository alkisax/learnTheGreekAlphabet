import {
  type ReactNode,
} from 'react'
import {
  ScrollView,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native'

import Navbar from '@/layout/layoutComponents/Navbar'

type Props = {
  children: ReactNode
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
  showsVerticalScrollIndicator?: boolean
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled'
}

const ScreenScrollView = ({
  children,
  style,
  contentContainerStyle,
  showsVerticalScrollIndicator,
  keyboardShouldPersistTaps,
}: Props) => {
  return (
    <ScrollView
      style={style}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
    >
      <Navbar />

      <View style={contentContainerStyle}>
        {children}
      </View>
    </ScrollView>
  )
}

export default ScreenScrollView
