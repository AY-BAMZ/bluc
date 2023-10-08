import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useThemeContext } from "../../../../context/ThemeContext";

const customWidth = Dimensions.get("window").width;

export default function InputButton({ onPress, children }) {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <>
      <TouchableOpacity
        style={[
          styles.datePicker,
          {
            // borderBottomColor: theme.colors.primary,
            color: theme.colors.text,
            backgroundColor: theme.colors.inputBackground,
            borderWidth: 0.2,
            borderRadius: 4,
            borderColor: theme.colors.lightCardBackground,
          },
        ]}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  datePicker: {
    borderBottomWidth: 1,
    borderColor: "red",
  },
  datePicker: {
    height: 40,
    width: customWidth * 0.43,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
});
