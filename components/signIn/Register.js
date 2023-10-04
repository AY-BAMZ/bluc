import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/global";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useThemeContext } from "../../context/ThemeContext";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import TextButton from "../shared/buttons/TextButton";

const customWidth = Dimensions.get("window").width;
const customHeight = Dimensions.get("window").height;

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  const { theme, isDarkTheme, toggleTheme } = useThemeContext();

  const updateInputVal = (val, prop) => {
    if (prop === "email") {
      setEmail(val);
    } else if (prop === "password") {
      setPassword(val);
    }
  };

  const darkPageBackground =
    "https://res.cloudinary.com/dmixz7eur/image/upload/v1691890007/sign_in_bg_2_sctsux.png";
  const lightPageBackground =
    "https://res.cloudinary.com/dmixz7eur/image/upload/v1691890007/sign_in_bg_o1vzyb.png";

  return (
    <ImageBackground
      source={
        isDarkTheme
          ? require("../../assets/images/sign_in_bg_2.png")
          : require("../../assets/images/sign_in_bg.png")
      } // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
          style={styles.form}
        >
          <Text
            style={[
              globalStyles.textTwo,
              { color: theme.colors.text, marginVertical: 12 },
            ]}
          >
            Sign Up
          </Text>
          <Text
            style={[
              globalStyles.textSix,
              { color: theme.colors.textLight, marginVertical: 8 },
            ]}
          >
            Hi there, sign up to have access to our amazing features
          </Text>
          {errorMsg ? (
            <Text style={globalStyles.error}>{errorMsg}</Text>
          ) : (
            <Text style={globalStyles.noError}></Text>
          )}
          <Text style={[globalStyles.label, { color: theme.colors.textLight }]}>
            Email
          </Text>
          <TextInput
            style={[
              globalStyles.input,
              {
                borderBottomColor: theme.colors.primary,
                color: theme.colors.text,
              },
            ]}
            placeholderTextColor={theme.colors.placeholder}
            placeholder="Enter your email"
            value={email}
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={(val) => updateInputVal(val, "email")}
            returnKeyType="next"
            blurOnSubmit={false}
          />
          <Text style={[globalStyles.label, { color: theme.colors.textLight }]}>
            Password
          </Text>
          <TextInput
            style={[
              globalStyles.input,
              {
                borderBottomColor: theme.colors.primary,
                color: theme.colors.text,
              },
            ]}
            placeholderTextColor={theme.colors.placeholder}
            placeholder="Enter your password"
            value={password}
            onChangeText={(val) => updateInputVal(val, "password")}
            secureTextEntry={true}
            maxLength={15}
            blurOnSubmit={false}
          />
          <Text style={[globalStyles.label, { color: theme.colors.textLight }]}>
            Confirm Password
          </Text>
          <TextInput
            style={[
              globalStyles.input,
              {
                borderBottomColor: theme.colors.primary,
                color: theme.colors.text,
              },
            ]}
            placeholderTextColor={theme.colors.placeholder}
            placeholder="Confirm your password"
            value={password}
            onChangeText={(val) => updateInputVal(val, "password")}
            secureTextEntry={true}
            maxLength={15}
            blurOnSubmit={false}
          />
        </TouchableWithoutFeedback>

        <View style={styles.buttons}>
          <PrimaryButton onPress={toggleTheme}>Create Account</PrimaryButton>
          <TextButton onPress={() => navigation.navigate("Login")}>
            Have an account? Log In
          </TextButton>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: customHeight,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 0,
  },
  form: {
    width: customWidth - 40,
    marginHorizontal: 20,
    paddingVertical: customHeight * 0.06,
  },
});
