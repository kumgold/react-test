import React, {useEffect, useState} from 'react';

import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from "react-native";
import {Searchbar} from "react-native-paper";
import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabaseSync('little_lemon');

const green = '#495E57';
const yellow = '#F4CE14';

// const API_URL = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json';
const API_URL = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json';

// @ts-ignore
const Item = ({name, price}) => {
    return (
        <View style={style.itemContainer}>
            <Text style={style.itemText}>{name}</Text>
            <Text style={style.itemText}>{price}</Text>
        </View>
    )
};

export default function MenuScreen() {
    const [isLoading, setLoading] = useState(true);
    const [searchBarText, setSearchBarText] = useState('');
    const [data, setData] = React.useState([]);

    const getMenu = async () => {
        try {
            const entity = await getMenuItems();

            if (entity.length == 0) {
                const response = await fetch(API_URL);

                const json = await response.json();

                const values = json.menu.map((item) => `('${item.id}', '${item.title}', '${item.price}')`).join(',');
                await database.execAsync(
                    `insert into menus (id, title, price) values ${values}`
                )

                console.log('json menu', json.menu);

                setData(json.menu);
            }

        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const getMenuItems = async () => {
        database.execSync(
            'create table if not exists menus (id integer primary key not null, title text, price text)'
        )

        const menus = database.getAllSync('select * from menus')

        console.log('menus', menus);
        setData(menus);
        return menus
    }

    const handleSearchChange = async (text) => {
        setSearchBarText(text);

        const menus = database.getAllSync('select * from menus where title like ?', ['%' + text + '%']);
        setData(menus);
    };

    useEffect(() => {
        getMenu();
    }, []);

    // @ts-ignore
    const renderItem = ({item}) => <Item name={item.title} price={item.price} />;

    return (
        <View style={style.container}>
            {
                isLoading ? (<ActivityIndicator/>) : (
                    <View>
                        <Searchbar
                            placeholder="Search"
                            placeholderTextColor="white"
                            onChangeText={handleSearchChange}
                            value={searchBarText}
                            style={style.searchBar}
                            iconColor="white"
                            inputStyle={{ color: 'white' }}
                            elevation={0}
                        />
                        <FlatList
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                        />
                    </View>
                )
            }
        </View>
    )
};

const style = StyleSheet.create({
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
    searchBar: {
        backgroundColor: '#495E57',
        shadowRadius: 0,
        shadowOpacity: 0,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        margin: 10
    },
})