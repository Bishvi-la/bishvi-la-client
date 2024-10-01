import { FunctionComponent } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import LOGO from '@/assets/images/bishvila-logo.png';
import { hebrewTranslations } from '@/translation/lang-heb';

interface HomepageProps {}

export const Homepage: FunctionComponent<HomepageProps> = () => {
  return (
    <SafeAreaView>
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
