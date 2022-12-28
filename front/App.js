import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDorm from './pages/SelectDorm';
import SelectType from './pages/SelectType';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectDorm">
        <Stack.Screen options={{headerShown: false}} name="SelectDorm" component={SelectDorm} />
        <Stack.Screen options={{headerShown: false}} name="SelectType" component={SelectType} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
