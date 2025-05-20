// src/screens/SendNotification/components/DelayInput.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SendNotificationTexts } from '../../../constants/texts';
import { scale } from 'react-native-size-matters';
import { theme } from '../../../theme/theme';

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const DelayInput = ({ value, onChange }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{SendNotificationTexts.delayLabel}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
        placeholder={ SendNotificationTexts.delayPlaceholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scale(6),
  },
  label: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  },
  input: {
    backgroundColor: theme.colors.inputBackground ?? '#f4f4f4',
    borderRadius: theme.radius.md,
    padding: scale(10),
    color: theme.colors.textPrimary,
  },
});
export default DelayInput;
