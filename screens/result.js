import React from 'react'
import { Style, Text, View } from 'react-native';

const Result = () => {
    return (
        < View style={styles.container}>
            <Text>This is Result</Text>
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