import React from "react";
import { globalStyles } from "../../../../styles/global";
import { useThemeContext } from "../../../../context/ThemeContext";
import { TextInput, Text } from "react-native";

function InputComponent({
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
        <Text style={[globalStyles.label, { color: theme.colors.textLight, marginTop: 20, }]}>
          {label}
        </Text>
      ) : (
        ""
      )}
      <TextInput
        style={[
          globalStyles.input,
          {
            // borderBottomColor: theme.colors.primary,
            color: theme.colors.text,
            backgroundColor: theme.colors.inputBackground,
            borderWidth: .2,
            borderRadius: 4,
            borderColor: theme.colors.lightCardBackground,
          },
        ]}
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

export default InputComponent;
