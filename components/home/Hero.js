import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { globalStyles } from "../../styles/global";

const customWidth = Dimensions.get("window").width;

export default function Hero() {
  const { theme, isDarkTheme } = useThemeContext();

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.backgroundImage}
          source={require("../../assets/images/home_image.png")}
        />
      </View>
      <View style={[styles.content, { backgroundColor: "#7041FF" }]}>
        <View style={styles.status}>
          <Text style={[
              globalStyles.textFive,
              { color: "#ddd", marginBottom: 4 },
            ]}>Today's Tasks</Text>
          <Text style={[
              globalStyles.textTwo,
              { color: "#ffffff", marginBottom: 4 },
            ]}>2/10</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: customWidth - 40,
    marginHorizontal: 20,
    height: 140,
  },
  backgroundImage: {
    width: customWidth * 0.45,
    height: 140,
  },
  image: {
    position: "absolute",
    zIndex: 100,
  },
  content: {
    width: customWidth - 40,
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 110,
    borderRadius: 16,
    marginTop: 30,
  },
  status: {
    width: customWidth * 0.35,
  },
});
