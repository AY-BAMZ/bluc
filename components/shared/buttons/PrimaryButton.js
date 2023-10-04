import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";
import { useThemeContext } from "../../../context/ThemeContext";

export default function PrimaryButton({onPress, children}) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <TouchableOpacity
      style={[
        globalStyles.buttonTwo,
        { backgroundColor: theme.colors.primary, marginHorizontal: 20 },
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
