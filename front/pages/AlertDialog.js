import { Alert, Text} from "react-native";
const AlertDialog = ({navigation, item}) => {
  Alert.alert(
    'Join',
    '이 그룹에 참여하시겠습니까?',
    [
      {text: '취소', onPress: () => {}, style: 'cancel'},
      {
        text: '확인',
        onPress: () => navigation.navigate('OpenLink', {item: item}),
        style: 'destructive',
      },
    ],
    {
      cancelable: true,
      onDismiss: () => {},
    },
  );
};
export default AlertDialog;