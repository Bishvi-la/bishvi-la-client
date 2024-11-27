import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackButton from '@/src/components/BackButton/BackButton';
import { ErrorBoundary } from '@/src/ErrorBoundary/ErrorBoundary';
import { useThemeColor } from '@/src/hooks/useThemeColor';

// import { withSentry } from '@/src/providers/SentryProvider';

function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <ErrorBoundary>
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        <Stack
          screenOptions={{
            headerLeft: () => <BackButton />,
            headerStyle: {
              backgroundColor,
            },
            headerTransparent: true,
            title: '',
          }}
          initialRouteName={'myList'}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />

          {/* Auth Screens */}
          <Stack.Screen name="auth/signup" />
          <Stack.Screen name="auth/login" />

          {/* My List Screens */}
          <Stack.Screen name="myList" options={{ headerShown: false }} />

          {/* Main Screens */}
          <Stack.Screen name="main/homepage" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </ErrorBoundary>
  );
}

export default RootLayout;
// export default withSentry(RootLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
