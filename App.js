import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./App/Screens/Authentification/Login"
import Register from './App/Screens/Authentification/Register';
import Welcome from './App/Screens/Authentification/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack= createStackNavigator();
export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator  initialRouteName ="welcome" screenOptions={{headerShown:true}}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
