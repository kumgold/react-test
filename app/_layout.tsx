import 'react-native-reanimated';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "@/app/components/LoginScreen";
import MenuItems from "@/app/components/MenuItems";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
      // <Stack.Navigator
      //     initialRouteName={'Login'}
      //     screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
      //     <Stack.Screen name={'Login'} component={LoginScreen}/>
      //     <Stack.Screen name={'Menu'} component={MenuItems}/>
      // </Stack.Navigator>
      <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Login') {
                    iconName = 'at';
                } else if (route.name === 'Menu') {
                    iconName = 'list';
                }
                // @ts-ignore
                return <Ionicons name={iconName} size={size} color={color} />;
            },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
          })}>
            <Tab.Screen name={'Login'} component={LoginScreen}/>
            <Tab.Screen name={'Menu'} component={MenuItems}/>
      </Tab.Navigator>
  );
}

export default App;