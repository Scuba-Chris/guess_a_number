import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRouds, setGuessRounds] = useState(0);

  const startNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRouds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRouds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRouds}
        userNumber={userNumber}
        onRestart={startNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
