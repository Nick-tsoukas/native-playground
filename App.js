/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

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
  const [goals, setGoals] = useState([]);


   const goalHandler = async (text) => {
   const goal = await setGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: text }]);
   
  }

  return (
    <View style={styles.screen}>

      <GoalInput handler={goalHandler} />

      <FlatList
      data={goals}
      renderItem={itemData => ( <GoalItem title={itemData.item.value} />)}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  screen : {
    padding: 50
  },
  input : {
    borderWidth: 2,
    borderColor: 'black',
    width: 200,
    padding: 10
  }
});

export default App;
