import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SelectWrapper = ({ title, children }) => {
  return <View style={styles.layout}>
    <View style={styles.titleBox}><Text style={styles.title}>{title}</Text></View>
    <View style={styles.contentBox}>{children}</View>
  </View>
};

export default SelectWrapper;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  titleBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
  },
})