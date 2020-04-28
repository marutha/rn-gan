import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Components/Header';
import StartGameScreen from './Screens/StartGame';
import GameScreen from './Screens/Game';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number!"/>
      <StartGameScreen />
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
