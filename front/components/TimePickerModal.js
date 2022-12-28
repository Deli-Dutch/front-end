import React from 'react';
import DateTimePicker from "react-native-modal-datetime-picker";


const TimePickerModal = ({open, onConfirm, onCancel}) => {
  return <DateTimePicker
    isVisible={open}
    mode="time"
    onConfirm={onConfirm}
    onCancel={onCancel}
    theme='auto'
  />
}

export default TimePickerModal;