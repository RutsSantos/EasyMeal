import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../../views/Login";
import Navigation from "./Navigation";
import { getData } from "../Helpers";
import { Storage } from "../../constants/Storage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const [initialRoute, setInitialRoute] = useState(null);
    useEffect(() => {
      getData(Storage.USER).then((data) => {
        data != null ? setInitialRoute("AppHome") : setInitialRoute("Login");
      });
    }, []);
    return (
      <>
        {initialRoute && (
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
              name='Login'
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='AppHome'
              component={Navigation}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </>
    );
  }