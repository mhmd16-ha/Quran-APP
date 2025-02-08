import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from './../components/Header';
import { mainColor, secondaryColor } from '../../constant/constant';
import { CounterContext } from '../context/CounterContext';
import { ThemeContext } from './../context/ThemeContext';
//@ts-ignore
import { Picker } from '@react-native-picker/picker';

const Sebha = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  let { Theme, toggoleTheme } = useContext(ThemeContext);
  let { num, setNum } = useContext(CounterContext);
  

  return (
    <>
      <Header title={'المسبحة'} />
      <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="سبحان الله" value="سبحان الله" />
          <Picker.Item label="الحمد لله" value="الحمد لله" />
          <Picker.Item label="الله أكبر" value="الله أكبر" />
          <Picker.Item label="لا اله الا الله" value="لا اله الا الله" />
          <Picker.Item label="سبحان الله وبحمده" value="سبحان الله وبحمده" />
          <Picker.Item label="سبحان الله العظيم" value="سبحان الله العظيم" />
        </Picker>
      <View style={[Theme ? { backgroundColor: '#000000' } : '', styles.container]}>
      
        <View>
          <Text style={styles.txt}>{selectedLanguage}</Text>
        </View>
        <ImageBackground resizeMode='stretch' source={require('../assets/1.png')} style={styles.NumView}>
          <Text style={styles.num}>{num}</Text>
        </ImageBackground>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => setNum(num + 1)} style={styles.btn}>
            <Text style={styles.btntxt}>
              سبح
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNum(0)} style={styles.btnreset}>
            <Text style={styles.btnresettxt}>
              ارجاع
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Sebha
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  NumView: {

    padding: 25,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'


  },
  num: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: mainColor,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 60,
    shadowColor: secondaryColor,
    elevation: 30,

  },
  btntxt: {
    color: 'white',
    fontSize: 50
  }, txt: {
    color: secondaryColor,
    fontSize: 50
  }
  , btnresettxt: {
    color: '#FFFFFF',
    fontSize: 8
  },
  btnreset: {
    backgroundColor: secondaryColor,
    padding: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: mainColor,
    elevation: 30,
    justifyContent: 'center',
    alignItems: 'center'

  }
})