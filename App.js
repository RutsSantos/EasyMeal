import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './app/utils/Navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Open</Text>
      <StatusBar style="auto" />
      </View> */}
      <AppNavigation />

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
