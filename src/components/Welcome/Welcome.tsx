import LOGO from '@/assets/images/bishvila-logo.png';
import LandingPage from '@/assets/images/landingBackground.png';
import { Routes } from '@/src/types/routes';
import { hebrewTranslations } from '@/translation/lang-heb';
import { useRouter } from 'expo-router';
import React, { FunctionComponent } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Welcome: FunctionComponent = () => {
  const router = useRouter();

  const handleNavigationClick = (routeName: Routes) => router.push({ pathname: `./${routeName}` });

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <ImageBackground source={LandingPage} resizeMode={'stretch'} style={styles.imageBg} />
          <Image source={LOGO} width={120} height={120} style={styles.logoImage} />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleNavigationClick(Routes.Signup)}>
            <Text style={styles.buttonText}>{hebrewTranslations.welcome.createAnAccount}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.lightBackground]}
            onPress={() => handleNavigationClick(Routes.Login)}
          >
            <Text style={styles.buttonText}>{hebrewTranslations.welcome.login}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.lightBackground]}>
            <Text style={styles.buttonText}>{hebrewTranslations.welcome.punchesGift}</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  button: {
    backgroundColor: '#5BABB5',
    width: '100%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 20,
  },
  lightBackground: {
    backgroundColor: '#94D1D6',
  },
  buttonText: {
    textAlign: 'center',
  },
});
