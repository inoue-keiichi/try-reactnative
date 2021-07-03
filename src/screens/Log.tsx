import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LogList from './LogList';
import LogEdition from './LogEdition';
import LogCustomization from './LogCustomization';

const Stack = createStackNavigator();

function Log({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogList"
        component={LogList}
        options={{
          title: 'Log List',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
        }} />
      <Stack.Screen
        name="LogEdition"
        component={LogEdition}
        options={{
          title: 'Log Edition',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
        }} />
      <Stack.Screen
        name="LogCustomization"
        component={LogCustomization}
        options={{
          title: 'Log Customization',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
        }} />
    </Stack.Navigator>
  );
}

export default Log;