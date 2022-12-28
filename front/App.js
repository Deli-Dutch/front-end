import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDorm from './pages/SelectDorm';
import SelectType from './pages/SelectType';
import WriteSoloBoard from './pages/WriteSoloBoard';
import WriteTogetherBoard from './pages/WriteTogetherBoard';


// import { View,Text,TouchableOpacity } from 'react-native';
import PersonalSearch from './pages/PersonalSearch';
import TogetherSearch from './pages/TogetherSearch';
import OpenLink from './pages/OpenLink';
import MenuList from './pages/MenuList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectDorm">
        <Stack.Screen options={{headerShown: false}} name="SelectDorm" component={SelectDorm} />
        <Stack.Screen options={{headerShown: false}} name="SelectType" component={SelectType} />
        <Stack.Screen options={{headerShown: false}} name="WriteSoloBoard" component={WriteSoloBoard} />
        <Stack.Screen options={{headerShown: false}} name="WriteTogetherBoard" component={WriteTogetherBoard} />
        <Stack.Screen options={{headerShown: false}} name="PersonalSearch" component={PersonalSearch} />
        <Stack.Screen options={{headerShown: false}} name="TogetherSearch" component={TogetherSearch} />
        <Stack.Screen options={{headerShown: false}} name="OpenLink" component={OpenLink} />
        <Stack.Screen options={{headerShown: false}} name="MenuList" component={MenuList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;