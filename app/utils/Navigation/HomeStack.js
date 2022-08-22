import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../views/Home';
import ShoppingList from '../../views/ShoppingList';
import WeekView from '../../views/WeekView';
import Pantry from '../../views/Pantry';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
      <Stack.Screen name="ShoppingList" component={ShoppingList}  options={{ headerShown: false }} />
      <Stack.Screen name="WeekView" component={WeekView}  options={{ headerShown: false }} />
      <Stack.Screen name="Pantry" component={Pantry}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}