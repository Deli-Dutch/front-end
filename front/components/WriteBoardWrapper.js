import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WriteBoardWrapper = ({ navigation, children }) => {
  return <View style={styles.layout}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image style={styles.backButtonIcon} source={require('../assets/back_button.png')}></Image>
    </TouchableOpacity>
    <View style={styles.container}>
      <View>
        {children}
      </View>
    </View>
  </View>
};

export default WriteBoardWrapper;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 30,
    top: 30,
  },
  backButtonIcon: {
    width: 30,
    height: 30,
  },
})