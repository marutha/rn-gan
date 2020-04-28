import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./Components/Header";
import StartGameScreen from "./Screens/StartGame";
import GameScreen from "./Screens/Game";
import GameOver from "./Screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen start={startGameHandler} />;

  if (userNumber) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (guessRounds) {
    content = <GameOver rounds={guessRounds}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number!" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
