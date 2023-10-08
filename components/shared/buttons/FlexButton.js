import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";
import { useThemeContext } from "../../../context/ThemeContext";

export default function FlexButton({onPress, children}) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <TouchableOpacity
      style={[
        globalStyles.flexButton,
        { backgroundColor: theme.colors.primary, marginHorizontal: 0 },
      ]}
      onPress={onPress}
    >
      <Text style={[globalStyles.buttonTextTwo, { color: "white" }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
