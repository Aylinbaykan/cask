import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {getNotifications} from '../../storage/notificationStorage';
import {NotificationItem} from '../../types/notification';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {theme} from '../../theme/theme'; // 🎨
import {moderateScale} from 'react-native-size-matters';
import { NotificationListTexts } from '../../constants/texts';

const NotificationListScreen = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadData = async () => {
      const data = await getNotifications();
      setNotifications(data.reverse());
    };
    if (isFocused) {
      loadData();
    }
  }, [isFocused]);

  const handlePress = (item: NotificationItem) => {
    const screens = {
      1: 'TextNotification',
      2: 'ImageNotification',
      3: 'YouTubeNotification',
    };
    navigation.navigate('PN', {
      screen: screens[item.pn_type],
      params: {notification: item},
    });
  };

  const renderItem = ({item}: {item: NotificationItem}) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body} numberOfLines={2}>
        {item.body}
      </Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {notifications.length === 0 ? (
        <Text style={styles.emptyText}>
          {NotificationListTexts.emptyMessage}
        </Text>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item, index) =>
            item.notification_id
              ? `${item.notification_id}_${index}`
              : `notif_${index}`
          }
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: theme.spacing.lg}}
        />
      )}
    </View>
  );
};

export default NotificationListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: moderateScale(4),
  },
  body: {
    fontSize: theme.fontSize.md,
    color: '#555',
    marginBottom: moderateScale(8),
  },
  timestamp: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray,
    textAlign: 'right',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: moderateScale(100),
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
});
