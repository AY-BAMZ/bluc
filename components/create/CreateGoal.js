import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Keyboard,
  Dimensions,
  SafeAreaView,
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
import PrimaryButton from "../shared/buttons/PrimaryButton";
import BottomDatePicker from "../shared/modals/ButtomModal";
import InputComponent from "../shared/Forms/Input/InputComponent";
import TextAreaComponent from "../shared/Forms/TextArea/TextAreaComponent";
import FlexButton from "../shared/buttons/FlexButton";
import TextButton from "../shared/buttons/TextButton";
import TimeSelectorModal from "../shared/modals/TimeSelectorModal/TimeSelectorModal";
import InputButton from "../shared/Forms/InputButton/InputButton";

const customWidth = Dimensions.get("window").width;
const customHeight = Dimensions.get("window").height;

export default function CreateGoal() {
  const { theme, toggleTheme } = useThemeContext();
  const [title, setTitle] = useState("");

  const [date, setDate] = useState();
  const [time, setTime] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [endTime, setEndTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

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

  const openModal = () => {
    setShowDatePicker(true);
  };

  const closeModal = () => {
    setShowDatePicker(false);
  };

  const handleDateSelected = (date) => {
    setDate(date);
  };

  const openEndDateModal = () => {
    setShowEndDatePicker(true);
  };

  const closeEndDateModal = () => {
    setShowEndDatePicker(false);
  };

  const handleEndDateSelected = (date) => {
    setEndDate(date);
  };

  const showTheTimePicker = () => {
    setShowTimePicker(true);
  };

  const hideTimePicker = () => {
    setShowTimePicker(false);
  };

  const handleTimeSelected = (time) => {
    setTime(time);
    hideTimePicker();
  };

  const showTheEndTimePicker = () => {
    setShowEndTimePicker(true);
  };

  const hideEndTimePicker = () => {
    setShowEndTimePicker(false);
  };

  const handleEndTimeSelected = (time) => {
    setEndTime(time);
    hideEndTimePicker();
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
            style={styles.form}
          >
            <Text
              style={[
                globalStyles.textThree,
                { color: theme.colors.textLight },
              ]}
            >
              Create a goal
            </Text>
            <InputComponent
              placeholder="Enter goal title"
              value={title}
              onChangeText={(val) => setTitle(val)}
              returnKeyType="next"
            />
            <TextAreaComponent
              placeholder="Enter goal description"
              value={title}
              onChangeText={(val) => setTitle(val)}
              returnKeyType="next"
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
              <BottomDatePicker
                isVisible={showDatePicker}
                onClose={closeModal}
                onDateSelected={handleDateSelected}
              />
              <InputButton onPress={openModal}>
                {date ? (
                  <Text
                    style={[
                      globalStyles.textSix,
                      { color: theme.colors.black },
                    ]}
                  >
                    {date}
                  </Text>
                ) : (
                  <Text
                    style={[
                      globalStyles.textSix,
                      { color: theme.colors.placeholder },
                    ]}
                  >
                    Start date
                  </Text>
                )}
              </InputButton>
            </View>
            <View style={styles.picker}>
              <TimeSelectorModal
                isVisible={showTimePicker}
                onTimeSelected={handleTimeSelected}
                onCancel={hideTimePicker}
              />
              <InputButton onPress={showTheTimePicker}>
                {time ? (
                  <Text
                    style={[
                      globalStyles.textSix,
                      { color: theme.colors.black },
                    ]}
                  >
                    {time.toLocaleTimeString()}
                  </Text>
                ) : (
                  <Text
                    style={[
                      globalStyles.textSix,
                      { color: theme.colors.placeholder },
                    ]}
                  >
                    Start time
                  </Text>
                )}
              </InputButton>
            </View>
          </View>

          {/* End date */}
          <Text
            style={[
              globalStyles.label,
              {
                color: theme.colors.textLight,
                marginHorizontal: 20,
                marginTop: 20,
              },
            ]}
          >
            To:
          </Text>

          <View style={styles.pickers}>
            <View style={styles.picker}>
              <BottomDatePicker
                isVisible={showEndDatePicker}
                onClose={closeEndDateModal}
                onDateSelected={handleEndDateSelected}
              />
              <InputButton onPress={openEndDateModal}>
                {endDate ? (
                  <Text
                    style={[
                      globalStyles.textSix,
                      { color: theme.colors.black },
                    ]}
                  >
                    {endDate}
                  </Text>
                ) : (
                  <Text
                    style={[
                      globalStyles.textSix,
                      { color: theme.colors.placeholder },
                    ]}
                  >
                    End date
                  </Text>
                )}
              </InputButton>
            </View>
            <View style={styles.picker}>
              <TimeSelectorModal
                isVisible={showEndTimePicker}
                onTimeSelected={handleEndTimeSelected}
                onCancel={hideEndTimePicker}
              />
              <InputButton onPress={showTheEndTimePicker}>
                {endTime ? (
                  <Text
                    style={[
                      globalStyles.textSix,
                      { color: theme.colors.black },
                    ]}
                  >
                    {endTime.toLocaleTimeString()}
                  </Text>
                ) : (
                  <Text
                    style={[
                      globalStyles.textSix,
                      { color: theme.colors.placeholder },
                    ]}
                  >
                    End time
                  </Text>
                )}
              </InputButton>
            </View>
          </View>

          {/* Task creation */}
          <View style={styles.tasks}>
            <InputComponent
              label={"Add Tasks"}
              placeholder="Enter a task..."
              value={taskText}
              onChangeText={setTaskText}
            />
            <TextButton onPress={addTask}>
              {tasks.length > 0 ? "Add a New Task" : "Add Task"}
            </TextButton>
            <FlatList
              data={tasks}
              keyExtractor={(task) => task.id}
              renderItem={({ item }) => (
                <View style={styles.taskItem}>
                  {editingTaskId === item?.id ? (
                    <TextInput
                      style={[
                        globalStyles.textarea,
                        {
                          color: theme.colors.text,
                          backgroundColor: theme.colors.inputBackground,
                          borderWidth: 0.2,
                          borderRadius: 4,
                          borderColor: theme.colors.lightCardBackground,
                          minHeight: 40,
                          marginRight: 4,
                          width: customWidth - 132,
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
                        {
                          backgroundColor: theme.colors.inputBackground,
                          marginRight: 4,
                          width: customWidth - 132,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          globalStyles.textSix,
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
                      { backgroundColor: theme.colors.cardBackground },
                    ]}
                  >
                    {editingTaskId === item?.id ? (
                      <SvgXml
                        xml={save}
                        width="16"
                        color={theme.colors.primary}
                        height="16"
                      />
                    ) : (
                      <SvgXml
                        xml={edit}
                        width="16"
                        color={theme.colors.primary}
                        height="16"
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.deleteButton,
                      { backgroundColor: theme.colors.red },
                    ]}
                    onPress={() => deleteTask(item?.id)}
                  >
                    <SvgXml xml={trash} width="18" color="white" height="18" />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <PrimaryButton onPress={() => console.log("object :>> ")}>
            Create Task
          </PrimaryButton>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    overflow: "scroll",
  },
  form: {
    width: customWidth - 40,
    marginHorizontal: 20,
    gap: 12,
  },
  pickers: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
    gap: 12,
  },
  taskItem: {
    flexDirection: "row",
    // alignItems: "center",
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
