import { ImageBackground, ScrollView, StyleSheet, Text, View, FlatList, Alert, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { mainStakProps } from '../stacks/mainStack'
import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { mainColor } from '../../constant/constant';
import { ThemeContext } from '../context/ThemeContext';

type QuranVerseRoute = RouteProp<mainStakProps, 'QuranVerse'>
const Quran: React.FC = () => {
  let { Theme } = useContext(ThemeContext);
  const route = useRoute<QuranVerseRoute>()
  const [data, setData] = useState<any>()
  const [verses, setVerses] = useState<any[]>()
  const [Loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    getSurah(route.params.link)
  }, [])


  async function getSurah(link: string) {
    try {
      const res = await axios.get(`${link}`)
      setData(res.data)
      setVerses(res.data.verses)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }
  return (

    Loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator color={mainColor} size={50} />
    </View> :
      <ScrollView contentContainerStyle={[Theme ? { backgroundColor: "#000000" } : { backgroundColor: "#f0f0f0" }, styles.container]}>
        <View style={[Theme ? { backgroundColor: "#000000" } : { backgroundColor: "#f0f0f0" }, styles.frame]}>
          <ImageBackground style={styles.img} source={require('../assets/2.png')}>
            <Text style={styles.name}>{data?.name}</Text>
          </ImageBackground>
          <Text style={[Theme ? { color: "#FFFFFF" } : { color: "#000000" }, styles.aya1]}>بࣻسࣸمۘ ۧآلۤلࣷهࣽ ٍاٍلࣵرࣵح۬م۫نۘ ۧاۧلۤرْحࣼيُمٍ</Text>
          <View style={styles.ayat}>
            <Text>
              {
                verses?.map((item: any) => {

                  return <Text key={item.id} style={[Theme ? { color: "#FFFFFF" } : { color: "#000000" }, styles.verse]}>
                    {
                      item.text
                    }
                    <ImageBackground source={require('../assets/1.png')} style={styles.NumView}>
                      <Text style={styles.verseNumber}>{item?.id}</Text>
                    </ImageBackground>
                  </Text>


                })
              }
            </Text>
          </View>
        </View>
      </ScrollView>
  )
}

export default Quran

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    alignItems: 'center',
    // justifyContent:'center'
  },
  frame: {
    width: "100%",
  },
  img: {
    width: "95%",
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 'auto'
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: mainColor
  }, aya1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    margin: 'auto'
  }
  ,
  verse: {
    fontSize: 24,
    textAlign: 'right',

  },
  verseNumber: {
    fontSize: 20,
    textAlign: 'center',
  }, NumView: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    padding: 5,
    margin:5

  },
  ayat: {
    // flexDirection:'row',
    // flexWrap:'wrap'
    // alignItems:'center',
    // justifyContent:'center'
  }
})