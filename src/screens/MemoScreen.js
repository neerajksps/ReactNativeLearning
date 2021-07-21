import React, { useEffect, memo, useContext } from 'react';
import { View, Text } from 'react-native';
import PersonContext from './PersonContext';

const checkIfEqual = (prevProps,nextProps) => {
    console.log('prev props gettingg---', prevProps);
    console.log('nextpops gettingg-----', nextProps);
    return nextProps.name != 'gagan'   
}

const MemoScreen = memo((props) => {
    const value = useContext(PersonContext);
    console.log('valuecoming====', value)
    console.log('again executed')
    return (
        <View style={{ flex: 1, padding: 100 }}>
            <Text onPress={() => value.clearData()}>
                dsf {value.personData?.name}
            </Text>
        </View>
    )
},checkIfEqual)

export default MemoScreen;