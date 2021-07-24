import React, { Component } from 'react';
import { View } from 'react-native';
import {  Provider  } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from './store';
import NavigationScreen from './navigation/NavigationScreen';

class App extends Component {
   render() {
        const { store, persistor } = configureStore();
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <View style={{ flex: 1}}>
                        <NavigationScreen />
                    </View>
                </PersistGate>
            </Provider>
        )
    }
}

export default App;