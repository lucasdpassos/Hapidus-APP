import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import SignIn from '../screens/SignIn'
import Preload from '../screens/Preload'
import ChatBot from '../screens/Chat/index.js'
import Tutorial from '../screens/Tutorial'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator 
    initialRouteName="Preload"
    screenOptions ={{
        headerShown: false
    }}
    >
    
        <Stack.Screen name="SignIn" component={SignIn} / >
        <Stack.Screen name="Preload" component={Preload} / >
        <Stack.Screen name="ChatBot" component={ChatBot} / >
        <Stack.Screen name="Tutorial" component={Tutorial} / >
 
    </Stack.Navigator>
)