import { Homepage } from '@/src/components/Homepage/Homepage';
import { I18nManager, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: '#ffffff',
      }}
    >
      <Homepage />
    </SafeAreaView>
  );
}
