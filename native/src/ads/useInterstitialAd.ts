// nativeLearnTheGreekAlphabet\src\ads\useInterstitialAd copy.ts

import { useEffect, useRef, useState } from "react";
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from "react-native-google-mobile-ads";
import { interstitialAdUnitId } from "@/constants/constants";
import { useAdConsent } from "@/context/AdConsentContext";
// import { logToServer } from "@/utils/logToServer";

// const adUnitId = TestIds.INTERSTITIAL;
const adUnitId = interstitialAdUnitId

export const useInterstitialAd = () => {
  const {
    consentResolved,
    canRequestAds,
  } = useAdConsent();

  const adRef = useRef<InterstitialAd | null>(null);
  const consentResolvedRef = useRef(consentResolved);
  const canRequestAdsRef = useRef(canRequestAds);
  const [loaded, setLoaded] = useState(false);

  consentResolvedRef.current = consentResolved;
  canRequestAdsRef.current = canRequestAds;

  useEffect(() => {
    // logToServer("INTERSTITIAL INIT");

    if (!consentResolved || !canRequestAds) {
      setLoaded(false);
      adRef.current = null;
      return undefined;
    }

    const ad = InterstitialAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true,
    });

    adRef.current = ad;

    const unsubLoaded = ad.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
      // logToServer("INTERSTITIAL LOADED");
    });

    const unsubClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      // logToServer("INTERSTITIAL CLOSED → reload");

      if (consentResolvedRef.current && canRequestAdsRef.current) {
        ad.load();
      }
    });

    const unsubError = ad.addAdEventListener(AdEventType.ERROR, (e) => {
      // logToServer("INTERSTITIAL ERROR " + JSON.stringify(e));
    });

    // logToServer("INTERSTITIAL LOAD START");
    ad.load();

    return () => {
      unsubLoaded();
      unsubClosed();
      unsubError();
      adRef.current = null;
    };
  }, [canRequestAds, consentResolved]);

  const showAd = () => {
    if (
      consentResolvedRef.current &&
      canRequestAdsRef.current &&
      loaded &&
      adRef.current
    ) {
      // logToServer("INTERSTITIAL SHOW");
      adRef.current.show();
    } else {
      // logToServer("INTERSTITIAL NOT READY");
    }
  };

  return { showAd, loaded };
};