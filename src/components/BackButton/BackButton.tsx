import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { FunctionComponent } from 'react';
import { Alert, StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { ThemedText } from '@/components/core';
import { hebrewTranslations } from '@/translation/lang-heb';

interface BackButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  secureBack?: boolean;
}

const BackButton: FunctionComponent<BackButtonProps> = ({ buttonStyle, textStyle, iconStyle, secureBack }) => {
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      console.warn('No screens to go back to.');
    }
  };

  const handleBackPress = () => {
    const { title, message, cancel, confirm } = hebrewTranslations.lists.secureBack || {};

    if (secureBack) {
      Alert.alert(title, message, [
        {
          text: cancel.title,
          style: 'cancel',
        },
        {
          text: confirm.title,
          style: 'destructive',
          onPress: handleBack,
        },
      ]);
    } else {
      handleBack();
    }
  };

  return (
    <TouchableOpacity onPress={handleBackPress} style={[styles.button, buttonStyle]}>
      <AntDesign name="arrowleft" size={20} color="#fff" style={[styles.icon, iconStyle]} />
      <ThemedText style={[styles.buttonText, textStyle]}>{hebrewTranslations.backButton.label}</ThemedText>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
    color: '#000000',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  },
});
