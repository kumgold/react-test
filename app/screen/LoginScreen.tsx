import React, {useState} from 'react';

import {
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View
} from "react-native";

// @ts-ignore
const LoginScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <KeyboardAvoidingView
            style={[
                styles.container,
                colorScheme === 'light'
                    ? { backgroundColor: '#EE9972' }
                    : { backgroundColor: '#497747' },
            ]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../img/background.png')}
                resizeMode={'contain'}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                    <Image
                        style={styles.logo}
                        source={require('../img/logo.png')}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.regularText}>Login to continue</Text>
                    <View>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={onChangeEmail}
                            placeholder={'email'}
                            keyboardType={'email-address'}
                            clearButtonMode={'always'}
                        />
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={onChangePassword}
                            placeholder={'password'}
                            secureTextEntry={true}
                            clearButtonMode={'always'}
                        />
                        <Pressable style={styles.button}
                                   onPress={() => navigation.navigate('Tab')}>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center'
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: 'white'
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EDEFEE',
        borderColor: '#EDEFEE',
        borderWidth: 2,
        borderRadius: 12
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 24,
    },
    logo: {
        height: 100,
        width: 300,
        alignSelf: 'center',
    }
});

export default LoginScreen;