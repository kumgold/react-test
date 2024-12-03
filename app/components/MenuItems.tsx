import React, {useEffect, useState} from 'react';

import {
    FlatList,
    SectionList,
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
    ActivityIndicator
} from "react-native";

const green = '#495E57';
const yellow = '#F4CE14';

const Separator = () => <View style={menuStyle.separator} />

// @ts-ignore
const Item = ({name, price}) => {
    return (
        <View style={menuStyle.itemContainer}>
            <Text style={menuStyle.itemText}>{name}</Text>
            <Text style={menuStyle.itemText}>{price}</Text>
        </View>
    )
};

export default function MenuItems() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = React.useState([]);
    const getMenu = async () => {
        try {
            const response = await fetch(
                'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
            );

            const json = await response.json();
            setData(json.menu);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    // @ts-ignore
    const renderItem = ({item}) => <Item name={item.title} price={item.price} />;

    return (
     <View style={menuStyle.container}>
         <Text style={menuStyle.infoSection}>Little Lemon Menu</Text>
         {
             isLoading ? (<ActivityIndicator/>) : (
                 <FlatList
                     data={data}
                     keyExtractor={item => item.id}
                     renderItem={renderItem}
                 />
             )
         }
     </View>
    )
};

const menuStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: green
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    innerContainer: {
        padding: 40,
        backgroundColor: green
    },
    headerText: {
        fontSize: 40, flexWrap: 'wrap', color: 'black', textAlign: 'center'
    },
    itemText: {
        fontSize: 24, flexWrap: 'wrap', color: yellow
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    footerText: {
        textAlign: 'center'
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
        fontSize: 32,
    },
    infoSection: {
        fontSize: 28,
        padding: 15,
        marginVertical: 8,
        color: yellow,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: green,
    },
})