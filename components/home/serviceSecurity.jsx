import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { COLORS } from '../../constants'
import { SimpleLineIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SingleSecurity = ({title,liste}) => {

    const router = useRouter();

  return (
    <>
        {
            liste.map((item,index)=>{
                return (
                    <View style={{paddingVertical:20,justifyContent:"space-between",alignItems:"center",flexDirection:"row",gap:5}} key={index} >
                        <View style={{flexDirection:"column",gap:"5",alignItems:"center",justifyContent:"center",paddingHorizontal:4}}>
                            <Image source={item.image} style={{width:55,height:55,resizeMode:"contain"}} />
                            <Text style={{fontSize:16,color:COLORS.gray}}>strong</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"column",gap:"5",alignItems:"center",justifyContent:"center",paddingHorizontal:4}}>
                            <Text style={{fontSize:18,color:COLORS.black,fontWeight:"500"}}>{item.service_name}</Text>
                            <Text style={{fontSize:16,color:COLORS.gray}}>{item.login}</Text>
                            <View style={{height:4,backgroundColor:COLORS.error,borderRadius:15,width:"100%"}}></View>
                        </View>
                        <SimpleLineIcons name="arrow-right" size={24} color="black" onPress={()=>router.replace('/(analyse)/passwords/123')} />
                    </View>
                )
            })
        }
    </>
  )
}

export default SingleSecurity