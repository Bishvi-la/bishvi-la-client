import React from 'react';
import { I18nManager, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Welcome } from '@/src/components/Welcome/Welcome';
import { useThemeColor } from '@/src/hooks/useThemeColor';

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function Index() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Welcome />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
