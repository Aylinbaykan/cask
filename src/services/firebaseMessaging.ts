import { NotificationItem } from '../types/notification';
import messaging from '@react-native-firebase/messaging';
import { saveNotification } from '../storage/notificationStorage';
import uuid from 'react-native-uuid';

export const listenForNotifications = () => {
  console.log('📥 Bildirim dinleniyor...');
  messaging().onMessage(async remoteMessage => {
    console.log('📥 Bildirim alındı:', remoteMessage);

    if (!remoteMessage?.notification) return;

    const { title, body } = remoteMessage.notification;
    const data = remoteMessage.data || {};

    const notification: NotificationItem = {
      notification_id: uuid.v4() as string, 
      pn_type: parseInt((data.pn_type as string) ?? '1', 10) as 1 | 2 | 3,
      title: title ?? 'Başlık yok',
      body: body ?? 'Mesaj yok',
      img_url: data.img_url as string,
      youtube_url: data.youtube_url as string,
      timestamp: new Date().toLocaleString('tr-TR'),
    };

    await saveNotification(notification);
    console.log('✅ Bildirim kaydedildi:', notification);
  });
};
