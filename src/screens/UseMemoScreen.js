import React, { useMemo, useState } from 'react';
import {View, Text, TextInput} from 'react-native';

const UseMemoScreen = () => {
const [name,setName] = useState('');
  
let updatedName = useMemo(() => {
    return name + ' kalra'
}, [name]);
  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <TextInput
        onChangeText={(text) => setName(text)}
        style={{height: 50, width: 200, borderWidth: 1}}
      />
      <Text>{updatedName}</Text>
    </View>
  );
};

export default UseMemoScreen;