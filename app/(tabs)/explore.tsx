import {StyleSheet, View} from 'react-native';
import LittleLemonHeader from "@/app/components/LittleLemonHeader";
import MenuItems from "@/app/components/MenuItems";

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <LittleLemonHeader/>
            <MenuItems/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#497747',
    },
});
