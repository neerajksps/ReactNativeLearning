import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import MemoScreen from './MemoScreen';
import PersonContext from './PersonContext';

const ContextApiScreen = () => {
  const [personData, setPersonData] = useState({
    name: 'neeraj',
    age: 24,
  });
  return (
    <PersonContext.Provider
      value={{
        personData,
        clearData: () => {
          setPersonData({});
        },
      }}>
          <MemoScreen />
      </PersonContext.Provider>
  );
};

export default ContextApiScreen;
