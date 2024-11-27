import 'react-native-reanimated';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "@/app/components/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import MenuItems from "@/app/components/MenuItems";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Login'} component={LoginScreen}/>
          <Stack.Screen name={'Menu'} component={MenuItems}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;