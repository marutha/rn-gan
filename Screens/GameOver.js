import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Game from "./Game";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over !</Text>
      <Text>Rounds: {props.rounds}</Text>
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
