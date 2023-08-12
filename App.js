import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import * as Font from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainNav from "./routes/MainStack";
import ThemeProvider from "./context/ThemeContext";

const getFonts = () =>
  Font.loadAsync({
    "outfit-thin": require("./assets/font/Outfit-Thin.ttf"),
    "outfit-extralight": require("./assets/font/Outfit-ExtraLight.ttf"),
    "outfit-light": require("./assets/font/Outfit-Light.ttf"),
    "outfit-regular": require("./assets/font/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/font/Outfit-Medium.ttf"),
    "outfit-semibold": require("./assets/font/Outfit-SemiBold.ttf"),
    "outfit-bold": require("./assets/font/Outfit-Bold.ttf"),
    "outfit-extrabold": require("./assets/font/Outfit-ExtraBold.ttf"),
    "outfit-black": require("./assets/font/Outfit-Black.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider>
            <ThemeProvider>
              <MainNav />
            </ThemeProvider>
          </PaperProvider>
        </GestureHandlerRootView>
      </>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
