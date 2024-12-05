import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import { Dimensions } from "react-native";
import {BarChart} from "react-native-gifted-charts";
import * as SQLite from "expo-sqlite";
import {useEffect, useState} from "react";

const screenWidth = Dimensions.get("window").width;

const database = SQLite.openDatabaseSync('little_lemon');

const GraphScreen = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setLoading] = useState(true);
    // const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]

    useEffect(() => {
        getMenuItems();
    }, []);

    const getMenuItems = async () => {
        try {
            database.execSync(
                'create table if not exists menus (id integer primary key not null, title text, price text)'
            )

            const menus = database.getAllSync('select * from menus')

            const value = menus.map((item) => ({
                value: item.price
            }));

            console.log('data', value);
            setData(value);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    return <View>
        {
            isLoading ? (<ActivityIndicator/>) : (
                <BarChart
                    data={data}
                    width={screenWidth}
                />
            )
        }
    </View>
}

export default GraphScreen;