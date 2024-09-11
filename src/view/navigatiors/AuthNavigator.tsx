import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/AuthScreens/LoginScreen'
import RegisterScreen from '../screens/AuthScreens/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenList } from './screen-lists/screenLists'

const Stack =  createNativeStackNavigator<ScreenList>()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator

