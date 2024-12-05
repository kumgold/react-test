import {StyleSheet, View} from 'react-native';
import LittleLemonHeader from "@/app/components/LittleLemonHeader";
import MenuScreen from "@/app/screen/MenuScreen";

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <LittleLemonHeader/>
            <MenuScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#497747',
    },
});
