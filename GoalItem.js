import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return(
      <TouchableOpacity onPress={() => props.removeHandler(props.id)}>
        <View style={styles.listItems}>
          <Text>{props.title} {props.id}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItems : {
        padding: 10,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ccc'
      }
})

export default GoalItem;