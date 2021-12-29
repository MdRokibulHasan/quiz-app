import React from 'react'
import { Style, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
const App = () => {
  return (
    < View style={styles.container}>
      <Home></Home>
      {/* <Quiz></Quiz> */}
      {/* <Result></Result> */}
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
