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
  Button,
  FlatList
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  }

   const goalHandler = async () => {
   const goal = await setGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
   setEnteredGoal('');
   
  }

  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInput} value={enteredGoal} />
        <Button onPress={goalHandler} title="Click Me" />
      </View>

      <FlatList
      data={goals}
      renderItem={itemData => (
        <View style={styles.listItems}>
          <Text>{itemData.item.value}</Text>
        </View>
      )}

       />
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
  },
  listItems : {
    padding: 10,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ccc'
  }
});

export default App;
