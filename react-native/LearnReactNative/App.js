/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Text, View} from 'react-native';
import Box from './components/Box';
import Greetings from './components/Greetings';

function App() {
  const name = 'JSX';

  return (
    <View>
      <Box rounded={true} color="#123241" size="small" />
    </View>
  );
}

export default App;
