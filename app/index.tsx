import { I18nManager, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Homepage } from '@/src/components/Homepage/Homepage';
import { useThemeColor } from '@/src/hooks/useThemeColor';

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function Index() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Homepage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
