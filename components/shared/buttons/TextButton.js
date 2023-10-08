import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";
import { useThemeContext } from "../../../context/ThemeContext";

export default function TextButton({ onPress, children, marginHorizontal }) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <TouchableOpacity style={[globalStyles.buttonTwo, {marginHorizontal: marginHorizontal}]}>
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
