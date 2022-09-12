import React from 'react';
import {View, Text} from 'react-native';

function Greetings(props) {
  return (
    <View>
      <Text>안녕하세요 {props.name}</Text>
    </View>
  );
}

export default Greetings;
