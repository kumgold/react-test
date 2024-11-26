import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyle.container}>

        </View>
    );
}

const headerStyle = StyleSheet.create({
   container: {
       flex: 0.1, justifyContent: "center",alignItems: "center", backgroundColor: '#EE9972'
   },
    headerText: {
        fontSize: 25, color: 'black', textAlignVertical: 'center', textAlign: 'center'
    }
});