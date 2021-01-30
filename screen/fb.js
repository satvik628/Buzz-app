import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export  default class fb extends React.Component{
render(){
    return(
   <View>
    <Image
    onPress={<a href="https://www.facebook.com" />}
    style={{
        alignSelf:'center',
        marginTop:160,
        width:100,
        height:100,
    }} 
    source={{
        uri:'https://image.flaticon.com/icons/png/512/124/124010.png'
    }}
    />
    <Text style={{marginTop:10,alignSelf:'center',fontSize:36,color:'blue'}}>facebook</Text>
   </View>

    )
}

}