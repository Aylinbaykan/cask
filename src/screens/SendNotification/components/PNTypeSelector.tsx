// src/screens/SendNotification/components/PNTypeSelector.tsx

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {theme} from '../../../theme/theme';
import {moderateScale, scale} from 'react-native-size-matters';
import {SendNotificationTexts} from '../../../constants/texts';

type Props = {
  selectedType: number;
  onChange: (type: number) => void;
};

const PNTypeSelector = ({selectedType, onChange}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{SendNotificationTexts.pnTypeLabel}</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedType}
          onValueChange={itemValue => onChange(itemValue)}
          style={styles.picker}
          dropdownIconColor={theme.colors.textPrimary}>
          <Picker.Item
            label={SendNotificationTexts.pnTypeOptions[1]}
            value={1}
          />
          <Picker.Item
            label={SendNotificationTexts.pnTypeOptions[2]}
            value={2}
          />
          <Picker.Item
            label={SendNotificationTexts.pnTypeOptions[3]}
            value={3}
          />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.sm,
  },
  label: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: theme.radius.md,
    overflow: 'hidden',
    backgroundColor: theme.colors.white,
  },
  picker: {
    height: scale(50),
    width: '100%',
  },
});

export default PNTypeSelector;
