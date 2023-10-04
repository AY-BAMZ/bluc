import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import GoalCard from "./GoalCard";
import { globalStyles } from "../../styles/global";
import InProgressCard from "./InProgressCard";
import Hero from "./Hero";

export default function Home() {
  const { theme, toggleTheme } = useThemeContext();

  const Data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 2" },
    { id: "4", title: "Item 2" },
    // Add more items as needed
  ];

  return (
    <View
      style={[globalStyles.container, { backgroundColor: theme.colors.background }]}
    >
      <Hero />
      <View style={styles.heading}>
        <Text
          style={[
            globalStyles.textFive,
            { color: theme.colors.text, fontFamily: "outfit-regular" },
          ]}
        >
          Upcoming Goals
        </Text>
        <TouchableOpacity>
          <Text
            style={[
              globalStyles.textSix,
              { color: theme.colors.hyperText, fontFamily: "outfit-regular" },
            ]}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.goalCards}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <GoalCard item={item} />
          </TouchableOpacity>
        )}
      />

      <View style={styles.heading}>
        <Text
          style={[
            globalStyles.textFive,
            { color: theme.colors.text, fontFamily: "outfit-regular" },
          ]}
        >
          In Progress
        </Text>
        <TouchableOpacity>
          <Text
            style={[
              globalStyles.textSix,
              { color: theme.colors.hyperText, fontFamily: "outfit-regular" },
            ]}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        style={styles.goalProgressCards}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <InProgressCard item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goalCards: {
    // marginLeft: 20,
    paddingHorizontal: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 12,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});
