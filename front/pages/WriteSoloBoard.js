import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import WriteBoardWrapper from '../components/WriteBoardWrapper';
import Input from '../components/Input';
import TimePickerModal from '../components/TimePickerModal';

const WriteSoloBoard = ({ navigation }) => {
  const [pickedTime, setPickedTime] = useState()
  const [timePicker, setTimePicker] = useState(false);

  const show = () => setTimePicker(true);
  const hide = () => setTimePicker(false);

  const onConfirm = (data) => {
    const time = data.getHours() + ' : ' + data.getMinutes();
    setPickedTime(time);
    hide();
  };

  return <WriteBoardWrapper navigation={navigation}>
      <View>
          <Input placeholder='제목' />
          <Input placeholder='지점명' />
          <Input placeholder='픽업 장소' />
      <View>
        <TouchableOpacity style={styles.itemContainer} onPress={show}>
        <Text style={styles.itemText}>{pickedTime||'주문 예정 시간'}</Text>
      </TouchableOpacity>
      <TimePickerModal open={timePicker} onConfirm={onConfirm} onCancel={hide} />
    </View>
      </View>
      <TouchableOpacity style={styles.uploadButton}><Text style={styles.uploadText}>업로드 하기</Text></TouchableOpacity>
    </WriteBoardWrapper>
}

export default WriteSoloBoard;

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: '#005BAA',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  itemText: {
    width: Dimensions.get('window').width * 0.8125,
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  uploadButton: {
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#005BAA',
  },
  uploadText: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  }
});