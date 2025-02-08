import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { mainColor, secondaryColor } from '../../constant/constant'
import { useNavigation } from '@react-navigation/native'
import { mainStakProps } from '../stacks/mainStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const categories=[
    {  title:'القرآن الكريم',
        id:1,
        image:'https://img.freepik.com/premium-vector/illustration-koran-with-arabic-calligraphy_637414-229.jpg?w=740'

    },{  title:'المسبحة',
        id:4,
        image:'https://img.freepik.com/free-vector/hand-drawn-flat-design-tasbih-illustration_23-2149275535.jpg?t=st=1738796683~exp=1738800283~hmac=0bf87efe41ac1ae6678307b485e43bdde73c8b069013aa60413b8fcd95dc247a&w=740'

    },
    {  title:'أدعية',
        id:2,
        image:'https://img.freepik.com/free-vector/pray-concept-illustration_114360-3525.jpg?t=st=1738796597~exp=1738800197~hmac=a1ce09aa382ac45cf279b77fc8e0003d9601ec48a790560814463a7c8e0f4bc3&w=740'

    },
    {  title:'أحاديث نبوية ',
        id:3,
        image:'https://img.freepik.com/free-vector/ramadan-kareem-concept-illustration_114360-5051.jpg?t=st=1738796545~exp=1738800145~hmac=040b7dc47e4f3d74e0f6a96c7cd68e94fcf616b565e859db2ce866867bf4554a&w=740'

    },
    

]
type categoryType={
    title:string,
    id:number,
    image:string
}
type CategorymainStakProps=NativeStackNavigationProp<mainStakProps,'Home'>
const Categories = () => {
    const {navigate}=useNavigation<CategorymainStakProps>();
  
    const handleNavigate =(id:number)=>{
        if(id===1){
            navigate('Quran')
        }else if(id===4){
            navigate('Sebha')

        }
        else if(id===3){
            navigate('Ahades')

        }
        else if(id===2){
            navigate('Doaa')
        }

        
    }
  function renderCategory(item:categoryType){
    return(
    <TouchableOpacity onPress={()=>handleNavigate(item.id)} style={styles.card}>
      <Image style={styles.img} source={{uri:item.image}}/>
      <Text style={styles.category}>{item.title}</Text>
    </TouchableOpacity>
    )
  }
  return (
      <FlatList
    data={categories}
    renderItem={({item})=>renderCategory(item)}
    scrollEnabled={false}
    keyExtractor={item => item.title}
    numColumns={2}
    contentContainerStyle={styles.categories}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
card:{
    width:"42%",
    padding:5,
    margin:15,
    backgroundColor:'#FFFFFF',
    maxWidth:250,
    borderRadius:20,
    shadowColor:secondaryColor,      
    elevation:15,
    alignItems:'center'
},
img:{
    width:"100%",
    height:200,
    resizeMode:'stretch'
},
category:{
    fontSize:25,
    fontWeight:'bold',
    color:"#FFF",
    backgroundColor:'rgba(0,0,0,.4)',
  
},categories:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    // backgroundColor:'#000',
}
})