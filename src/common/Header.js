import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../utilities/constants';

const Header = (props) => {
    const styles = StyleSheet.create({
        wholeViewStyle: {
            backgroundColor: colors.orange1,
            height: 44,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            flexDirection: 'row'
        },
        headerTextStyle: {
            fontSize: 18,
            color: colors.white1,
    
        },

        containerViewStyle: {
            height: 44,
            width: 44,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.wholeViewStyle}>
            {
                (props.leftCornerIcon)?
                <TouchableOpacity 
                    onPress={props.onLeftCornerButtonPress}
                    style={styles.containerViewStyle}
                >
                    <Image
                        source={props.leftCornerIcon}
                    />
                </TouchableOpacity>
                : <View style={styles.containerViewStyle}/>
            }
            <Text style={styles.headerTextStyle}>{props.headerText}</Text>
            <View style={styles.containerViewStyle} />
        </View>
    )
}

export { Header };