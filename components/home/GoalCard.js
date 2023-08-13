import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { globalStyles } from "../../styles/global";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { tasks } from "../IconsFunctions/homeIcons";
import { timer } from "../IconsFunctions/homeIcons";

const customWidth = Dimensions.get("window").width;

export default function GoalCard() {
  const { theme, isDarkTheme } = useThemeContext();
  const progress = 65;

  const data = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1681864401/photo-1570295999919-56ceb5ecca61_cksllw.jpg",
    },
    {
      id: "2",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1681864401/1900x1900_k5affu.webp",
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1681864401/istockphoto-1386479313-170667a_lyx1hc.jpg",
    },
    {
      id: "4",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1681864401/istockphoto-1286810719-170667a_rmmsn8.jpg",
    },
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.cardBackground },
      ]}
    >
      <View style={styles.top}>
        <View
          style={[styles.statusBar, { backgroundColor: theme.colors.yellow }]}
        ></View>
        <View style={styles.topic}>
          <Text
            style={[
              globalStyles.textFive,
              { color: theme.colors.text, fontFamily: "outfit-bold" },
            ]}
          >
            Schedule Mobile App
          </Text>
          <Text
            style={[
              globalStyles.textSeven,
              { color: theme.colors.textExtraLight, marginTop: 4 },
            ]}
          >
            Schedule Mobile App
          </Text>
        </View>
      </View>
      <View style={styles.collaborators}>
        {data.map((item) => (
          <Image
            key={item.id}
            source={{ uri: item.image }}
            style={[styles.image, { borderColor: theme.colors.cardBackground }]}
          />
        ))}
        <View
          style={[
            styles.more,
            {
              backgroundColor: theme.colors.lightCardBackground,
              borderColor: theme.colors.cardBackground
            },
          ]}
        >
          <Text
            style={[
              globalStyles.textFive,
              {
                color: theme.colors.text,
                fontFamily: "outfit-bold",
              },
            ]}
          >
            3
          </Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar
          progress={progress / 100}
          style={[styles.bar, { backgroundColor: theme.colors.background }]}
          color={theme.colors.yellow}
        />
        <Text
          style={[
            globalStyles.textSeven,
            {
              color: theme.colors.textExtraLight,
              fontFamily: "outfit-semibold",
            },
          ]}
        >
          {progress}%
        </Text>
      </View>

      <View style={styles.info}>
        <View style={styles.tasks}>
          <SvgXml
            xml={tasks}
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
            4 Task
          </Text>
        </View>
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
            25 Sept, 2023
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: customWidth * 0.7,
    padding: 20,
    borderRadius: 20,
    marginRight: 20,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusBar: {
    width: 6,
    height: 50,
    borderRadius: 10,
    marginRight: 8,
  },
  bar: {
    borderRadius: 20,
    height: 10,
    width: customWidth * 0.52,
  },
  progressBar: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tasks: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    borderWidth: 2,
    marginLeft: -12,
  },
  collaborators: {
    flexDirection: "row",
    marginTop: 16,
    paddingLeft: 12,
  },
  more: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    marginLeft: -12,
    alignItems: "center",
    justifyContent: "center",
  },
});
