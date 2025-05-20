import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextNotificationScreen from '../screens/PNDetails/TextNotificationScreen';
import ImageNotificationScreen from '../screens/PNDetails/ImageNotificationScreen';
import YouTubeNotificationScreen from '../screens/PNDetails/YouTubeNotificationScreen';
import EmptyScreen from '../screens/EmptyScreen/EmptyScreen';
import { theme } from '../theme/theme';
import { moderateScale } from 'react-native-size-matters';
import { PNHeaders } from '../constants/texts';

const Tab1Stack = createNativeStackNavigator();

const commonHeaderOptions = {
  headerStyle: {
    backgroundColor: theme.colors.headerBackground,
  },
  headerTitleAlign: 'center' as const,
  headerTintColor: theme.colors.textPrimary,
  headerTitleStyle: {
    fontSize: parseInt(moderateScale(14).toFixed(0), 10),
    fontWeight: '700' as const,
    color: theme.colors.textPrimary,
  },
};

function Tab1Navigator() {
  return (
    <Tab1Stack.Navigator screenOptions={commonHeaderOptions}>
      <Tab1Stack.Screen
        name="Tab1Empty"
        component={EmptyScreen}
        options={{ headerShown: false }}
      />

      <Tab1Stack.Screen
        name="TextNotification"
        component={TextNotificationScreen}
        options={{ title: PNHeaders.text }}
      />

      <Tab1Stack.Screen
        name="ImageNotification"
        component={ImageNotificationScreen}
        options={{ title: PNHeaders.image }}
      />

      <Tab1Stack.Screen
        name="YouTubeNotification"
        component={YouTubeNotificationScreen}
        options={{ title: PNHeaders.youtube }}
      />
    </Tab1Stack.Navigator>
  );
}

export default Tab1Navigator;
