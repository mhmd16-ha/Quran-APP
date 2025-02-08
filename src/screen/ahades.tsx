import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { mainColor } from '../../constant/constant'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'
const ahades:React.FC = () => {
    const [data, setData] = useState<any[]>()
    const [Loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        getSurah()
    }, [])
    async function getSurah() {
        try {
            const res = await axios.get('https://api.hadith.gading.dev/books/muslim?range=1-50')
            setData(res.data.data.hadiths)
            setLoading(false)

        } catch (err) {
            console.log(err);
        }
    }
    return (
        Loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color={mainColor} size={50} />
        </View> : <ScrollView>
            <Header title={'أحاديث نبوية'} />
            {
                data?.map((i:any)=>{
                    return<View key={i.id} style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.txt}>
                            {i?.arab}
                        </Text>
                        <Text></Text>
                    </View>
                </View>
                })
            }
        </ScrollView>
    )
}
export default ahades
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    card: {
        backgroundColor: '#ddd',
        width: '90%',
        padding: 10,
        margin: 'auto',
        shadowColor: mainColor,
        elevation: 15
    },
    txt: {
        fontSize: 20,
        textAlign: 'center'
    }
})
