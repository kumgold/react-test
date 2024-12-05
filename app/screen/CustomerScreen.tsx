
import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {useEffect, useState} from "react";
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabaseSync('little_lemon');

const CustomerScreen = () => {
    const [userName, onChangeUserName] = useState('');
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        db.execSync(
            'create table if not exists customers (id integer primary key not null, uid text, name text)'
        )

        const customers = db.getAllSync('select * from customers')
        console.log('customers', customers);
        customers.map((item) => ({
            uid: item.uid,
            name: item.name
        }));
        setCustomers(customers);

    }, []);

    return <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView keyboardDismissMode={'on-drag'}>
            <TextInput
                style={styles.input}
                value={userName}
                onChangeText={onChangeUserName}
                placeholder={'email'}
                keyboardType={'email-address'}
                clearButtonMode={'always'}
            />
            <TouchableOpacity
                disabled={!userName}
                onPress={() => {
                    const newValue = {
                        uid: Date.now().toString(),
                        name: userName,
                    };
                    setCustomers([...customers, newValue]);

                    db.runSync(
                        'insert into customers (uid, name) values(?, ?)',
                        [newValue.uid, newValue.name]
                    )
                    const c = db.getAllSync('select * from customers')
                    c.map((item) => ({
                        uid: item.uid,
                        name: item.name
                    }));
                    console.log('customers', 'result = ' + c);

                    onChangeUserName('');
                }}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}> Save Customer </Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.customerName}>Customers: </Text>
                {customers.map((customer) => (
                    <View key={customer.uid}>
                        <Text style={styles.customerName}>{customer.name}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    buttonStyle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'green',
        padding: 5,
        marginTop: 32,
        minWidth: 250,
        marginBottom: 16,
    },
    buttonTextStyle: {
        padding: 5,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    customerName: {
        fontSize: 18,
    },
});

export  default CustomerScreen;