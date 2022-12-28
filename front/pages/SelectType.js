import React from 'react';
import { View, StyleSheet } from 'react-native';
import SelectWrapper from '../components/SelectWrapper';
import ImageButton from '../components/ImageButton';

const SelectType = ({ navigation }) => {
  return (<SelectWrapper title='주문 유형을 선택해주세요'>
    <ImageButton imgSrc={require('../assets/together.png')} onPress={()=>navigation.navigate('TogetherSearch')}>다같이</ImageButton>
    <View style={styles.divider}></View> 
    <ImageButton imgSrc={require('../assets/solo.png')} onPress={()=>navigation.navigate('PersonalSearch')}>혼자</ImageButton>
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