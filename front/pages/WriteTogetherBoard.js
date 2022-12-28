import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import WriteBoardWrapper from '../components/WriteBoardWrapper';
import Input from '../components/Input';

const WriteSoloBoard = ({navigation}) => {
  return <WriteBoardWrapper navigation={navigation}>
      <View>
          <Input placeholder='메뉴명' />
          <Input placeholder='픽업 장소' />
          <Input placeholder='주문 예정 시간' />
          <Input placeholder='정원' />
          <Input placeholder='한 줄 어필' />
      </View>
      <TouchableOpacity style={styles.uploadButton}><Text style={styles.uploadText}>업로드하기</Text></TouchableOpacity>
    </WriteBoardWrapper>
}

export default WriteSoloBoard;

const styles = StyleSheet.create({
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
})