// src/styles/global.styles.ts

import { StyleSheet } from 'react-native'

export const COLORS = {
  light: {
    background: '#fffdf4',
    surface: '#ffffff',
    surfaceAlt: '#f4f1e3',
    border: '#ddd4aa',

    text: '#222222',
    dimText: '#666666',

    primary: '#5c1a1b',
    primaryActive: '#7a2224',

    success: '#27864b',
    error: '#c0392b',

    topBar: '#ffffff',
    topBarBorder: '#ddd4aa',
  },

  dark: {
    background: '#121212',
    surface: '#1b1b1b',
    surfaceAlt: '#242424',
    border: '#333333',

    text: '#f1f1f1',
    dimText: '#aaaaaa',

    primary: '#a62d30',
    primaryActive: '#c23b3e',

    success: '#2ecc71',
    error: '#ff6b6b',

    topBar: '#1b1b1b',
    topBarBorder: '#333333',
  },
}

export type AppColors = typeof COLORS.light

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
}

export const FONT_SIZE = {
  sm: 13,
  md: 16,
  lg: 20,
  xl: 26,
  xxl: 34,
}

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 18,
  round: 999,
}

export const createGlobalStyles = (colors: AppColors) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },

    scrollContent: {
      paddingHorizontal: SPACING.md,
      paddingVertical: SPACING.lg,
      gap: SPACING.md,
    },

    centerContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: SPACING.md,
      gap: SPACING.md,
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: SPACING.sm,
    },

    title: {
      fontSize: FONT_SIZE.xxl,
      fontWeight: 'bold',
      color: colors.text,
    },

    subtitle: {
      fontSize: FONT_SIZE.xl,
      fontWeight: '700',
      color: colors.text,
    },

    text: {
      fontSize: FONT_SIZE.md,
      lineHeight: 24,
      color: colors.text,
    },

    dimText: {
      fontSize: FONT_SIZE.sm,
      color: colors.dimText,
    },

    greekLetter: {
      fontSize: 64,
      fontWeight: 'bold',
      color: colors.primary,
      textAlign: 'center',
    },

    greekWord: {
      fontSize: FONT_SIZE.xl,
      fontWeight: '700',
      color: colors.text,
      textAlign: 'center',
    },

    card: {
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: RADIUS.lg,
      padding: SPACING.md,
      gap: SPACING.sm,
    },

    lessonCard: {
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: RADIUS.lg,
      padding: SPACING.lg,
      gap: SPACING.md,
    },

    primaryButton: {
      minHeight: 48,
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.lg,
      borderRadius: RADIUS.md,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },

    primaryButtonPressed: {
      backgroundColor: colors.primaryActive,
    },

    primaryButtonText: {
      fontSize: FONT_SIZE.md,
      fontWeight: '700',
      color: '#ffffff',
    },

    secondaryButton: {
      minHeight: 48,
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.lg,
      borderRadius: RADIUS.md,
      borderWidth: 1,
      borderColor: colors.primary,
      backgroundColor: colors.surface,
      justifyContent: 'center',
      alignItems: 'center',
    },

    secondaryButtonText: {
      fontSize: FONT_SIZE.md,
      fontWeight: '700',
      color: colors.primary,
    },

    input: {
      minHeight: 48,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: RADIUS.md,
      backgroundColor: colors.surface,
      color: colors.text,
      paddingHorizontal: SPACING.md,
      fontSize: FONT_SIZE.md,
    },

    successText: {
      color: colors.success,
      fontSize: FONT_SIZE.md,
      fontWeight: '700',
    },

    errorText: {
      color: colors.error,
      fontSize: FONT_SIZE.md,
      fontWeight: '700',
    },

    divider: {
      height: 1,
      backgroundColor: colors.border,
    },
  })