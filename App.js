/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState();
  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="Click Me" />
      </View>

      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen : {
    padding: 50
  },
  inputContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input : {
    borderWidth: 2,
    borderColor: 'black',
    width: 200,
    padding: 10
  }
});

export default App;
