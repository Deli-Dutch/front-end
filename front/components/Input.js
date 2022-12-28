import React from 'react';
import { Dimensions, View, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return <View style={styles.container}>
    <TextInput style={styles.textInput} {...props} />
  </View>
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: 1,
    borderColor: '#005BAA',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  textInput: {
    width: Dimensions.get('window').width*0.8125,
    flex: 1,
    paddingHorizontal: 16,
    textAlign: 'center',
    fontSize: 20,
  }
});