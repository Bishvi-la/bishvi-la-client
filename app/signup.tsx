import { Signup } from '@/src/components/Auth/Signup/Signup';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function SignupScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: '#ffffff',
      }}
    >
      <Signup />
    </SafeAreaView>
  );
}
