import 'react-native-reanimated';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "@/app/screen/LoginScreen";
import TabScreen from "@/app/screen/TabScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Login'}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Login'} component={LoginScreen}/>
            <Stack.Screen name={'Tab'} component={TabScreen}/>
        </Stack.Navigator>
    );
}

export default App;