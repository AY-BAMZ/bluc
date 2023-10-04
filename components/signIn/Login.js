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
import { useAuthContext } from "../../context/AuthContext";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import TextButton from "../shared/buttons/TextButton";

const customWidth = Dimensions.get("window").width;
const customHeight = Dimensions.get("window").height;

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  const { setUser } = useAuthContext();

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
        isDarkTheme ? { uri: darkPageBackground } : { uri: lightPageBackground }
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
            Log In
          </Text>
          <Text
            style={[
              globalStyles.textSix,
              { color: theme.colors.textLight, marginVertical: 8 },
            ]}
          >
            welcome back, login to keep your goals running
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
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={{
            justifyContent: "left",
            alignItems: "flex-start",
            width: customWidth,
          }}
        >
          <Text
            onPress={() => navigation.navigate("Register")}
            style={[
              globalStyles.buttonTextTwo,
              {
                color: theme.colors.hyperText,
                marginBottom: customHeight * 0.12,
                textAlign: "left",
                marginHorizontal: 20,
                marginTop: 8,
              },
            ]}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
        <View style={styles.buttons}>
          <PrimaryButton onPress={() => setUser(true)}>Log In</PrimaryButton>
          <TextButton onPress={() => navigation.navigate("Register")}>
            Don't have an account? Sign Up
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
    paddingTop: customHeight * 0.12,
  },
});
