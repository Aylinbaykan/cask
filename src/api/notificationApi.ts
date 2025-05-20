// src/api/notificationApi.ts
import axios from 'axios';

const API_BASE_URL = 'https://challenges.cask.com.tr/api';

type SendNotificationPayload = {
  fcm_token: string;
  pn_type: 1 | 2 | 3;
  pn_delay: number;
  dev_mode: boolean;
};

export const sendNotification = async (payload: SendNotificationPayload) => {
  const requestBody = {
    v: 1,
    platform: 'app',
    admmdlid: '12f3894ed72fc7d4e3b98688b20513e20a3fa1adbd08b9662412322138d26533',
    scope: '8fbff85cb7a2b8cbd53b3086c0b16d4c1e96a5d748cbf8761bace32ab294e83a',
    ...payload,
  };

  const response = await axios.post(API_BASE_URL, requestBody, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};
