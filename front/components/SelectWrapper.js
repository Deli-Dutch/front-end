import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SelectWrapper = ({ title, children }) => {
  return <View style={styles.layout}>
    <View style={styles.titleBox}><Text style={styles.title}>{title}</Text></View>
    <View style={styles.container}>
      <View style={styles.contentBox}>{children}</View>
      {/* 공간 확보용 빈view */}
      <View style={styles.block}></View>
    </View>
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
  container: {
    flex: 4,
  },
  contentBox: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
  },
  block: {
    flex: 1,
  },
})