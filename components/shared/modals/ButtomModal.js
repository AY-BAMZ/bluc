import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BottomDatePicker = ({ isVisible, onClose, onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(selectedDate); // Pass the selected date back to the parent component
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default BottomDatePicker;
