import React, {useRef} from 'react';
import {View, Button} from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import ImpartiveHandlerSubComponent from './ImpartiveHandlerSubComponent';



const App = () => {
    const getRef = useRef();
    
    const handleFocus = () => {
    //    alert('df')
    //    console.log('input ref gettingg===',inputRef)
        getRef.current.neeraj();
    }
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImpartiveHandlerSubComponent
                ref={getRef}
            />

        <Button 
            title={'GetFocus'}
            onPress={handleFocus}
            style={{ flex: 0.5 }}
        >
          
        </Button>
        </View>
    )
}

export default App;