import React, {useRef, useImperativeHandle, forwardRef} from 'react';
import {View, Text, TextInput, Button} from 'react-native';


const useImperativeHandlerPage = (props,ref) => {
    console.log('ref gettomgg sub==', props)
    const inputRef = useRef(null);
    
    useImperativeHandle(ref, () => ({
        neeraj: () => {
          inputRef.current.focus();
        }
      }));
      console.log('neertag getin===', ref)
    
    return (
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
                ref={inputRef}
                style={{
                    height: 44,
                    width: 200,
                    borderWidth: 1
                }}
            />

        </View>
    )
}

export default forwardRef(useImperativeHandlerPage);