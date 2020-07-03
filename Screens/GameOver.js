import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Game from "./Game";
import BodyText from "../Components/BodyText";
import TitleText from "../Components/TitleText";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over !</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Rounds: {props.rounds}</BodyText>
      <BodyText>User Number: {props.number}</BodyText>
      <Button title="Start Over" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: '100%',
  },
});

export default GameOver;
