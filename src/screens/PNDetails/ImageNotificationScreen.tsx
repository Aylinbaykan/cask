// src/screens/PNDetails/ImageNotificationScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { NotificationItem } from '../../types/notification';
import { theme } from '../../theme/theme';
import {  scale } from 'react-native-size-matters';

type Params = { notification: NotificationItem };

const ImageNotificationScreen = () => {
  const { notification } = useRoute<RouteProp<Record<string, Params>, string>>().params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{notification.title}</Text>
      <Image source={{ uri: notification.img_url }} style={styles.image} />
      <Text style={styles.body}>{notification.body}</Text>
    </View>
  );
};

export default ImageNotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  },
  body: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  image: {
    width: '100%',
    height: scale(220),
    borderRadius: theme.radius.md,
    backgroundColor: theme.input.background,
  },
});
