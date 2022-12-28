import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDorm from './pages/SelectDorm';
import SelectType from './pages/SelectType';
import WriteSoloBoard from './pages/WriteSoloBoard';
import WriteTogetherBoard from './pages/WriteTogetherBoard';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectDorm">
        <Stack.Screen options={{headerShown: false}} name="SelectDorm" component={SelectDorm} />
        <Stack.Screen options={{headerShown: false}} name="SelectType" component={SelectType} />
        <Stack.Screen options={{headerShown: false}} name="WriteSoloBoard" component={WriteSoloBoard} />
        <Stack.Screen options={{headerShown: false}} name="WriteTogetherBoard" component={WriteTogetherBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;