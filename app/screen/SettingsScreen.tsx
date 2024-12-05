import * as React from 'react';
import {Text, View, StyleSheet, Alert, Switch} from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

import useUpdate from '../components/useUpdate';

export default function SettingsScreen() {
    const [preferences, setPreferences] = useState({
        pushNotifications: false,
        emailMarketing: false,
        latestNews: false,
    });

    //처음 시작했을 때
    useEffect(() => {
        // Populating preferences from storage using AsyncStorage.multiGet
        (async () => {
            try {
                const values = await AsyncStorage.multiGet(Object.keys(preferences));
                const initialState = values.reduce((acc, curr) => {
                    acc[curr[0]] = JSON.parse(curr[1]);
                    return acc;
                }, {});
                setPreferences(initialState);
            } catch (e) {
                Alert.alert(`An error occurred: ${e.message}`);
            }
        })();
    }, []);

    // Preferences 값이 변경되었을 때
    // This effect only runs when the preferences state updates, excluding initial mount
    useUpdate(() => {
        (async () => {
            const keyValues = Object.entries(preferences).map((entry) => {
                return [entry[0], String(entry[1])];
            });
            try {
                await AsyncStorage.multiSet(keyValues);
            } catch (e) {
                Alert.alert(`An error occurred: ${e.message}`);
            }
        })();
    }, [preferences]);

    // 사용자 input에 따른 Preference 값 저장
    const updateState = (key) => () =>
        setPreferences((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Account Preferences</Text>
            <View style={styles.row}>
                <Text style={styles.text}>Push notifications</Text>
                <Switch
                    value={preferences.pushNotifications}
                    onValueChange={updateState('pushNotifications')}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Marketing emails</Text>
                <Switch
                    value={preferences.emailMarketing}
                    onValueChange={updateState('emailMarketing')}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Latest news</Text>
                <Switch
                    value={preferences.latestNews}
                    onValueChange={updateState('latestNews')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    text: {
        fontSize: 18,
    },
    header: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});