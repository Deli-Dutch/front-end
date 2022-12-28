import React from 'react';
import { View, StyleSheet } from 'react-native';
import SelectWrapper from '../components/SelectWrapper';
import ImageButton from '../components/ImageButton';

const SelectDorm = () => {
  return (<SelectWrapper title='기숙사를 선택해주세요'>
    <ImageButton imgSrc={require('../assets/dorm1.png')} onPress={()=>alert('주문 유형 선택 페이지로!')}>제 1기숙사</ImageButton>
    <View style={styles.divider}></View> 
    <ImageButton imgSrc={require('../assets/dorm2.png')} onPress={()=>alert('주문 유형 선택 페이지로!')}>제 2기숙사</ImageButton>
  </SelectWrapper>);
}

export default SelectDorm;

const styles = StyleSheet.create({
  divider: {
    height: 250,
    width: 1,
    backgroundColor: 'black',
  },
})