import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { mainColor, secondaryColor } from '../../constant/constant'
//@ts-ignore
import Entypo from 'react-native-vector-icons/Entypo'
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather'
import { ThemeContext } from './../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
interface headertype{
  title:string
}
const Header:React.FC<headertype> = ({title}) => {
  let {Theme,toggoleTheme}=useContext(ThemeContext);

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={toggoleTheme}>
       {Theme? <Entypo name={'moon'} size={40} color={'#FFFFFF'}/>: 
       <Feather name={'sun'} size={40} color={'#FFFFFF'}/>}
        </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity >
      <Image source={require('../assets/icon.png')} style={styles.logo}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:mainColor,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        padding:10,
        shadowColor:mainColor, 
        elevation:20
    },
    title:{
        fontSize:30,
        color:'#FFFFFF',
    },
    logo:{
        width:60,
        height:60,
    }
})