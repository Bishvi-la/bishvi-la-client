import { Stack } from 'expo-router';
import { Routes } from '@/src/types/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import BackButton from '@/src/components/BackButton/BackButton';

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
