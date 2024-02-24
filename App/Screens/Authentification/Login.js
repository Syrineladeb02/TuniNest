import { TabActions } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View,Image, ScrollView, TextInput, TouchableOpacity  } from "react-native";

export default function Login( {navigation}) {
  const [email , onChangeEmail]= useState('');
  const [password , onChangePassword]= useState('');
const [onPress, onPressLogin]= useState('');
const [onPressR, onPressRegister]= useState('');

  return (
    <ScrollView>
      <View>
        <Image source ={require('./../../../assets/images/logo.png')} style={{width:390, height:350 }}/> 
            <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={{marginTop:30,paddingLeft:10}} > Email:</Text>
            <TextInput onChangeText={onChangeEmail} value={email} style={styles.textInput} placeholder=" Enter your email" keyboardType="email-address" />
            <Text style={{marginTop:10,paddingLeft:10}} > Password</Text>
            <TextInput onChangeText={onChangePassword} value={password} style={styles.textInput} placeholder=" Enter a password" keyboardType="default" secureTextEntry  />
            <TouchableOpacity  onPress={onPressLogin}  style={styles.button} >{/*touchableOpacity kif el pressable it is just for a better button styling*/}
              <Text style={{ fontWeight:"bold", textAlign:"center", fontSize:"15"}}>Login </Text>
            </TouchableOpacity>
            <View >
              <Text style={{textAlign:'center', marginBottom:100, marginTop:-30}}>You don't have an account?  
              <TouchableOpacity onPress={()=> navigation.navigate('register')} ><Text style={{color:"#008cff", }}> Register Now </Text></TouchableOpacity>
              </Text>
            </View>
            </View>

      </View>
   </ScrollView>

  )}

  const styles = StyleSheet.create({
    container:{
 
    width:'100%',
     height:'80%',
     backgroundColor:"#ffffff",
     marginTop:-20,
     borderTopLeftRadius:30,
borderTopRightRadius:0
    },
    title:{
      fontStyle: "normal", 
      fontWeight:"bold",
      fontSize:35, 
      textAlign:"center", 
      marginTop:40    },
textInput:{
  height: 50,
  marginTop:5,
    margin: 12,
    borderWidth: 1,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding: 10,
    backgroundColor:"#eee1e8",
}, 
button:{
height:50,
margin: 40,

backgroundColor:"#ce2960" ,
borderBottomLeftRadius:20,
borderBottomRightRadius:20,
borderTopLeftRadius:20,
borderTopRightRadius:20,
justifyContent:"center"
}

}
  )