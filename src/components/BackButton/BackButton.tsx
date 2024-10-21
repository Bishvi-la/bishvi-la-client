// BackButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

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
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <AntDesign name="arrowleft" size={20} color="#fff" style={styles.icon} />
      <Text style={styles.buttonText}>חזור</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: '#94D1D6',
    borderRadius: 8,
    alignSelf: 'flex-start',
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
