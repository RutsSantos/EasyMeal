import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../../views/Login";
import Navigation from "./Navigation";
import { auth } from "../../../firebase";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [isUserLogged, setUserLogged] = useState(null);
  useEffect(() => {
    console.log(auth.currentUser)
  })

  return (
    <Stack.Navigator screenListeners={{
      state: () => setUserLogged(!!auth.currentUser)
    }}>
      {isUserLogged ? <Stack.Screen
        name='AppHome'
        component={Navigation}
        options={{ headerShown: false }}
      /> : <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />}
    </Stack.Navigator>
  );
}
