import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Signup } from '@/src/components/Auth/Signup/Signup';
import { useThemeColor } from '@/src/hooks/useThemeColor';

export default function SignupScreen() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Signup />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
