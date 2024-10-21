import { Login } from '@/src/components/Auth/Login/Login';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function LoginScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: '#ffffff',
      }}
    >
      <Login />
    </SafeAreaView>
  );
}
