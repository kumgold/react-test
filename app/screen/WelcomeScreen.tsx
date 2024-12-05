import * as React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                color: 'black',
                textAlignVertical: 'center',
                textAlign: 'center',
                fontWeight: 'bold',
                marginVertical: 50,
                fontSize: 20
            }}>
                Welcome to Little Lemon
            </Text>
            <Text style={{
                marginHorizontal: 20,
                fontSize: 15
            }}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
        </View>
    );
}