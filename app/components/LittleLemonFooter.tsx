import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.15 }}>
            <Text style={{ color: 'black', textAlignVertical: 'center', textAlign: 'center' }}>
                Little Lemon
            </Text>
        </View>
    );
}