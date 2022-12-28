import React from 'react';
import { View, StyleSheet } from 'react-native';
import SelectWrapper from '../components/SelectWrapper';
import ImageButton from '../components/ImageButton';

const SelectType = () => {
  return (<SelectWrapper title='주문 유형을 선택해주세요'>
    <ImageButton imgSrc={require('../assets/together.png')} onPress={()=>alert('다같이 목록 페이지로!')}>다같이</ImageButton>
    <View style={styles.divider}></View> 
    <ImageButton imgSrc={require('../assets/solo.png')} onPress={()=>alert('각자 목록 페이지로!')}>혼자</ImageButton>
  </SelectWrapper>);
}

export default SelectType;

const styles = StyleSheet.create({
  divider: {
    height: 250,
    width: 1,
    backgroundColor: 'black',
  },
})