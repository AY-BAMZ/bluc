import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateGoal from "../../components/create/CreateGoal";

const Stack = createNativeStackNavigator();

export default function CreateGoalStack() {
  return (
    <Stack.Navigator
      initialRouteName="CreateGoal"
      screenOptions={{
        // headerStyle: { backgroundColor: "purple", height: 80 },
        headerShown: false,
        // headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="CreateGoal" component={CreateGoal} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}
