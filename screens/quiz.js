import React, { useEffect, useState } from 'react'
import { Style, Text, TouchableOpacity, View } from 'react-native';

const Quiz = ({ navigation }) => {
    const [question, setQuestion] = useState();
    const [ques, setQues] = useState(0);
    const getQuiz = async () => {
        const url = `https://opentdb.com/api.php?amount=10&type=multiple`;
        const res = await fetch(url);
        const data = await res.json();
        setQuestion(data.results);
    };
    useEffect(() => {
        getQuiz()
    }, [])
    return (
        < View style={styles.container}>
            {question && <View style={styles.parent}>
                <View style={styles.top}>
                    <Text style={styles.questions}>Imagine this is a really cool Question</Text>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.questionButton}>
                        <Text style={styles.question}>Cool Option 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.questionButton}>
                        <Text style={styles.question}>Cool Option 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.questionButton}>
                        <Text style={styles.question}>Cool Option 3</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottom}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Result')}>
                        <Text style={styles.buttonText}>End</Text>
                    </TouchableOpacity>
                </View>
            </View>}
        </View >
    );
};
export default App;
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 40,
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
    button: {
        backgroundColor: '#184E77',
        padding: 12,
        borderRadius: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',

    },
    questions: {
        fontSize: 28,

    },
    question: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100%',
    },
});