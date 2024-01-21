import { StatusBar } from 'expo-status-bar';
import { View, StatusBar as topBar } from 'react-native';
import Mainnavigation from './navigation/Mainnavigation';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { ToastProvider } from 'react-native-toast-notifications';
import { startMirageServer } from './redux/MockServer';

if (window.server) {
  server.shutdown()
}

window.server = startMirageServer()

export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1, paddingTop: topBar.currentHeight }}>
        <ToastProvider>
          <StatusBar style="auto" />
          <Mainnavigation />
        </ToastProvider> 
      </View>
    </Provider>
  )
}


