import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flatListItem: {
    flexDirection:"row",
    width: '100%',
    height: 180,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  info: {
    color: '#aaaaaa',
  },
  textInput: {
    fontSize: 18,
    marginBottom: 20,
  },
  textInputStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: '#3060B0',
    backgroundColor: '#FFFFFF',
  },
});
export default styles;
