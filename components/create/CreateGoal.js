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
import { SvgXml } from "react-native-svg";
import { edit, save, trash } from "../IconsFunctions/createPageIcons";
import { FlatList } from "react-native";
import { KeyboardAvoidingView } from "react-native";

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

  // create, edit and delete tasks
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Math.random().toString(),
      text: taskText,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    // setEditingTaskId(null);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    // setEditingTaskId(null);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
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
            <TouchableOpacity
              style={[
                styles.datePicker,
                { borderBottomColor: theme.colors.primary },
              ]}
              onPress={openDatePicker}
            >
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
            <TouchableOpacity
              style={[
                styles.datePicker,
                { borderBottomColor: theme.colors.primary },
              ]}
              onPress={openTimePicker}
            >
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
            <TouchableOpacity
              style={[
                styles.datePicker,
                { borderBottomColor: theme.colors.primary },
              ]}
              onPress={openEndDatePicker}
            >
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
            <TouchableOpacity
              style={[
                styles.datePicker,
                { borderBottomColor: theme.colors.primary },
              ]}
              onPress={openEndTimePicker}
            >
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

        {/* Task creation */}
        <Text
          style={[
            globalStyles.label,
            { color: theme.colors.textLight, marginHorizontal: 20 },
          ]}
        >
          Add Tasks
        </Text>
        <View style={styles.tasks}>
          <TextInput
            style={[
              globalStyles.input,
              {
                borderBottomColor: theme.colors.primary,
                color: theme.colors.text,
              },
            ]}
            placeholder="Enter a task..."
            value={taskText}
            onChangeText={setTaskText}
          />
          <TouchableOpacity
            style={[
              globalStyles.buttonTwo,
              {  marginBottom:16 },
            ]}
            onPress={addTask}
          >
            <Text
              style={[globalStyles.buttonTextTwo, { color: theme.colors.hyperText }]}
            >
              {tasks.length > 0 ? "Add a New Task" : "Add Task"}
            </Text>
          </TouchableOpacity>
          <FlatList
            data={tasks}
            keyExtractor={(task) => task.id}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                {editingTaskId === item?.id ? (
                  <TextInput
                    style={[
                      globalStyles.input,
                      {
                        borderBottomColor: theme.colors.primary,
                        color: theme.colors.text,
                        width: customWidth - 128,
                        height: "auto",
                      },
                    ]}
                    multiline
                    value={item?.text}
                    onChangeText={(newText) => editTask(item?.id, newText)}
                  />
                ) : (
                  <View
                    style={[
                      styles.taskText,
                      { backgroundColor: theme.colors.cardBackground },
                    ]}
                  >
                    <Text
                      style={[
                        globalStyles.textFive,
                        { color: theme.colors.text, marginHorizontal: 16 },
                      ]}
                    >
                      {item?.text}
                    </Text>
                  </View>
                )}
                <TouchableOpacity
                  onPress={() =>
                    editingTaskId === item?.id
                      ? setEditingTaskId(null)
                      : setEditingTaskId(item?.id)
                  }
                  style={[
                    styles.editButton,
                    { backgroundColor: theme.colors.primary },
                  ]}
                >
                  {editingTaskId === item?.id ? (
                    <SvgXml xml={save} width="24" color="white" height="24" />
                  ) : (
                    <SvgXml xml={edit} width="24" color="white" height="24" />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.deleteButton,
                    { backgroundColor: theme.colors.red },
                  ]}
                  onPress={() => deleteTask(item?.id)}
                >
                  <SvgXml xml={trash} width="28" color="white" height="32" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
            style={[
              globalStyles.buttonTwo,
              { backgroundColor: theme.colors.primary, marginHorizontal:20},
            ]}
            // onPress={addTask}
          >
            <Text
              style={[globalStyles.buttonTextTwo, { color: "white" }]}
            >
              Create Task
            </Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 16,
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
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    marginBottom: 5,
    borderRadius: 5,
  },
  tasks: {
    marginHorizontal: 20,
  },
  editButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    flexDirection: "row",
    margin: 2,
  },
  deleteButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    margin: 2,
  },
  taskText: {
    padding: 12,
    paddingHorizontal: 0,
    width: customWidth - 128,
    minHeight: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    marginRight: 2,
    borderRadius: 8,
  },
});
