import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { globalStyles } from "../../styles/global";
import { SvgXml } from "react-native-svg";
import { timer } from "../IconsFunctions/homeIcons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const customWidth = Dimensions.get("window").width;

export default function InProgressCard() {
  const { theme, isDarkTheme } = useThemeContext();
  const [progress, setProgress] = useState(76);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.cardBackground },
      ]}
    >
      <View style={styles.top}>
        <View
          style={[styles.statusBar, { backgroundColor: theme.colors.orange }]}
        ></View>
        <View style={styles.topic}>
          <Text
            style={[
              globalStyles.textSeven,
              { color: theme.colors.textExtraLight, marginBottom: 4 },
            ]}
          >
            Schedule Mobile App
          </Text>
          <Text
            style={[
              globalStyles.textFive,
              { color: theme.colors.text, fontFamily: "outfit-bold" },
            ]}
          >
            Schedule Mobile App
          </Text>
          <View style={styles.timer}>
            <View style={styles.tasks}>
              <SvgXml
                xml={timer}
                width="18"
                color={theme.colors.hyperText}
                height="18"
              />
              <Text
                style={[
                  globalStyles.textSeven,
                  {
                    color: theme.colors.textExtraLight,
                    marginLeft: 4,
                  },
                ]}
              >
                Time Left -
              </Text>
            </View>
            <Text
              style={[
                globalStyles.textSeven,
                {
                  color: theme.colors.textLight,
                  marginTop: 12,
                  fontFamily: "outfit-semibold",
                },
              ]}
            >
              3 Hours 30 mins
            </Text>
          </View>
        </View>
      </View>
      <AnimatedCircularProgress
        size={70}
        width={8}
        fill={progress}
        tintColor={theme.colors.hyperText}
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor={theme.colors.lightCardBackground}
      >
        {(fill) => (
          <Text
            style={[
              globalStyles.textThree,
              { color: theme.colors.textLight, marginBottom: 4 },
            ]}
          >
            {progress}%
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: customWidth - 40,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  top: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  statusBar: {
    width: 3,
    height: 30,
    borderRadius: 10,
    marginRight: 8,
  },
  tasks: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginRight: 8,
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
