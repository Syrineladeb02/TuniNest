import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View,Image, ScrollView, TextInput, Button, Pressable, TouchableOpacity, TouchableOpacityBase  } from "react-native";
export default function Register({navigation}) {
  const [text , onChangeText]= useState('');
  const [email , onChangeEmail]= useState('');
  const [phone , onChangePhone]= useState('');
  const [password , onChangePassword]= useState('');
  const [confirm , onChangeConfirm]= useState('');
const [onPress, onPressRegister]= useState('');

  return (
    <ScrollView>
      <View>
        <Image source ={require('./../../../assets/images/logo.png')} style={{width:390, height:350 }}/> 
            <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <Text style={{marginTop:40,paddingLeft:10}} > Name:</Text>
            <TextInput onChangeText={onChangeText} value={text} style={styles.textInput} placeholder=" Enter your full name"/>
            <Text style={{marginTop:10,paddingLeft:10}} > Email:</Text>
            <TextInput onChangeText={onChangeEmail} value={email} style={styles.textInput} placeholder=" Enter your email" keyboardType="email-address" />
            <Text style={{marginTop:10,paddingLeft:10}} > Phone Number:</Text>
            <TextInput onChangeText={onChangePhone} value={phone} style={styles.textInput} placeholder=" Enter your phone number" keyboardType="phone-pad" />
            <Text style={{marginTop:10,paddingLeft:10}} > Password</Text>
            <TextInput onChangeText={onChangePassword} value={password} style={styles.textInput} placeholder=" Enter a password" keyboardType="default" secureTextEntry  />
            <Text style={{marginTop:10,paddingLeft:10}} > Confirm Password</Text>
            <TextInput onChangeText={onChangeConfirm} value={confirm} style={styles.textInput} placeholder=" Confirm your password" keyboardType="default" secureTextEntry  />
            <TouchableOpacity  onPress={onPressRegister}  style={styles.button} >{/*touchableOpacity kif el pressable it is just for a better button styling*/}
              <Text style={{ fontWeight:"bold", textAlign:"center", fontSize:"15"}}>Register</Text>
            </TouchableOpacity>
            <View >
              <Text style={{textAlign:'center', marginBottom:100, marginTop:-30}}>I already have an account?  
              <TouchableOpacity onPress={()=> navigation.navigate('login')} ><Text style={{color:"#008cff", }}> Login Now </Text></TouchableOpacity>
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
      fontStyle: "Normal", 
      fontWeight:"bold",
      fontSize:30, 
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