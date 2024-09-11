import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home/HomeScreen'
import DetailsScreen from '../screens/Home/DetailsScreen'
import WatchVideoScreen from '../screens/Home/WatchVideoScreen'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="WatchVideoScreen" component={WatchVideoScreen} />
    </Stack.Navigator>
   
  )
}

export default MainNavigator

