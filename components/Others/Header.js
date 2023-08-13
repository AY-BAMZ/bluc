import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { menuIcon, notificationIcon } from "../IconsFunctions/headerIcons";
import { SvgXml } from "react-native-svg";
import { useThemeContext } from "../../context/ThemeContext";
import { globalStyles } from "../../styles/global";

export default function Header(props) {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <SvgXml
          xml={menuIcon}
          width="32"
          color={theme.colors.black}
          height="32"
        />
      </TouchableOpacity>
      <Text style={[
              globalStyles.textFour,
              {
                color: theme.colors.text,
              },
            ]}>{props.title}</Text>
      <TouchableOpacity>
        <SvgXml
          xml={notificationIcon}
          width="32"
          color={theme.colors.black}
          height="32"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "none",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 48,
  },
});
