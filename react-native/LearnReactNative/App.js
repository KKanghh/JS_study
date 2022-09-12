/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Text, View} from 'react-native';
import Greetings from './components/Greetings';

function App() {
  const name = 'JSX';

  return (
    <>
      <View>
        <Greetings name={name} />
      </View>
      <Text>Extra Text!</Text>
    </>
  );
}

Greetings.defaultProps = {
  name: 'React Native',
};

export default App;
