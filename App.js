import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as topBar } from 'react-native';
import Mainnavigation from './navigation/Mainnavigation';

export default function App() {
  return (
    <View style={{flex: 1, paddingTop: topBar.currentHeight }}>
      <StatusBar style="auto" />
      <Mainnavigation />
    </View>
  )
}


