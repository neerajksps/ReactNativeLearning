import React, { Component } from 'react';
import { 
        TextInput, 
        View, 
        Text, 
        TouchableOpacity, 
        InputAccessoryView, 
        Platform, 
        Keyboard 
    } from 'react-native';
import { colors } from '../utilities/constants';

class FormInputField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            onChangeText,
            pholder,
            secureTextEntry,
            placeholderTextColor,
            refer,
            onSubmitEditing,
            returnKeyType,
            value,
            keyboardType,
            autoCapitalize,
            customFontSize,
            editable,
            pointerEvents,
            inputAccessoryViewID,
            textAlignVertical,
            onFocusProp,
            onBlur,
            multiline,
            textColor
        } = this.props;

    const styles = {
        input: {
            fontSize: customFontSize || 18,
            flex: 1,
            color: textColor || colors.black1,
            padding: 0,
            margin: 0,
            borderWidth: 0,
            textAlignVertical:  textAlignVertical || null
        },

        inputAccesoryTextStyle: {
            fontSize: 18,
            color: colors.gray1,
            fontWeight: 'bold',
            alignSelf: 'flex-end',
            padding: 5
        },

        inputAccesoryViewStyle: {
            backgroundColor: colors.gray1
        }

    };
 
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                editable={editable}
                ref={refer}
                multiline={multiline || false}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                secureTextEntry={secureTextEntry}
                placeholder={pholder}
                spellCheck={false}
                pointerEvents={(pointerEvents)? 'none': 'auto'}
                selectionColor={'red'}
                style={styles.input}
                inputAccessoryViewID={inputAccessoryViewID}
                placeholderTextColor={placeholderTextColor || '#969696'}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize|| 'none'}
                onFocus={onFocusProp}
                onBlur={onBlur}
                blurOnSubmit={false}
            />
            {
                ((Platform.OS === 'ios') ) ?
                <InputAccessoryView nativeID={inputAccessoryViewID}>
                
                    <TouchableOpacity
                        style={styles.inputAccesoryViewStyle}
                        onPress={() => Keyboard.dismiss()}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={styles.inputAccesoryTextStyle}
                        >
                            Done
                        </Text>
                    </TouchableOpacity>
                </InputAccessoryView>:

                <View />
            }
        </View>
    );
}
}


export { FormInputField };
