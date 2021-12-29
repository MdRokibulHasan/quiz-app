import React from 'react'
import { Style, Text, View } from 'react-native';

const Quiz = () => {
    return (
        < View style={styles.container}>
            <Text>This is Quiz</Text>
        </View >
    );
};
export default App;
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
    },
});