/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {SafeAreaView, Button} from 'react-native';
import Box from './components/Box';
import Greetings from './components/Greetings';

function App() {
  const [visible, setVisible] = useState(true);

  const onPress = () => {
    setVisible(state => !state);
  };

  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {!visible && <Box rounded={true} color="blue" size="large" />}
    </SafeAreaView>
  );
}

export default App;
