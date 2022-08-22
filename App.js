import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './app/utils/Navigation/AppNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('./app/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./app/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./app/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./app/assets/fonts/Montserrat-SemiBold.ttf'),
  });
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
    
    
  );
}
