import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { Routes } from '@/src/types/routes';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import BackButton from '@/src/components/BackButton/BackButton';
import { withSentry } from '@/src/providers/SentryProvider';
import { ErrorBoundary } from '@/src/ErrorBoundary/ErrorBoundary';

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
        >
          <Stack.Screen name={Routes.Homepage} options={{ headerShown: false }} />
          <Stack.Screen name={Routes.Signup} />
          <Stack.Screen name={Routes.Login} />
        </Stack>
      </SafeAreaView>
    </ErrorBoundary>
  );
}

export default withSentry(RootLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
