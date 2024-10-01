import { Homepage } from '@/src/components/Homepage/Homepage';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <Homepage />
    </View>
  );
}
