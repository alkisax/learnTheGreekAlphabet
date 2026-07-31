import { useContext } from 'react'
import {
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native'

import { ThemeContext } from '@/context/ThemeContext'
import { createGlobalStyles } from '@/styles/global.styles'

const Privacy = () => {
  const { colors } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(colors)

  const openEmail = async () => {
    await Linking.openURL('mailto:alkisax@gmail.com')
  }

  return (
    <ScrollView
      style={globalStyles.screen}
      contentContainerStyle={globalStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={globalStyles.title}>
        Privacy Policy
      </Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          Information collected
        </Text>

        <Text style={globalStyles.text}>
          This app does not currently require user accounts and does not
          intentionally collect personal information directly from users.
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          Exercise data
        </Text>

        <Text style={globalStyles.text}>
          Answers entered into the learning exercises are processed locally
          on your device and are not intentionally sent to or stored on our
          server.
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          Advertising
        </Text>

        <Text style={globalStyles.text}>
          This app may display advertisements provided by Google AdMob.
          Advertising providers may process limited technical information,
          such as device information, IP address and advertising identifiers,
          according to their own privacy policies.
        </Text>

        <Text style={globalStyles.text}>
          Where required, advertisements may be limited to non-personalised
          ads or shown only after the appropriate consent has been collected.
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          Third-party services
        </Text>

        <Text style={globalStyles.text}>
          Third-party services used by this app may process limited technical
          information needed to deliver advertisements, prevent abuse or
          measure performance.
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          Changes to this policy
        </Text>

        <Text style={globalStyles.text}>
          This privacy policy may be updated when the app adds or changes
          features or third-party services.
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>
          Contact
        </Text>

        <Pressable onPress={openEmail}>
          <Text style={{ color: colors.primary, textDecorationLine: 'underline' }}>
            alkisax@gmail.com
          </Text>
        </Pressable>
      </View>

      <Text style={globalStyles.dimText}>
        Last updated: 31 July 2026
      </Text>
    </ScrollView>
  )
}

export default Privacy