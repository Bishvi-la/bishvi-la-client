import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/core/Text/ThemedText';
import { ThemedView } from '@/components/core/View/ThemedView';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { hebrewTranslations } from '@/src/translation/lang-heb';

const HomepageScreen = () => {
  const backgroundColor = useThemeColor({}, 'background');
  const router = useRouter();

  const handleOnPress = () => router.push('/myList/myList');

  // TODO: Need to import the username after the user done signup flow.
  // TEMP!!!
  const userName = 'יערה כהן';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ThemedView style={styles.imageContainer}>
        {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
        <Image source={require('@/assets/images/Patterns1.jpg')} style={styles.image} resizeMode="cover" />
        <View style={styles.overlay}>
          <ThemedText style={styles.centeredText} type="title">
            {`${hebrewTranslations.main.homepage.Welcome}
${userName}!`}
          </ThemedText>
        </View>
      </ThemedView>
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <ThemedText style={styles.buttonText} type="title">
          {hebrewTranslations.main.homepage.startCreatingNewList}
        </ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomepageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 15,
  },
  centeredText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#5BABB5',
    width: '90%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 33,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
