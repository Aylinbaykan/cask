import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CASKLogo from '../../assets/svg/cask-logo-light.svg';
import {theme} from '../../theme/theme';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <LinearGradient colors={['#141e30', '#1c3755']} style={styles.gradient}>
        {/* <CASKLogo width={160} height={160} /> */}
        <ActivityIndicator
          size="small"
          color={theme.colors.white}
          style={styles.loader}
        />
        <Text style={styles.text}>– CASK RN Challenge 2 –</Text>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    marginTop: theme.spacing.md,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSize.lg,
    marginTop: theme.spacing.sm,
  },
});
