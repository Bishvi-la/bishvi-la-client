import { Stack } from 'expo-router';
import { Routes } from '@/src/types/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack>
        <Stack.Screen name={Routes.Homepage} options={{ headerShown: false, title: 'Homepage' }} />
        <Stack.Screen name={Routes.Signup} options={{ title: 'Sign Up' }} />
        <Stack.Screen name={Routes.Login} options={{ title: 'Login' }} />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
