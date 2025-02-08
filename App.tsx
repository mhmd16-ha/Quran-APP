
import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { mainColor } from './constant/constant';
import MainTabs from './src/tabs/MainTabs';
import CounterContextProvider from './src/context/CounterContext.js';
import ThemeContextProvider from './src/context/ThemeContext.js';


function App(): React.JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, [])


  return (
    <ThemeContextProvider>
    <CounterContextProvider>
    <NavigationContainer>
        <StatusBar barStyle={'light-content'} backgroundColor={mainColor}/>
        <MainTabs/>
    </NavigationContainer>
    </CounterContextProvider>
    </ThemeContextProvider>
  );
}


export default App;
