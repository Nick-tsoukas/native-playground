import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return(
        <View style={styles.listItems}>
          <Text>{props.title}</Text>
        </View>
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