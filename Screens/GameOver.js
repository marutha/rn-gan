import React from "react";
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from "react-native";
import Game from "./Game";
import BodyText from "../Components/BodyText";
import TitleText from "../Components/TitleText";

const GameOver = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get('window').width * .7,
    height: Dimensions.get('window').width * .7,
    borderRadius: Dimensions.get('window').width * .7 /2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 20,
  },
  image: {
    width: "100%",
    height: '100%',
  },
});

export default GameOver;
