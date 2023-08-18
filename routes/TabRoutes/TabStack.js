import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Goals from "../../components/goals/Goals";
import History from "../../components/history/History";
import CreateGoal from "../../components/create/CreateGoal";
import Home from "../../components/home/Home";
import Profile from "../../components/profile/Profile";
import { SvgXml } from "react-native-svg";
import {
  goals,
  goalsOutline,
  history,
  historyOutline,
  homeIcon,
  homeIconOutline,
  plus,
  profile,
  profileOutline,
} from "../../components/IconsFunctions/tabIcons";
import { useThemeContext } from "../../context/ThemeContext";
import Header from "../../components/Others/Header";
import HomeStack from "./HomeSTack";
import CreateGoalStack from "./CreateGoalStack";

const Tab = createBottomTabNavigator();

const TabStack = () => {
    const { theme, toggleTheme } = useThemeContext();

  const screenOptions = {
    unmountOnBlur: false,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: theme.colors.tabBackground,
      //   height: 80,
      //   marginHorizontal: 10,
      //   marginBottom: 10,
      //   borderRadius: 100,
      elevation: 5, // This sets the shadow on Android (may not work on all versions)
    shadowColor: theme.colors.shadowColor,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
      position: "absolute",
      paddingHorizontal: 20,
      borderColor: theme.colors.tabBackground,
      borderTopWidth: 0
    },
    background: "#ffffff00",
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.primary,
    tabBarLabel: "",
    tabBarLabelStyle: {
      marginTop: -5,
      marginBottom: -15,
    },
  };
  const sceneContainerStyle = {
    backgroundColor: theme.colors.background,
  };
  return (
    <Tab.Navigator {...{ screenOptions, sceneContainerStyle }}>
      <Tab.Screen
        name="HomeStack"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <SvgXml xml={homeIcon} width="28" color={theme.colors.primary} height="32" />
            ) : (
              <SvgXml
                xml={homeIconOutline}
                width="28"
                color={theme.colors.primary}
                height="32"
              />
            ),
          headerShown: true,
          header: () => <Header title={'Home Page'}/>
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <SvgXml xml={goals} width="28" color={theme.colors.primary} height="32" />
            ) : (
              <SvgXml
                xml={goalsOutline}
                width="28"
                color={theme.colors.primary}
                height="32"
              />
            ),
          //   header: () => <Header title={"Inbox"} />,
        }}
        component={Goals}
      />
      <Tab.Screen
        name="Create"
        component={CreateGoalStack}
        options={{ tabBarButton: (props) => <BigTabButton {...props} /> }}
      />
      <Tab.Screen
        name="History"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <SvgXml xml={history} width="28" color={theme.colors.primary} height="32" />
            ) : (
              <SvgXml
                xml={historyOutline}
                width="28"
                color={theme.colors.primary}
                height="32"
              />
            ),
          //   header: () => <Header title={'Transactions'}/>,
        }}
        component={History}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <SvgXml xml={profile} width="28" color={theme.colors.primary} height="32" />
            ) : (
              <SvgXml
                xml={profileOutline}
                width="28"
                color={theme.colors.primary}
                height="32"
              />
            ),
          //   header: () => <Header title={'Transactions'}/>,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const BigTabButton = (props) => {
    
    const { theme, toggleTheme } = useThemeContext();
    return (
    <TouchableOpacity
      style={
        [props.accessibilityState?.selected === true
          ? styles.bigTabButton
          : styles.notTabButton, {backgroundColor: theme.colors.tabBackground}]
      }
      onPress={() => props.onPress()}
    >
      <View
        style={
         [ props.accessibilityState?.selected === true
            ? styles.padButton
            : styles.notPadButton, {backgroundColor: props.accessibilityState?.selected === true ? theme.colors.primary : "#ffffff00"}]
        }
      >
        <SvgXml
          xml={plus}
          width="40"
          color={
            props.accessibilityState?.selected === true ? "#fff" : theme.colors.primary
          }
          height="32"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bigTabButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginTop: -35,
    // backgroundColor: "#1E00AD",
    // borderWidth: 5,
    borderColor: "#f7f7f7",
  },
  padButton: {
    backgroundColor: "#1E00AD",
    width: 64,
    height: 64,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  notPadButton: {
    backgroundColor: "#00000000",
    width: 64,
    height: 64,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  bigTabButtonText: {
    fontSize: 20,
    color: "#000",
  },
  notTabButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#FFF",
    borderRadius: 50,
    marginTop: -35,
    // backgroundColor: "#aaa",
    // borderWidth: 5,
    borderColor: "#f7f7f7",
  },
  iconTab: {
    color: "#fff",
  },
  notIconTab: {
    color: "#1E00AD",
  },
});

export default TabStack;
