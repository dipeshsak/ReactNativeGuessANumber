import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors'


export default function Header() {
  return (
    <View style={styles.screen}>
      <Text style={styles.headerText}>Guess a Number !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    width:'100%',
    height:'8%',
    alignItems:'center',
    justifyContent:'center'
  },
  headerText:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
  }
});
