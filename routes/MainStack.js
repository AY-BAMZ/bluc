import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import DrawerNav from "./DrawerNav";
// import TabStack from "./TabStack/TabStack";
import SignInStack from "./SignInRoutes/SignInStack";
import TabStack from "./TabRoutes/TabStack";
import { useAuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function MainNav() {

  const {user} = useAuthContext()
  return (
    
    <NavigationContainer >
      <Stack.Navigator
        // initialRouteName="SignInStack"
        screenOptions={{
          headerShown: false,
        }}
      >{
        !user? 
        <Stack.Screen name="SignInStack" component={SignInStack} />:
        <Stack.Screen name="TabStack" component={TabStack} />
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
