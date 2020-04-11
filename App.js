import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen'


export default function App() {
const [userNumber, setUserNumber] = useState()
const [guessRounds, setGuessRound] = useState(0)

const configureNewGameHandler = () =>{
  setGuessRound(0)
  setUserNumber(null)
}

  const startGameHandler =(selectedNumber) =>{
    setUserNumber(selectedNumber);
    
  }
 const gameOverHandler = numOfRounds =>{
   setGuessRound(numOfRounds)
 }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <=0){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRounds > 0){
    content =<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    top:25
  },
});
