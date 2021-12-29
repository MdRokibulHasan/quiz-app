import React from 'react'
import { Style, Text, TouchableOpacity, View } from 'react-native';
import Title from '../components/Title';
const Home = ({ navigation }) => {
    return (
        < View style={styles.container}>
            <Title></Title>
            <View style={styles.bannerContainer}>
                <Image source={{ uri: 'https://storyset.com/illustration/editing-body-text/rafiki' }} style={styles.banner}
                    resizeMode="contain"></Image>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("quiz")}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View >
    );
};
export default App;
const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 40,
    },
});