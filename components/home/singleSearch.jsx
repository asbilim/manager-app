import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { COLORS } from '../../constants'
import { Ionicons } from '@expo/vector-icons';

const SingleSearch = ({title,liste}) => {
  return (
    <>
        {
            liste.map((item,index)=>{
                return (
                    <View style={{paddingVertical:20,justifyContent:"space-between",alignItems:"center",flexDirection:"row",gap:5}} key={index}>
                        <Image source={item.image} style={{width:55,height:55,resizeMode:"contain"}} />
                        <View style={{flex:1,flexDirection:"column",gap:"5",alignItems:"start",justifyContent:"center",paddingHorizontal:4}}>
                            <Text style={{fontSize:18,color:COLORS.black,fontWeight:"500"}}>{item.service_name}</Text>
                            <Text style={{fontSize:16,color:COLORS.gray}}>{item.login}</Text>
                        </View>
                        <Ionicons name="ios-copy-outline" size={24} color="black" onPress={()=>{console.log("copied successfully")}} />
                    </View>
                )
            })
        }
    </>
  )
}

export default SingleSearch