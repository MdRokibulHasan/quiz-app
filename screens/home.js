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
            <TouchableOpacity onPress={() => navigation.navigate("quiz")} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
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
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 40,
        height: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#184E77',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',

    },
});