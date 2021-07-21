import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { colors } from '../../utilities/constants';

const renderTime = (time) => {
    return moment(time, "YYYYMMDD hh:mm").fromNow();
}

const MessageComponent = (props) => {
    const { message, id, time } = props.item;
    const { currentLoginId } = props;
    return (
        <View style={styles.messageContainerWholeViewStyle}>
                <View style={id!=currentLoginId ? [styles.messageContainerOuterViewStyle, styles.otherUserMessageContainerStyle]: [styles.messageContainerOuterViewStyle, styles.currentUsersMessagesViewStyle]}>
                    <View style={styles.messageContainerViewStyle}>
                        <Text style={styles.messageTextStyle}>{message}</Text>
                        <Text style={{ alignSelf: 'flex-end', fontSize: 12 }}>{renderTime(time)}</Text>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainerWholeViewStyle: {
        padding: 10,
        backgroundColor: colors.white1,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    messageContainerOuterViewStyle: {
        borderRadius: 10
    },

    otherUserMessageContainerStyle: {
        alignSelf: 'flex-start',
        backgroundColor: colors.gray1
    },

    messageContainerViewStyle: {
        padding: 10,  
        maxWidth: 200, 
        borderRadius: 10
    },


    currentUsersMessagesViewStyle: {
        alignSelf: 'flex-end',
        backgroundColor: colors.gray2
    },

    messageTextStyle: {
        fontSize: 15,
        color: colors.black1
    }
})

export { MessageComponent };