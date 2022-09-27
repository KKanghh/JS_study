import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';

function FeedsScreen() {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden != isBottom) {
      setHidden(isBottom);
    }
  };
  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default FeedsScreen;
