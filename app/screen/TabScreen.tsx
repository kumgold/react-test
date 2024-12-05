import {Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import MenuScreen from "@/app/screen/MenuScreen";
import GraphScreen from "@/app/screen/GraphScreen";

const Tab = createBottomTabNavigator();

const MENU = 'Menu';
const GRAPH = 'Graph';

const TabScreen = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === MENU) {
                    iconName = 'at';
                } else if (route.name === GRAPH) {
                    iconName = 'list';
                }

                // @ts-ignore
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
        })}>
            <Tab.Screen name={MENU} component={MenuScreen}/>
            <Tab.Screen name={GRAPH} component={GraphScreen}/>
        </Tab.Navigator>
    );
}

export default TabScreen;