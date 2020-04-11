import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback,Keyboard,Alert}   from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from "../components/NumberContainer";
export default function StartGameScreen(props) {

    const [enteredValue, setenteredValue] = useState('')
    const [confirmed, setconfirmed] = useState(false)
    const [selectedNumber, setselectedNumber] = useState()

    const numberInputHandler = inputText => {
        setenteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler =()=>{
       setenteredValue('')
       setconfirmed(false)
    }

    const confirmedInputHandler =()=>{
        const chosenNumber =parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <=0 ||chosenNumber>99){
            Alert.alert(
                'Invalid number!',
                'Number must be between 1 - 99 .',
                [{text:'Yup', style:'destructive',onPress:resetInputHandler}]
            )
            return;
        }

        setconfirmed(true)
        setselectedNumber(chosenNumber)
        setenteredValue('')
        Keyboard.dismiss()
     }

     let confirmedOutput;

     if(confirmed){
         confirmedOutput =(
            <Card style={styles.summaryContainer}>
                <Text>You Selected :</Text>
               <NumberContainer>{selectedNumber}</NumberContainer>
               <Button title='Start Now' onPress={()=>{props.onStartGame(selectedNumber)}}/>
            </Card>
         )
     
     }
  return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game...!</Text>
      <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input style={styles.input}
              blurOnSubmit
              autoCapitalize='none'
              autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="Reset" onPress={resetInputHandler}  color={Colors.accent}/></View>  
            <View style={styles.button}><Button title="Confirm"  onPress={confirmedInputHandler} color={Colors.primary}/></View>
          </View>
      
      </Card>
      {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
      flex:1,
    backgroundColor: 'white',
    padding:10,
    alignItems:'center'
  },
  title:{
      fontSize:20,
      marginVertical:10
  },
  inputContainer:{
      width:300,
      maxWidth:'80%',
      alignItems:'center',
  },
  buttonContainer:{
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-between',
      paddingHorizontal:15,
      padding:30
  },
  button:{
      width:90
  },
  input:{
      width:50,
      textAlign:'center'
  },
  summaryContainer:{
      marginTop:20,
      alignItems:'center'
  }
});
