// src/screens/SendNotification/components/SendButton.tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { theme } from '../../../theme/theme';
import {  scale } from 'react-native-size-matters';
import { SendNotificationTexts } from '../../../constants/texts';

type Props = {
  onPress: () => void;
  loading?: boolean;
};

const SendButton = ({ onPress, loading }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, loading && styles.disabled]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.white} />
      ) : (
        <Text style={styles.text}>{SendNotificationTexts.send}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.textPrimary,
    paddingVertical: scale(14),
    borderRadius: theme.radius.md,
    alignItems: 'center',
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSize.md,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.7,
  },
});

export default SendButton;
