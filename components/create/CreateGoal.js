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
import DatePicker from "react-native-datepicker";
import { TouchableOpacity } from "react-native";
const customWidth = Dimensions.get("window").width;
const customHeight = Dimensions.get("window").height;

export default function CreateGoal() {
  const { theme, toggleTheme } = useThemeContext();
  const [title, setTitle] = useState("");

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime !== undefined) {
      setTime(selectedTime);
    }
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const openTimePicker = () => {
    setShowTimePicker(true);
  };
  
  const handleEndDateChange = (event, selectedEndDate) => {
    setShowEndDatePicker(false);
    if (selectedEndDate !== undefined) {
      setEndDate(selectedEndDate);
    }
  };

  const handleEndTimeChange = (event, selectedEndTime) => {
    setShowEndTimePicker(false);
    if (selectedEndTime !== undefined) {
      setEndTime(selectedEndTime);
    }
  };

  const openEndDatePicker = () => {
    setShowEndDatePicker(true);
  };

  const openEndTimePicker = () => {
    setShowEndTimePicker(true);
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
      </TouchableWithoutFeedback>
      <Text
        style={[
          globalStyles.label,
          { color: theme.colors.textLight, marginHorizontal: 20 },
        ]}
      >
        From:
      </Text>
      <View style={styles.pickers}>
        <View style={styles.picker}>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <TouchableOpacity style={styles.datePicker} onPress={openDatePicker}>
            {date ? (
              <Text style={globalStyles.textSix}>
                {date.toLocaleDateString()}
              </Text>
            ) : (
              <Text style={globalStyles.textSix}>Choose Start date</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.picker}>
          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleTimeChange}
            />
          )}
          <TouchableOpacity style={styles.datePicker} onPress={openTimePicker}>
            {time ? (
              <Text style={globalStyles.textSix}>
                {time.toLocaleTimeString()}
              </Text>
            ) : (
              <Text style={globalStyles.textSix}>Choose Start time</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={[
          globalStyles.label,
          { color: theme.colors.textLight, marginHorizontal: 20 },
        ]}
      >
        To:
      </Text>
      <View style={styles.pickers}>
        <View style={styles.picker}>
          {showEndDatePicker && (
            <DateTimePicker
              value={endDate}
              mode="date"
              display="default"
              onChange={handleEndDateChange}
            />
          )}
          <TouchableOpacity style={styles.datePicker} onPress={openEndDatePicker}>
            {endDate ? (
              <Text style={globalStyles.textSix}>
                {endDate.toLocaleDateString()}
              </Text>
            ) : (
              <Text style={globalStyles.textSix}>Choose End date</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.picker}>
          {showEndTimePicker && (
            <DateTimePicker
              value={endTime}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleEndTimeChange}
            />
          )}
          <TouchableOpacity style={styles.datePicker} onPress={openEndTimePicker}>
            {endTime ? (
              <Text style={globalStyles.textSix}>
                {endTime.toLocaleTimeString()}
              </Text>
            ) : (
              <Text style={globalStyles.textSix}>Choose End time</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
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
  datePicker: {
    height: 40,
    width: customWidth - 40,
    borderBottomWidth: 1,
  },
  pickers: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  picker: {
    paddingTop: 16,
  },
});
