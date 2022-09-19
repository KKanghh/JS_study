import React, {useEffect} from 'react';
import {View, Button} from 'react-native';

function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);
  return (
    <View>
      <Button
        title="Detail1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail2 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="Detail3 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
      <Button
        title="Headerless 열기"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
}

export default HomeScreen;
