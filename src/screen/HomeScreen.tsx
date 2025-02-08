import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from './../components/Header';
import Categories from '../components/Categories';
import { ThemeContext } from './../context/ThemeContext';


const HomeScreen = () => {
  let {Theme,toggoleTheme}=useContext(ThemeContext);

  return (
    <ScrollView style={[Theme?{backgroundColor:'black'}:'']}>
     <Header title={'الرئسية'}/>
     <Categories/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 
})