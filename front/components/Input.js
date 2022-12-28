import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, onChangeText, value }) => {
  return <View style={styles.container}>
    <TextInput style={styles.textInput} onChangeText={onChangeText} value={value} placeholder={placeholder} />
  </View>
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: 1,
    borderColor: '#3FC5FF',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 16,
    textAlign: 'center',
    fontSize: 20,
  }
});