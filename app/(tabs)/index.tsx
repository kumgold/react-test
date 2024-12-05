import {StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from "@/app/screen/LoginScreen";

export default function HomeScreen() {
  return (
      <View style={styles.container}>
          <LoginScreen/>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});