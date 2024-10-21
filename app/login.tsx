import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Login } from '@/src/components/Auth/Login/Login';
import { useThemeColor } from '@/src/hooks/useThemeColor';

export default function LoginScreen() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
