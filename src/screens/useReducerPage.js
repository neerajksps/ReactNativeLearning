import React, {useEffect, useReducer} from 'react';
import {View, Text, TextInput} from 'react-native';

const ReducerScreen = () => {
    const initialState = { firstName: '', lastName: '' }
    function reducer(state, action) {
 
        switch (action.type) {
         
            case 'ChangefirstName':
            return { ...state, firstName: action.name }
            case 'ChangelastName':
            return { ...state, lastName: action.name }
            case 'reset':
            return {
                ...initialState
            }
            default:
            return { ...state  }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const { firstName, lastName } = state;
    return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text>First name</Text>
        <TextInput
          style={{height: 44, width: 200, borderWidth: 1, marginBottom: 20}}
          onChangeText={(text) => dispatch({ type: 'ChangefirstName', name: text })}
            value={firstName}
        />
      </View>
      <View>
        <Text>Last name</Text>
        <TextInput
          style={{height: 44, width: 200, borderWidth: 1, marginBottom: 20}}
          onChangeText={(text) => dispatch({ type: 'ChangelastName', name: text })}
          value={lastName}
        />
      </View>
    </View>
  );
};

export default ReducerScreen;
