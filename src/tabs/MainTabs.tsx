import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Sebha from './../screen/Sebha';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { mainColor } from '../../constant/constant';
import mainStack from '../stacks/mainStack';
import { ThemeContext } from './../context/ThemeContext';
import RadioScreen from '../screen/RadioScreen';
const Tab = createBottomTabNavigator();
const MainTabs = () => {
    let {Theme,toggoleTheme}=useContext(ThemeContext);
  
  return (
    <Tab.Navigator  screenOptions={{headerShown: false,tabBarActiveTintColor:mainColor}}>
    <Tab.Screen name="MainStack"  options={{
          tabBarActiveBackgroundColor:Theme?"#000000":"#Ffffff",
          tabBarInactiveBackgroundColor:Theme?"#000000":"#Ffffff",
          tabBarLabel: 'الرئيسية',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}  component={mainStack} />
    <Tab.Screen 
    options={{
      tabBarLabel: 'راديو',
      tabBarActiveBackgroundColor:Theme?"#000000":"#Ffffff",
      tabBarInactiveBackgroundColor:Theme?"#000000":"#Ffffff",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="radio" color={color} size={size} />
      ),
    }} name="Radio" component={RadioScreen} />
  </Tab.Navigator>
  )
}

export default MainTabs