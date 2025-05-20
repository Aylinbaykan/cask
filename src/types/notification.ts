export type NotificationItem = {
    notification_id: string;
    pn_type: 1 | 2 | 3; // 1: Text, 2: Image, 3: YouTube
    title: string;
    body: string;
    img_url?: string;
    youtube_url?: string;
    timestamp: string; // örn: '2025-05-19 23:45'
  };
  