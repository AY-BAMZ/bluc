import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../components/signIn/Login";
import Register from "../../components/signIn/Register";

const Stack = createNativeStackNavigator();

export default function SignInStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        // headerStyle: { backgroundColor: "purple", height: 80 },
        headerShown: false,
        // headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
