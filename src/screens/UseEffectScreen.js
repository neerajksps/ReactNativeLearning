import React,  { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const UseEffectScreen = () => {
    
    const [name,setName] = useState('');
    useEffect(() => {
        console.log('will execute on mount only')
        return () => {
            alert('on unmount');
        }
    }, []);

    useEffect(() => {
        console.log('name gettingg=====', name);
    },[name])


    
    return (
        <View style={{ flex: 1, paddingTop: 100 }}>
            <TextInput
                onChangeText={text => setName(text)}
                style={{ height: 50, width: 200, borderWidth: 1 }}
            />
        </View>
    )
}

export default UseEffectScreen;
