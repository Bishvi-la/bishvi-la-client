import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '@/components/core';

const BackButton: React.FC = () => {
  const router = useRouter();

  const handlePress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      console.warn('No screens to go back to.');
    }
  };

  return (
    <Button
      title="חזור"
      onPress={handlePress}
      leftIcon={<AntDesign name="arrowleft" size={20} color="#fff" style={styles.icon} />}
      textStyle={styles.buttonText}
    />
  );
};

export default BackButton;

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
    color: '#000000',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  },
});
