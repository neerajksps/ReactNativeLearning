import React, { createRef, useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class HomeClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.inputValue= createRef();
        this.textInputRef = createRef();
    }

    render() {
        console.log('this.textinputred gerro====', this.textInputRef)
        return (
            <View style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TextInput
                    ref={this.textInputRef}
                    style={{ 
                        borderWidth: 1,
                        height: 44,
                        width: 200                       
                    }}
                    onChangeText={text => this.inputValue.current = text}
                />

                <Button
                    title={'Get input value'}
                    onPress={() => {
                        console.log('this.current focuss====', this.textInputRef)
                        this.textInputRef.current.focus()}}
                />
                <Button
                    title={'change data value'}
                    onPress={() => this.setState({ data: '456' })}
                />
            </View>
        )
    }
}

export default HomeClass;