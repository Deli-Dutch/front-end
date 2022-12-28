import { Alert, Text} from "react-native";
import Hyperlink from "react-native-hyperlink";
const AlertDialog = item => {
  Alert.alert(
    'Join',
    '이 그룹에 참여하시겠습니까?',
    [
      {text: '취소', onPress: () => {}, style: 'cancel'},
      {
        text: '확인',
        onPress: () => {
          Alert.alert(
            '카톡방으로 이동하기',
            item.openKakao,
            [],
          );
        },
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