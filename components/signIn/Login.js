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

const customWidth = Dimensions.get("window").width;
const customHeight = Dimensions.get("window").height;

export default function Login() {
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

  const darkPageBackground = "https://res.cloudinary.com/dmixz7eur/image/upload/v1691890007/sign_in_bg_2_sctsux.png"
  const lightPageBackground = "https://res.cloudinary.com/dmixz7eur/image/upload/v1691890007/sign_in_bg_o1vzyb.png"
  return (
    <ImageBackground
      source={isDarkTheme ? { uri: darkPageBackground } : { uri: lightPageBackground }} // Replace with the path to your image
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
          <Text style={globalStyles.textTwo}>Login</Text>
          <Text style={styles.text}>
            Hello, this is a page with a background image!
          </Text>
          {errorMsg ? (
            <Text style={globalStyles.error}>{errorMsg}</Text>
          ) : (
            <Text style={globalStyles.noError}></Text>
          )}
          <Text style={globalStyles.label}>Email</Text>
          <TextInput
            style={[
              globalStyles.input,
              { backgroundColor: theme.colors.inputBackground },
            ]}
            placeholder="Enter your email"
            value={email}
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={(val) => updateInputVal(val, "email")}
            returnKeyType="next"
            blurOnSubmit={false}
          />
          <Text style={globalStyles.label}>Password</Text>
          <TextInput
            style={[
              globalStyles.input,
              { backgroundColor: theme.colors.inputBackground },
            ]}
            placeholder="Enter your password"
            value={password}
            onChangeText={(val) => updateInputVal(val, "password")}
            secureTextEntry={true}
            maxLength={15}
            blurOnSubmit={false}
          />
        </TouchableWithoutFeedback>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={toggleTheme}
            style={[
              globalStyles.button,
              {
                backgroundColor: theme.colors.buttonBackground,
                width: customWidth - 40,
              },
            ]}
          >
            <Text style={[globalStyles.buttonText, { color: "#fff" }]}>
              Log In{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.buttonTwo}>
            <Text
              onPress={() => navigation.navigate("Register")}
              style={globalStyles.buttonTextTwo}
            >
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
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
    minHeight: customHeight - 100000,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 0,
  },
  form: {
    width: customWidth - 40,
    marginHorizontal: 20,
    paddingVertical: customHeight * 0.12,
  },
});
