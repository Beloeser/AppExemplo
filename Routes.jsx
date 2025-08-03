// routes.jsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/Screens/Login";
import Cadastro from "./src/Screens/Cadastro";
import Logout from "./src/Screens/Logout";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
}
