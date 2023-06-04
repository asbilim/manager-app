import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { COLORS } from '../../constants'
import { SimpleLineIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import checkPassword from '../../hooks/checkpassword';

const WEAK_RANGE = [0, 20];
const RISK_RANGE = [21, 40];
const STRONG_RANGE = [41, 60];
const SAFE_RANGE = [61, 80];

function checkRange(number) {
  if (number >= WEAK_RANGE[0] && number <= WEAK_RANGE[1]) {
    return {"verdict":"weak","color":COLORS.error};
  } else if (number >= RISK_RANGE[0] && number <= RISK_RANGE[1]) {
    return {"verdict":"risk","color":COLORS.error};
  } else if (number >= STRONG_RANGE[0] && number <= STRONG_RANGE[1]) {
    return {"verdict":"strong","color":COLORS.orange};
  } else if (number >= SAFE_RANGE[0] && number <= SAFE_RANGE[1]) {
    return {"verdict":"safe","color":COLORS.success};
  } else {
    return {"verdict":"weak","color":COLORS.error};;
  }
}

const SingleSecurity = ({title,liste}) => {

    const router = useRouter();

  return (
    <>
        {
            liste.map((item,index)=>{
                
                const {verdict,color} = checkRange(item.score)

                return (
                    <View style={{paddingVertical:20,justifyContent:"space-between",alignItems:"center",flexDirection:"row",gap:5}} key={index} >
                        <View style={{flexDirection:"column",gap:"5",alignItems:"center",justifyContent:"center",paddingHorizontal:4}}>
                            <Image source={item.image} style={{width:55,height:55,resizeMode:"contain"}} />
                            <Text style={{fontSize:16,color:COLORS.gray}}>{verdict}</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"column",gap:"5",alignItems:"center",justifyContent:"center",paddingHorizontal:4}}>
                            <Text style={{fontSize:18,color:COLORS.black,fontWeight:"500"}}>{item.service_name}</Text>
                            <Text style={{fontSize:16,color:COLORS.gray}}>{item.login}</Text>
                            <View style={{height:4,backgroundColor:color,borderRadius:15,width:"100%"}}></View>
                        </View>
                        <SimpleLineIcons name="arrow-right" size={24} color="black" onPress={()=>router.replace('/(search)/')} />
                    </View>
                )
            })
        }
    </>
  )
}

export default SingleSecurity