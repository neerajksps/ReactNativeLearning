import React, { useCallback, useState } from 'react';
import {View, Text, TextInput} from 'react-native';

const UseCallbackScreen = () => {
const [name,setName] = useState('');
  
let updatedName = useCallback(() => {
    alert(name + ' kalra');
}, [name]);
  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <TextInput
        onChangeText={(text) => setName(text)}
        style={{height: 50, width: 200, borderWidth: 1}}
      />
      <Text onPress={updatedName}>Press me</Text>
    </View>
  );
};

export default UseCallbackScreen;