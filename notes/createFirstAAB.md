```bash
npx expo prebuild --platform android

keytool -genkeypair -v \
  -storetype PKCS12 \
  -keystore android/app/learn-greek-upload-key.keystore \
  -alias learn-greek-key \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```