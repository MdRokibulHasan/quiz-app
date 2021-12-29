import React from 'react'
import { Style, Text, TouchableOpacity, View } from 'react-native';

const Quiz = ({ navigation }) => {
    return (
        < View style={styles.container}>
            <View style={styles.top}>
                <Text>Imagine this is a really cool Question</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity>
                    <Text>Cool Option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cool Option 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cool Option 3</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.bottom}>
                <TouchableOpacity>
                    <Text>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                    <Text>End</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};
export default App;
const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: 'row',
    },
});