import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import QuranList from '../screen/QuranList';
import Sebha from '../screen/Sebha';
import Quran from '../screen/Quran';
import ahades from '../screen/ahades';
import doaa from '../screen/doaa';

const Stack = createStackNavigator();
export type  mainStakProps={
Home:undefined,
Quran:undefined,
Sebha:undefined,
Ahades:undefined,
Doaa:undefined,
QuranVerse:{
  link:string,
}
}
const mainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Quran" component={QuranList} />
    <Stack.Screen name="QuranVerse" component={Quran} />
    <Stack.Screen name="Sebha" component={Sebha} />
    <Stack.Screen name="Ahades" component={ahades} />
    <Stack.Screen name="Doaa" component={doaa} />
  </Stack.Navigator>

  )
}

export default mainStack

const styles = StyleSheet.create({})