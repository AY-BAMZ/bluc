import React from "react";
import { globalStyles } from "../../../../styles/global";
import { useThemeContext } from "../../../../context/ThemeContext";
import { TextInput, Text } from "react-native";

function TextAreaComponent({
  placeholder,
  value,
  onChangeText,
  returnKeyType,
  label,
}) {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <>
      {label ? (
        <Text style={[globalStyles.label, { color: theme.colors.textLight }]}>
          {label}
        </Text>
      ) : (
        ""
      )}
      <TextInput
        style={[
          globalStyles.textarea,
          {
            // borderBottomColor: theme.colors.primary,
            color: theme.colors.text,
            backgroundColor: theme.colors.inputBackground,
            borderWidth: .2,
            borderRadius: 4,
            borderColor: theme.colors.lightCardBackground,
          },
        ]}
        multiline
        placeholderTextColor={theme.colors.placeholder}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        blurOnSubmit={false}
      />
    </>
  );
}

export default TextAreaComponent;
