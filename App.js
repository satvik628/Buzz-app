//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { Header } from 'react-native-elements';
import fb from './screen/fb';
import insta from './screen/insta';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.head}>Buzz App</Text>
    <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   // alignItems: 'center',
    //justifyContent: 'center',
  },
  head:{
  backgroundColor:'black',
  fontSize:36,
  color:'white',
  justifyContent:'top',
  textAlign:'center'

  
  
  },
});
const TabNavigator=createBottomTabNavigator({
  facebook:{screen: fb},
  Instagram:{screen: insta},
  
  })
  const AppContainer=createAppContainer(TabNavigator)
  
  
