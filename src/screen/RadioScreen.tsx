import { ActivityIndicator, Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { ThemeContext } from '../context/ThemeContext'
import { mainColor, secondaryColor } from '../../constant/constant'
import axios from 'axios'
import SoundPlayer from 'react-native-sound-player'
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather'


const RadioScreen = () => {
    let { Theme, toggoleTheme } = useContext(ThemeContext);
    const [PlayerVisible, setPlayerVisible] = useState<boolean>(false)
    const [data, setData] = useState()
    const [name, setName] = useState<string>()
        const [Loading, setLoading] = useState<boolean>(true)
    
    useEffect(() => {
        getSurah()
    }, [])
    async function getSurah() {
        try {
            const res = await axios.get('https://www.mp3quran.net/api/v3/radios?language=ar')
            setData(res.data.radios)
            setLoading(false)

        } catch (err) {
            console.log(err);
        }
    }
    const soundStop = () => {
        try {
            SoundPlayer.stop()
            setPlayerVisible(false)
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }
    const soundplay = (url: string, name: string) => {
        try {

            SoundPlayer.playUrl(url)
            setPlayerVisible(true)
            setName(name)
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }
    function renderCategory(data: any) {
        return (
            <TouchableOpacity onPress={() => soundplay(data.url, data.name)} style={styles.card}>
                {/* <Image style={styles.img} source={{uri:item.image}}/> */}
                <Text style={styles.category}>{data?.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        Loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color={mainColor} size={50} />
        </View> :
            <ScrollView contentContainerStyle={[Theme ? { backgroundColor: 'black' } : { backgroundColor: '#dddddd' }]}>
                <Header title={'الراديو'} />
                {PlayerVisible ? <View style={{ width: "100%", backgroundColor: '#ccc', padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: mainColor, fontSize: 30 }}>{name}</Text>
                    <TouchableOpacity onPress={soundStop}>
                        <Feather name={'play'} size={20} color={'#000000'} />
                        <Text style={{ color: '#000000', fontSize: 15 }}>ايقاف</Text>
                    </TouchableOpacity>
                </View> : ''}

                <FlatList
                    data={data}
                    renderItem={({ item }) => renderCategory(item)}
                    scrollEnabled={false}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.categories}
                />
            </ScrollView>
    )
}

export default RadioScreen

const styles = StyleSheet.create({
    card: {
        width: "42%",
        padding: 5,
        margin: 15,
        backgroundColor: mainColor,
        maxWidth: 250,
        borderRadius: 20,
        shadowColor: secondaryColor,
        elevation: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: "100%",
        height: 200,
        resizeMode: 'stretch'
    },
    category: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
        textAlign:'center'
        // backgroundColor:'rgba(0,0,0,.4)'
    }
    , categories: {
        alignItems: 'center',
        marginTop: 20,
    }
})