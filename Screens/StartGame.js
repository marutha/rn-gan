import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Colors from '../constants/colors';
import Card from '../Components/Card'
const StartGame = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text >Select a Number!</Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          <View style={styles.button} backgroundColor={Colors.primaryText}>
            <Button title="Reset" color={Colors.primary} />
          </View>
          <View style={styles.button} backgroundColor={Colors.primary}>
            <Button title="Confirm" color={Colors.primaryText} />
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  },
  button: {
    width: 100,
    borderRadius: 6,
  }
});

export default StartGame