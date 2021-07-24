import React, { useState, useLayoutEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const UseLayoutEffectScreen  = () => {
    const [value, setValue] = useState(false);
    const [name, setName] = useState('neeraj')

    useLayoutEffect(() => {
        console.log('executed');
        if(value === false) {
            setValue(true);
        }
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => setName('rahul')}

            >
                <Text>change name</Text>
            </TouchableOpacity>
            <Text >{value? 'true': 'false'}</Text>
        </View>
    )
}

export default UseLayoutEffectScreen;