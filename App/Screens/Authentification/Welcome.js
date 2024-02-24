import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Touchable, TouchableOpacity } from "react-native";

export default function Welcome({navigation}) {
const [onPress,onPressStart]=useState('');
  return (
    <View style={styles.container}>
      <Image source={require('./../../../assets/images/logo.png')} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 22 }}>Welcome to TuniNest{'\n'}</Text>
          {'\n'}
          Welcome to TuniNest – your cozy getaway awaits! Discover unique stays, hassle-free booking, and unforgettable experiences. Let's find your perfect nest together!
        </Text>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('login')} style={styles.button} >
         <Text style={{textAlign:"center", fontWeight:"bold" ,color:"white"}}>
          GET STARTED
         </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    justifyContent: "center",
    marginTop:-50,

  },
  textContainer: {
    marginTop:-15,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 20,
    width: "100%",
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },
  button:{
    height:50,
    margin: 40,
    width:200,
    backgroundColor:"#ce2960" ,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    justifyContent:"center",
    marginTop:10
    }
    
});
