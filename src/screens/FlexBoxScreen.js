import React from 'react';
import { View, Text } from 'react-native';

const FlexBoxScreen = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>FlexBoxScreen.js</Text>
        </View>
    );
}

export default FlexBoxScreen;