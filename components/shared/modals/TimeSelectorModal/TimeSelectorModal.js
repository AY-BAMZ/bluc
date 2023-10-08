import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TimeSelectorModal = ({ isVisible, onTimeSelected, onCancel }) => {
    const handleTimeConfirm = (time) => {
        onTimeSelected(time);
      };

  return (
    <>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={onCancel}
      />
    </>
  );
};



export default TimeSelectorModal;
