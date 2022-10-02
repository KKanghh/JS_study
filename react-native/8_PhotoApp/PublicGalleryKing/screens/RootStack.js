import React from 'react';
import {createNativeStackNavigatior} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigatior();

function RootStack() {
  return <Stack.Navigator>{'Hi'}</Stack.Navigator>;
}

export default RootStack;
