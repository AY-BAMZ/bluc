import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";
import { useThemeContext } from "../../../context/ThemeContext";

export default function TextButton({ onPress, children }) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <TouchableOpacity style={[globalStyles.buttonTwo, {marginHorizontal: 0}]}>
      <Text
        onPress={onPress}
        style={[globalStyles.buttonTextTwo, { color: theme.colors.hyperText }]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
