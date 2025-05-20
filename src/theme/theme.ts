// src/theme/theme.ts
import { scale, moderateScale } from 'react-native-size-matters';

export const theme = {
  colors: {
    primary: '#003366', // ana mavi
    secondary: '#00509E', // ton farkı için ek mavi
    background: '#F5F6FA', // ekran arka planı (daha nötr)
    surface: '#FFFFFF', // kartlar ve inputlar
    headerBackground: '#E0ECFF', // header için açık mavi

    textPrimary: '#002244', // koyu mavi
    textSecondary: '#5C6670', // açıklayıcı yazılar için
    mutedText: '#88909A', // yer tutucular

    inputBackground: '#F0F2F5',
    inputBorder: '#D1D5DB',
    inputPlaceholder: '#9CA3AF',

    border: '#E5E7EB',
    divider: '#E0E0E0',

    success: '#34D399',
    error: '#EF4444',
    warning: '#F59E0B',

    white: '#FFFFFF'
  },

  input: {
    background: '#F0F2F5',
    border: '#D1D5DB',
    text: '#1F2937',
    placeholder: '#9CA3AF',
  },

  fontSize: {
    xs: moderateScale(10),
    sm: moderateScale(12),
    md: moderateScale(14),
    lg: moderateScale(16),
    xl: moderateScale(18),
  },

  spacing: {
    xs: scale(4),
    sm: scale(8),
    md: scale(16),
    lg: scale(24),
    xl: scale(32),
  },

  radius: {
    sm: scale(6),
    md: scale(12),
    lg: scale(20),
  },

  shadow: {
    card: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
  },
};
