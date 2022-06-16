import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState } from "react"
import Header from './components/header';
import Input from './components/Input';
import ChoiceList from './components/ChoiceList';
import Screen from './Screen/Screen';
import StartScreen from './Screen/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const stackNavigation = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <stackNavigation.Navigator>
        <stackNavigation.Screen options={{ headerShown: false }} name='startScreen' component={StartScreen} />
        <stackNavigation.Screen options={{ headerShown: false }} name='main' component={Screen} />
      </stackNavigation.Navigator>
    </NavigationContainer>
  );
}

