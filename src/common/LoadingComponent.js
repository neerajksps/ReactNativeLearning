import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { appData, colors } from '../utilities/constants';

const LoadingComponent = () => {
    return (
        <View style={styles.wholeViewStyle}>
            <View  style={styles.blacksheetOverlayStyle} />
            <ActivityIndicator
                color={colors.blue1}
                size={'large'}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    wholeViewStyle: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    blacksheetOverlayStyle: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.5,
        backgroundColor: colors.black1    
    }
})

export { LoadingComponent };