import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal ] = useState('');

    const goalInput = async (enteredText) => {
        const goal = await setEnteredGoal(enteredText);
      }

    function buttonHandler(enteredGoal){
        props.handler(enteredGoal);
        setEnteredGoal('');
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInput} value={enteredGoal} />
            <Button onPress={ () => buttonHandler(enteredGoal)} title="Click Me" />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
})

export default GoalInput