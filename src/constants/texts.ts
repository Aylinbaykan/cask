// src/constants/texts.ts

export const EmptyScreenTexts = {
  title: 'Bildirim Seçilmedi',
  subtitle: 'Bir bildirim seçtiğinde, içeriği burada görüntülenecek.',
};



export const SendNotificationTexts = {
  header: 'Bildirim Oluştur',
  errorToken: 'FCM token henüz yüklenmedi.',
  successTitle: '✅ Başarılı',
  successMessage: 'Bildirim başarıyla gönderildi.',
  errorTitle: '❌ Hata',
  errorMessage: 'Bildirim gönderilemedi.',
  title: 'Gönderilen Bildirim',
  body: (type: number) =>
    `Bu bir ${['', 'Metin', 'Resim', 'YouTube'][type]} bildirimidir.`,
  pnTypeLabel: 'Bildirim Türü',
  pnTypeOptions: {
    1: 'Metin',
    2: 'Resim URL',
    3: 'YouTube URL',
  },
  fcmTokenLabel: 'FCM Token:',
  fcmTokenCopyTitle: 'Kopyalandı',
  fcmTokenCopyMsg: 'FCM Token panoya kopyalandı.',
  delayLabel: 'Gecikme (saniye):',
  delayPlaceholder: 'örn: 5',
  send:'Gönder',
  loading:"Yükleniyor..."
};

export const NotificationListTexts = {
  emptyMessage: 'Henüz bir bildirim yok.',
};

export const PNHeaders = {
  text: 'Metin Bildirimi',
  image: 'Görsel Bildirimi',
  youtube: 'Youtube Bildirimi',
};

export const TextNotificationTexts = {
  fallback: 'Görüntülenecek bir bildirim bulunamadı.',
};

export const YouTubeNotificationTexts = {
  fallback: 'Video bulunamadı',
};

export const BottomTabTexts = {
  pn: 'PN',
  send: 'Gönder',
  list: 'Liste',
};

