import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Game from "./Game";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over !</Text>
      <Text>Rounds: {props.rounds}</Text>
      <Text>User Number: {props.number}</Text>
      <Button title="Start Over" onPress={props.onRestart}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
