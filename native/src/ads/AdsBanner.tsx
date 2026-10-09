// src/ads/AdsBanner.tsx

import { View } from 'react-native'
import {
  BannerAd,
  BannerAdSize,
} from 'react-native-google-mobile-ads'

import { bannerAdUnitId } from '@/constants/constants'
import { useAdConsent } from '@/context/AdConsentContext'

const AdsBanner = () => {
  const {
    consentResolved,
    canRequestAds,
  } = useAdConsent()

  if (!consentResolved || !canRequestAds) {
    return null
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <BannerAd
        unitId={bannerAdUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdFailedToLoad={(error) => {
          console.warn('[AdMob] Banner failed to load', error)
        }}
      />
    </View>
  )
}

export default AdsBanner