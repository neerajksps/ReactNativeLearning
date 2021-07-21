import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const useRefScreen = () => {
    const value = useRef(null);
    return (
        <View style={{ flex:1, padding: 200 }}>
            <TouchableOpacity
                style={{ height: 50, backgroundColor: 'red', width: 200, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}
                onPress={() => value.current = 45}
            >
                <Text>
                    Save value
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ height: 50, width: 200, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}
                onPress={() => alert(value.current)}
            >
                <Text>
                    Get value
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default useRefScreen;