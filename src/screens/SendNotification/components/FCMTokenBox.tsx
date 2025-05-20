// src/screens/SendNotification/components/FCMTokenBox.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import Clipboard from '@react-native-clipboard/clipboard';
import { SendNotificationTexts } from '../../../constants/texts';
import { theme } from '../../../theme/theme';
import { scale } from 'react-native-size-matters';

type Props = {
  onTokenFetched: (token: string) => void;
};

const FCMTokenBox = ({ onTokenFetched }: Props) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const fcmToken = await messaging().getToken();
        setToken(fcmToken);
        onTokenFetched(fcmToken); 
      } catch (error) {
        console.error('FCM Token error:', error);
      }
    };

    fetchToken();
  }, []);

  const handleCopy = () => {
    if (token) {
      Clipboard.setString(token);
      Alert.alert(SendNotificationTexts.fcmTokenCopyTitle,SendNotificationTexts.fcmTokenCopyMsg);
    }
  };

  return (
    <Pressable style={styles.box} onPress={handleCopy}>
      <Text style={styles.label}>FCM Token:</Text>
      <Text style={styles.token} numberOfLines={2}>
        {token || SendNotificationTexts.loading}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: scale(12),
    borderRadius: theme.radius.md,
    backgroundColor: theme.input.background,
  },
  label: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    marginBottom: scale(4),
  },
  token: {
    fontSize: theme.fontSize.sm,
    color: theme.input.text,
  },
});

export default FCMTokenBox;
