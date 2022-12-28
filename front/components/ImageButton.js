import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ImageButton = ({imgSrc, onPress, children}) => {
  return <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={imgSrc} />
      <Text>{children}</Text>
    </TouchableOpacity>
}

export default ImageButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 40,
    marginBottom: 15,
  },
});