import React, {useState} from 'react';

import {FlatList, SectionList, StyleSheet, Text, View, Pressable, ImageBackground} from "react-native";

const green = '#495E57';
const yellow = '#F4CE14';

const menuItems = [
    { name: 'Name 1', price: '$1.00', id: '1' },
    { name: 'Name 2', price: '$2.00', id: '2' },
    { name: 'Name 3', price: '$5.50', id: '3' },
    { name: 'Name 4', price: '$3.00', id: '4' },
    { name: 'Name 5', price: '$2.00', id: '5' },
    { name: 'Name 6', price: '$51.00', id: '6' },
    { name: 'Name 7', price: '$52.00', id: '7' },
    { name: 'Name 8', price: '$53.00', id: '8' },
    { name: 'Name 9', price: '$5.00', id: '9' },
    { name: 'Name 10', price: '$5.00', id: '10' },
    { name: 'Name 11', price: '$5.00', id: '11' },
    { name: 'Name 12', price: '$5.00', id: '12' },
    { name: 'Name 31', price: '$15.00', id: '13' },
    { name: 'Name 41', price: '$35.00', id: '14' },
    { name: 'Name 51', price: '$25.00', id: '15' },
    { name: 'Name 6', price: '$5.00', id: '16' },
    { name: 'Name 7', price: '$5.00', id: '17' },
    { name: 'Name 8', price: '$5.00', id: '18' },
];

const sectionMenuItems = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Menu 1', price: '$1.00' },
            { name: 'Menu 2', price: '$2.00' },
            { name: 'Menu 3', price: '$5.50' },
            { name: 'Menu 4', price: '$3.00' },
        ]
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Pizza 1', price: '$1.00' },
            { name: 'Pizza 2', price: '$2.00' },
            { name: 'Pizza 3', price: '$5.50' },
        ]
    },
    {
        title: 'SIdes',
        data: [
            { name: 'Soup 1', price: '$1.00' },
            { name: 'Soup 2', price: '$2.00' },
            { name: 'Soup 3', price: '$5.50' },
        ]
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Dessert 1', price: '$1.00' },
            { name: 'Dessert 2', price: '$2.00' },
            { name: 'Dessert 3', price: '$5.50' },
            { name: 'Dessert 4', price: '$5.50' },
            { name: 'Dessert 5', price: '$3.00' },
        ]
    }
]

const Separator = () => <View style={menuStyle.separator} />

const Header = () => <Text style={menuStyle.headerText}>View Menu</Text>;

const Footer = () => (
    <Text style={menuStyle.footerText}>
        All Rights Reserved by Little Lemon 2022
    </Text>
);

// @ts-ignore
const Item = ({name, price}) => {
    return (
        <View style={menuStyle.itemContainer}>
            <Text style={menuStyle.itemText}>{name}</Text>
            <Text style={menuStyle.itemText}>{price}</Text>
        </View>
    )
};

const MenuItems = () => {
    const [showMenu, setShowMenu] = useState(false);
    // @ts-ignore
    const renderItem = ({item}) => <Item name={item.name} price={item.price} />;

    // @ts-ignore
    const renderSectionHeader = ({section: {title}}) => (
      <Text style={menuStyle.headerText}>{title}</Text>
    );

    return (
     <View style={menuStyle.container}>
         <ImageBackground
             style={menuStyle.backgroundImage}
             source={require('../img/background.png')}
             resizeMode={'contain'}>
             {
                 !showMenu && (
                     <Text style={menuStyle.infoSection}>
                         Little Lemon is a charming neighborhood bistro that serves simple food
                         and classic cocktails in a lively but casual environment. View our
                         menu to explore our cuisine with daily specials!
                     </Text>
                 )
             }

             <Pressable style={menuStyle.button}
                        onPress={() => {setShowMenu(!showMenu);}}>
                 <Text style={menuStyle.buttonText}>
                     {showMenu ? 'Home' : 'View Menu'}
                 </Text>
             </Pressable>

             {
                 showMenu && (
                     <SectionList
                         sections={sectionMenuItems}
                         renderItem={renderItem}
                         keyExtractor={(item, index) => item.name + index}
                         renderSectionHeader={renderSectionHeader}
                         ItemSeparatorComponent={Separator}
                         ListFooterComponent={Footer}
                     />
                 )
             }
             {/*{*/}
             {/*    showMenu && (*/}
             {/*        <FlatList*/}
             {/*            data={menuItems}*/}
             {/*            keyExtractor={item => item.id}*/}
             {/*            renderItem={renderItem}*/}
             {/*            ItemSeparatorComponent={Separator}*/}
             {/*            ListHeaderComponent={Header}*/}
             {/*            ListFooterComponent={Footer}*/}
             {/*        />*/}
             {/*    )*/}
             {/*}*/}
         </ImageBackground>
     </View>
    )
};

export default MenuItems;

const menuStyle = StyleSheet.create({
    container: {
        flex: 0.8
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
        fontSize: 30, flexWrap: 'wrap', color: 'black'
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: yellow
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
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
})