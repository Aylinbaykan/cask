import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Stack from './Tab1Stack';
import SendNotificationScreen from '../screens/SendNotification/SendNotificationScreen';
import NotificationListScreen from '../screens/NotificationList/NotificationListScreen';
import { theme } from '../theme/theme';
import { moderateScale } from 'react-native-size-matters';
import { BottomTabTexts } from '../constants/texts';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => null, 

        tabBarLabel: ({ focused }) => (
            <View style={styles.tabLabelWrapper}>
              <Text
                style={[
                  styles.labelText,
                  {
                    color: focused
                      ? theme.colors.primary
                      : theme.colors.textSecondary,
                    fontWeight: focused ? '700' : '500',
                  },
                ]}>
                {route.name === 'PN'
                  ? BottomTabTexts.pn
                  : route.name === 'Send'
                  ? BottomTabTexts.send
                  : BottomTabTexts.list}
              </Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
          

        headerTitleAlign: 'center',
        tabBarStyle: {
          height: moderateScale(80),
          borderTopLeftRadius: moderateScale(20),
          borderTopRightRadius: moderateScale(20),
          backgroundColor: theme.colors.white,
        },
      })}>
      <Tab.Screen
        name="PN"
        component={Tab1Stack}
        options={{
          title: 'PN',
          headerStyle: {
            backgroundColor: theme.colors.headerBackground,
          },
          headerTintColor: theme.colors.textPrimary,
          headerTitleStyle: {
            fontSize: moderateScale(theme.fontSize.lg),
            fontWeight: '700',
          },
        }}
      />
      <Tab.Screen
        name="Send"
        component={SendNotificationScreen}
        options={{
          title: 'Bildirim Gönder',
          headerStyle: {
            backgroundColor: theme.colors.headerBackground,
          },
          headerTintColor: theme.colors.textPrimary,
          headerTitleStyle: {
            fontSize: moderateScale(theme.fontSize.lg),
            fontWeight: '700',
          },
        }}
      />
      <Tab.Screen
        name="List"
        component={NotificationListScreen}
        options={{
          title: 'Bildirimler',
          headerStyle: {
            backgroundColor: theme.colors.headerBackground,
          },
          headerTintColor: theme.colors.textPrimary,
          headerTitleStyle: {
            fontSize: moderateScale(theme.fontSize.lg),
            fontWeight: '700',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabLabelWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: moderateScale(6),
  },
  labelText: {
    fontSize: moderateScale(14),
  },
  underline: {
    marginTop: 4,
    width: moderateScale(20),
    height: 3,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
});
