import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FlexButton from "../buttons/FlexButton";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useThemeContext } from "../../../context/ThemeContext";
import { globalStyles } from "../../../styles/global";
import { AntDesign } from "@expo/vector-icons";

const customWidth = Dimensions.get("window").width;

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."],
};
LocaleConfig.defaultLocale = "en";

const BottomDatePicker = ({ isVisible, onClose, onDateSelected }) => {
  const { theme, toggleTheme } = useThemeContext();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSaveDate = () => {
    if (selectedDate) {
      onDateSelected(selectedDate);
    }
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onRequestClose={onClose}
    >
      <View style={[styles.overlay, { flex: 1, justifyContent: "flex-end" }]}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text
              style={[globalStyles.textFour, { color: theme.colors.textLight }]}
            >
              Choose a date
            </Text>
            <TouchableOpacity>
              <AntDesign
                name="close"
                onPress={onClose}
                style={[
                  globalStyles.textFour,
                  { color: theme.colors.textLight },
                ]}
              />
            </TouchableOpacity>
          </View>
          <Calendar
            onDayPress={(day) => {
              handleDateSelect(day.dateString);
            }}
            minDate={"2023-01-01"}
            maxDate={"2023-12-31"}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: theme.colors.primaryColor,
              },
            }}
          />
          <FlexButton onPress={handleSaveDate}>Save</FlexButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    height: 500,
    bottom: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // ...your other styles
});

export default BottomDatePicker;
