import { Login } from '@/src/components/Auth/Login/Login';
import { Homepage } from '@/src/components/Homepage/Homepage';
import { Signup } from '@/src/components/Auth/Signup/Signup';
import { I18nManager, Text, TouchableOpacity, View } from 'react-native';

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: '#ffffff',
      }}
    >
      <Homepage />
    </View>
  );
}
