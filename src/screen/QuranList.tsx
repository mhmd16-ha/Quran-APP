import { ActivityIndicator, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from './../components/Header';
import { FlatList } from 'react-native-gesture-handler';
import { mainColor, secondaryColor } from '../../constant/constant';
import { ThemeContext } from './../context/ThemeContext';
import axios from 'axios';
//@ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { mainStakProps } from '../stacks/mainStack';

type surah = {
  id: string,
  name: string,
  transliteration: string,
  type: string,
  link: string,
  total_verses: string,
}
type QuranmainStakProps = NativeStackNavigationProp<mainStakProps, 'Quran'>
const QuranList = () => {
  const [data, setData] = useState()
  const [numOfSuruh, setNumOfSuruh] = useState();
  const [numOfVerse, setnumOfVerse] = useState<number>();
  const { navigate } = useNavigation<QuranmainStakProps>()
  let { Theme } = useContext(ThemeContext);
    const [Loading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
    getSurah()
  }, [])
  async function getSurah() {
    try {
      const res = await axios.get('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/index.json')
      setData(res.data)
      setLoading(false)
    } catch (err) {
      console.log(err);

    }
  }

  function handleGoToSuruh(item:surah) {
    
    navigate('QuranVerse',{link:item.link})
  }
  function renderItem(item: surah, index: number) {
    return (
      <TouchableOpacity onPress={() => handleGoToSuruh(item)} style={styles.card}>
        <View style={styles.num_name}>
          <ImageBackground resizeMode='stretch' style={styles.numBack} source={require('../assets/1.png')}>
            <Text style={styles.num}>{item.id}</Text>
          </ImageBackground>
          <Text style={styles.name}>{item.name}</Text>
          {item.type === 'meccan' ? <FontAwesome5 name={'kaaba'} size={40} color={'#000000'} /> :
            <FontAwesome5 name={'mosque'} size={40} color={mainColor} />}
        </View>
        <Text style={styles.numberOfVerse}>عدد الآيات  {item.total_verses}</Text>
      </TouchableOpacity>)
  }
  return (
        Loading?<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <ActivityIndicator color={mainColor} size={50}/>
        </View>:
    <View style={[Theme ? { backgroundColor: '#000000' } :'', styles.container]}>
      <Header title={'القرآن الكريم'} />
      <FlatList
        data={data}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </View>
  )
}

export default QuranList

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1

  },
  card: {
    width: "90%",
    backgroundColor: '#E9E3d8',
    borderRadius: 10,
    marginVertical: 7,
    padding: 15,
    margin: 'auto'
  },
  name: {
    color: secondaryColor,
    fontSize: 20,
    marginHorizontal: 10

  },
  num: {
    color: secondaryColor,
    fontSize: 15,
    marginHorizontal: 10
  },
  numberOfVerse: {
    color: '#767676',
    fontSize: 15
  },
  num_name: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }, numBack: {
    padding: 5,
  }

})