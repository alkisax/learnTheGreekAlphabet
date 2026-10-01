# Learn the Greek Alphabet

Learn the Greek alphabet through short, beginner-friendly lessons, pronunciation guidance, and simple reading exercises. The project is available as a web application and as an Android app.

## What is it?

Learn the Greek Alphabet is a simple introduction to reading Greek. It helps users recognize uppercase and lowercase Greek letters, understand their Modern Greek pronunciation, and begin reading familiar words and signs.

It is not intended to be a complete Greek-language course. The focus is on building confidence with the alphabet and basic reading rather than teaching full grammar, vocabulary, or conversation.

## Who is it for?

The app is mainly for:

- tourists and travelers visiting Greece;
- complete beginners who are starting with Greek;
- people who want to understand Greek signs, names, and simple words;
- anyone curious about the Greek writing system.

## What can you learn?

The app contains 17 progressive lessons covering:

- Greek uppercase and lowercase letters;
- Modern Greek pronunciation;
- letters that share similar sounds;
- vowel combinations;
- consonant combinations;
- stress and the Greek accent mark;
- simple Greek word reading.

The lessons gradually move from individual letters to common combinations such as vowel and consonant pairs used in Modern Greek.

## How the exercises work

In the reading exercises, you:

1. See a Greek word in uppercase and lowercase.
2. Type how the word sounds using Latin characters.
3. Receive local feedback when your answer matches the expected pronunciation.
4. Reveal the solution if you need help.
5. See the English meaning of the word.

The exercises are designed for basic reading and pronunciation practice. They do not require an account.

## Try it

### Web

[Open Learn the Greek Alphabet on the web](https://learngreekalphabet.gr)

### Android

[Get Learn the Greek Alphabet on Google Play](https://play.google.com/store/apps/details?id=com.alkisax.learngreekalphabet)

## Why I built it

The idea was inspired by [Georgian Alphabet](https://www.georgian-alphabet.com/en/). I liked the simplicity of learning a writing system through a focused, accessible website, and wanted to create something similar for people who want a basic introduction to the Greek alphabet.

## Screenshots

Screenshots are not currently included in the repository. This section can be updated with web and Android screenshots later.

## How it works

The lessons and exercises run directly in the web or Android application. No account is required, and the project does not use a backend or database.

Exercise answers are checked locally on the device or in the browser. The project does not upload exercise answers to a server.

## Technology

### Web

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS

### Android

- React Native
- Expo
- Expo Router
- TypeScript
- Google AdMob

## Project structure

- `web/` - browser version built with React and Vite
- `native/` - Android version built with React Native and Expo

The two applications contain parallel versions of the learning content and user experience. They are maintained as separate web and native implementations rather than as one shared codebase.

## Privacy

The project does not require user accounts and does not use a backend to store exercise answers. The Android app may display Google AdMob advertisements, and advertising services may process limited technical information according to their own policies.

The full privacy information is available on the [Privacy page](https://learngreekalphabet.gr/privacy).

## Status

The core learning experience is complete, including the alphabet reference, 17 lessons, pronunciation guidance, and interactive reading exercises.

The web app is available online, and the Android app is available on Google Play.

## Author / Project note

Learn the Greek Alphabet is an independent learning project.

## Development

The web application can be run from `web/` with the commands defined in its `package.json`:

```bash
npm install
npm run dev
```

The native application can be run from `native/` with Expo:

```bash
npm install
npm start
```

The native project also provides `npm run android`, `npm run ios`, `npm run web`, and `npm run lint` scripts.
