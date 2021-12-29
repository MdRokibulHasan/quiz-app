import React from 'react'
import { Style, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Result = ({ navigation }) => {
    return (
        < View>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image source={{ uri: 'https://storyset.com/illustration/editing-body-text/rafiki' }} style={styles.banner}
                    resizeMode="contain"></Image>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate(home)}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
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
});