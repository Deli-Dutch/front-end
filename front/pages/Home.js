import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Home = ({navigation}) => {
  return <View style={styles.container}>
    <Image style={styles.image} source={require('../assets/logo.png')} />
    <Text style={styles.title}>DeliDutch</Text>
    <TouchableOpacity style={styles.startButton} onPress={()=>navigation.navigate('SelectDorm')}>
      <Text style={styles.startButtonText}>시작하기</Text>
    </TouchableOpacity>
  </View>
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontWeight: '900',
    fontSize: 20,
  },
  image: {
    width: Dimensions.get('window').width * 0.5,
    resizeMode: 'contain',
  },
  startButton: {
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 40,
  },
  startButtonText: {
    color: '#fff'
  }
})