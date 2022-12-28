import { View, Text } from "react-native"
import Hyperlink from "react-native-hyperlink"
const OpenLink = ({navigation, route}) =>{
  console.log(route.params.link)
  return(
    <View>
    <Hyperlink>
      <Text>{route.params.link}</Text>
    </Hyperlink>
    </View>
  )
}
export default OpenLink;