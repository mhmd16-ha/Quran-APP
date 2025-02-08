import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { mainColor } from '../../constant/constant'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'
const doaa:React.FC = () => {
   
    return (
       <>
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>
            قريبا
        </Text>
       </View>
       </>
    )
}
export default doaa
const styles = StyleSheet.create({
   
})
