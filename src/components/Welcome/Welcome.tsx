import { useRouter } from 'expo-router';
import React, { FunctionComponent } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

import LOGO from '@/assets/images/bishvila-logo.png';
import LandingPage from '@/assets/images/landingBackground.png';
import { Button, ThemedView } from '@/components/core';
import { Routes } from '@/src/types/routes';
import { hebrewTranslations } from '@/translation/lang-heb';

export const Welcome: FunctionComponent = () => {
  const router = useRouter();

  const handleNavigationClick = (routeName: Routes) => router.push({ pathname: `./${routeName}` });

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.logoContainer}>
          <ImageBackground source={LandingPage} resizeMode={'stretch'} style={styles.imageBg} />
          <Image source={LOGO} width={120} height={120} style={styles.logoImage} />
        </ThemedView>
        <ThemedView style={styles.buttonsContainer}>
          <Button
            title={hebrewTranslations.welcome.createAnAccount}
            onPress={() => handleNavigationClick(Routes.Signup)}
            color="primary"
            size="large"
            fontSize="large"
          />
          <Button
            title={hebrewTranslations.welcome.login}
            onPress={() => handleNavigationClick(Routes.Login)}
            color="secondary"
            size="large"
            fontSize="medium"
            textColor={'#000000'}
          />
          <Button
            title={hebrewTranslations.welcome.punchesGift}
            onPress={() => console.log('Gift button pressed')}
            color="secondary"
            size="large"
            fontSize="medium"
            textColor={'#000000'}
          />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  imageBg: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Light overlay for better contrast
  },
  logoImage: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    position: 'absolute',
  },
  buttonsContainer: {
    marginTop: 15,
    flexDirection: 'column',
  },
});
