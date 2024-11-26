import {StyleSheet, View} from 'react-native';

import LittleLemonHeader from "@/app/components/LittleLemonHeader";
import MenuItems from "@/app/components/MenuItems";
import FeedbackForm from "@/app/components/FeedbackForm";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        {/*<LittleLemonHeader/>*/}
        {/*<MenuItems/>*/}
        <FeedbackForm/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
    },
});