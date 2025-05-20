import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useRoute, RouteProp } from '@react-navigation/native';
import { NotificationItem } from '../../types/notification';
import { theme } from '../../theme/theme';
import { moderateScale } from 'react-native-size-matters';
import { YouTubeNotificationTexts } from '../../constants/texts';

type Params = { notification: NotificationItem };

const extractYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

const YouTubeNotificationScreen = () => {
  const { notification } = useRoute<RouteProp<Record<string, Params>, string>>().params;
  const videoId = extractYouTubeId(notification.youtube_url || '');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{notification.title}</Text>
      {videoId ? (
        <YoutubePlayer height={moderateScale(220)} play={false} videoId={videoId} />
      ) : (
        <Text style={styles.fallback}>{YouTubeNotificationTexts.fallback}</Text>
      )}
      <Text style={styles.body}>{notification.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    gap: theme.spacing.md,
    flex: 1,
    backgroundColor: theme.colors.white,
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
  fallback: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
});

export default YouTubeNotificationScreen;
