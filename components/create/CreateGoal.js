import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Keyboard,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { globalStyles } from "../../styles/global";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

const customWidth = Dimensions.get("window").width;
const customHeight = Dimensions.get("window").height;

export default function CreateGoal() {
  const { theme, toggleTheme } = useThemeContext();

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [title, setTitle] = useState("");

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={styles.form}
      >
        <Text
          style={[globalStyles.textThree, { color: theme.colors.textLight }]}
        >
          Create a goal
        </Text>
        <Text style={[globalStyles.label, { color: theme.colors.textLight }]}>
          Title
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
          placeholder="Enter your title"
          value={title}
          onChangeText={(val) => setTitle(val)}
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <Text style={[globalStyles.label, { color: theme.colors.textLight }]}>
          Description
        </Text>
        <TextInput
          style={[
            globalStyles.textarea,
            {
              borderBottomColor: theme.colors.primary,
              color: theme.colors.text,
            },
          ]}
          multiline
          placeholderTextColor={theme.colors.placeholder}
          placeholder="Enter your goal description"
          value={title}
          onChangeText={(val) => setTitle(val)}
          returnKeyType="next"
          blurOnSubmit={false}
        />
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
          placeholder="Select a date"
          returnKeyType="next"
          blurOnSubmit={false}
          onFocus={showDatepicker}
          value={date.toDateString()}
          editable={false}
        />
      </TouchableWithoutFeedback>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
          style={styles.datePicker}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
  },
  form: {
    width: customWidth - 40,
    marginHorizontal: 20,
  },
  datePicker: {
    borderBottomWidth: 1,
    borderColor: "red",
  },
});
