import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { NotificationItem } from '../../types/notification';
import { TextNotificationTexts } from '../../constants/texts';
import { moderateScale } from 'react-native-size-matters';
import { theme } from '../../theme/theme';

type Params = { notification?: NotificationItem };

const TextNotificationScreen = () => {
  const route = useRoute<RouteProp<Record<string, Params>, string>>();
  const notification = route.params?.notification;

  if (!notification) {
    return (
      <View style={styles.container}>
        <Text style={styles.fallback}>{TextNotificationTexts.fallback}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{notification.title}</Text>
      <Text style={styles.body}>{notification.body}</Text>
      <Text style={styles.time}>{notification.timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    gap: moderateScale(10),
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  fallback: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.fontSize.lg,
    color: theme.colors.textPrimary,
  },
  body: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.bodyText,
  },
  time: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.mutedText,
  },
});

export default TextNotificationScreen;
