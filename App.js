import {SafeAreaProvider} from 'react-native-safe-area-context';
import { View } from 'react-native';
import Presentacion from './components/Presentacion';

export default function App() {
  return (
  <SafeAreaProvider>
    <View style={{ flex: 1 }}>
      <Presentacion />
    </View>
  </SafeAreaProvider>
  );
}