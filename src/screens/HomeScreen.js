import React from 'react';
import { View,  Button, } from 'react-native';

const HomeScreen = (props) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                onPress={() => props.navigation.navigate('contextApi')}
                title={'Use context api screen'}
            >
                
            </Button>

            <Button
                onPress={() => props.navigation.navigate('useCallback')}
                title={'Use callback screen'}
            >
                
            </Button>
            
            <Button
                onPress={() => props.navigation.navigate('useMemo')}
                title={'Use memo screen'}
            >
                
            </Button>
            <Button
                onPress={() => props.navigation.navigate('useEffect')}
                title={'Use Effect screen'}
            >
                
            </Button>

            <Button
                onPress={() => props.navigation.navigate('useRef')}
                title={'useRef screen'}
            >
                
            </Button>
            

            <Button
                onPress={() => props.navigation.navigate('useReducer')}
                title={'Use Reducer screen'}
            >
                
            </Button>

            <Button
                onPress={() => props.navigation.navigate('useImperative')}
                title={'Use Imperative screen'}
            >
                
            </Button>
        </View>
        
    )

}

export default HomeScreen;  