import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../components/home/Home";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerStyle: { backgroundColor: "purple", height: 80 },
        headerShown: false,
        // headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}
