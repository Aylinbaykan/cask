// src/storage/notificationStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { NotificationItem } from '../types/notification';

const STORAGE_KEY = 'CASK_NOTIFICATION_LIST';

export const getNotifications = async (): Promise<NotificationItem[]> => {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
};

export const saveNotification = async (item: NotificationItem) => {
  const existing = await getNotifications();
  const updated = [...existing, item];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
