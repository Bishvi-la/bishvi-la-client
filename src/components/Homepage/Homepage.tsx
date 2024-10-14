import { FunctionComponent } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import LOGO from '@/assets/images/bishvila-logo.png';
import { hebrewTranslations } from '@/translation/lang-heb';

interface HomepageProps {}

export const Homepage: FunctionComponent<HomepageProps> = () => {
  const router = useRouter();

  // const handleNavigationClick = (routeName: string) => router.push({ pathname: `/${routeName}` });

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={LOGO} width={120} height={120} />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{hebrewTranslations.homepage.createAnAccount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.lightBackground]}>
            <Text style={styles.buttonText}>{hebrewTranslations.homepage.login}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.lightBackground]}>
            <Text style={styles.buttonText}>{hebrewTranslations.homepage.punchesGift}</Text>
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
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
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
