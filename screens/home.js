import React from 'react'
import { Style, Text, View } from 'react-native';
import Title from '../components/Title';
const Home = () => {
    return (
        < View style={styles.container}>
            <Title></Title>
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