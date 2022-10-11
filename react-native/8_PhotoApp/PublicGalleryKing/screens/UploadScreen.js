import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Animated,
  Keyboard,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import IconRightButton from '../components/IconRightButton';
import storage from '@react-native-firebase/storage';
import {useUserContext} from '../contexts/UserContext';
import {v4} from 'uuid';
import {createPost} from '../lib/posts';

function UploadScreen() {
  const route = useRoute();
  const {res} = route.params || {};
  const {width} = useWindowDimensions();
  const animation = useRef(new Animated.Value(width)).current;
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  const {user} = useUserContext();

  const onSubmit = useCallback(async () => {
    console.log(0);
    navigation.pop();
    const asset = res.assets[0];
    console.log(10);
    const extension = asset.fileName.split('.').pop();
    const reference = storage().ref(`/photo/${user.id}/${v4()}.${extension}`);
    console.log(100);
    if (Platform.OS === 'android') {
      console.log('kk');
      await reference.putString(asset.base64, 'base64', {
        contentType: asset.type,
      });
      console.log('kkk');
    } else {
      await reference.putFile(asset.uri);
    }
    console.log(1000);

    const photoURL = await reference.getDownloadURL();
    console.log(1);
    await createPost({description, photoURL, user});
    console.log(2);
  }, [res, description, navigation, user]);

  useEffect(() => {
    const didShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const didHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      didShow.remove();
      didHide.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isKeyboardOpen ? 0 : width,
      useNativeDriver: false,
      duration: 150,
      delay: 100,
    }).start();
  }, [isKeyboardOpen, width, animation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconRightButton onPress={onSubmit} name="send" />,
    });
  }, [navigation, onSubmit]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'height'})}
      style={styles.block}
      keyboardVerticalOffset={Platform.select({ios: 180})}>
      <View style={styles.block}>
        <Animated.Image
          source={{uri: res.assets[0]?.uri}}
          style={[styles.image, {height: animation}]}
          resizeMode="cover"
        />
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="이 사진에 대한 설명을 입력하세요..."
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  image: {width: '100%'},
  input: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    fontSize: 16,
  },
});

export default UploadScreen;
