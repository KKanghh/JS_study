/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import Greetings from './components/Greetings';

function App() {
  return (
    <SafeAreaView>
      <Greetings />
    </SafeAreaView>
  );
}

Greetings.defaultProps = {
  name: 'React Native',
};

export default App;
