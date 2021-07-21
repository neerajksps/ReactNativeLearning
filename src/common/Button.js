import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utilities/constants';

const Button = (props) => {
    const styles = StyleSheet.create({
        wholeViewStyle: {
            backgroundColor: colors.orange1,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            borderRadius: 10,
            
        },
        buttonTextStyle: {
            fontSize: 18,
            color: colors.white1
        }
    })

    return (
        <TouchableOpacity 
            style={[styles.wholeViewStyle, props.buttonViewStyle]}
            activeOpacity={0.7}
            onPress={props.onPress}
        >
            <Text style={styles.buttonTextStyle}>{props.children}</Text>
        </TouchableOpacity>
    )
}

export { Button };