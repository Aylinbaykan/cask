import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Text, Alert} from 'react-native';
import FCMTokenBox from './components/FCMTokenBox';
import PNTypeSelector from './components/PNTypeSelector';
import DelayInput from './components/DelayInput';
import SendButton from './components/SendButton';
import {sendNotification} from '../../api/notificationApi';
import {saveNotification} from '../../storage/notificationStorage';
import uuid from 'react-native-uuid';
import {theme} from '../../theme/theme';
import {SendNotificationTexts} from '../../constants/texts';

const SendNotificationScreen = () => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<1 | 2 | 3>(1);
  const [delay, setDelay] = useState('0');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!fcmToken) {
      Alert.alert('Hata', SendNotificationTexts.errorToken);
      return;
    }

    setLoading(true);
    try {
      await sendNotification({
        fcm_token: fcmToken,
        pn_type: selectedType,
        pn_delay: parseInt(delay, 10),
        dev_mode: false,
      });

      const newNotification = {
        notification_id: uuid.v4() as string,
        pn_type: selectedType,
        title: SendNotificationTexts.title,
        body: SendNotificationTexts.body(selectedType),
        img_url: selectedType === 2 ? 'https://example.com/image.jpg' : '',
        youtube_url:
          selectedType === 3 ? 'https://youtube.com/watch?v=dummy' : '',
        timestamp: new Date().toLocaleString('tr-TR'),
      };

      await saveNotification(newNotification);
      Alert.alert(
        SendNotificationTexts.successTitle,
        SendNotificationTexts.successMessage,
      );
    } catch (err) {
      console.error(err);
      Alert.alert(
        SendNotificationTexts.errorTitle,
        SendNotificationTexts.errorMessage,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>{SendNotificationTexts.header}</Text>

      <View style={styles.card}>
        <FCMTokenBox onTokenFetched={setFcmToken} />
      </View>

      <View style={styles.card}>
        <PNTypeSelector
          selectedType={selectedType}
          onChange={value => setSelectedType(value as 1 | 2 | 3)}
        />
      </View>

      <View style={styles.card}>
        <DelayInput value={delay} onChange={val => setDelay(val)} />
      </View>

      <View style={styles.card}>
        <SendButton onPress={handleSend} loading={loading} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    paddingTop: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  header: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    textAlign: 'center',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
});

export default SendNotificationScreen;
