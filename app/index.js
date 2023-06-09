import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { authStyles } from '../styles/auth'
import { viewStyles } from '../styles/view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { homeStyles } from '../styles/home'
import { tick } from '../constants/image'
import { Image } from 'react-native'
import { COLORS ,BORDER_RADIUS} from '../constants'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'





const index = () => {

  const [connected,setConnected] = useState(connected=>false)

  const router = useRouter()


    const handleConnected = async () =>{
        const isConnected = await AsyncStorage.getItem("isConnected")
        
        
        if(isConnected != "true"){
            router.push("/(auth)/")
        }

    }


    useEffect(async ()=>{
        const isConnected = await AsyncStorage.getItem("isConnected")
        setConnected(connected=>isConnected)
        handleConnected()
    },[])




  return (
    <SafeAreaView style={authStyles.container} >
        
        {/* decoration top buttons */}

        <View style={{flexDirection:"row",width:"100%",justifyContent:"space-around",paddingVertical:32}}>
            <TouchableOpacity  style={{backgroundColor:COLORS.primary,width:116,height:12,borderRadius:BORDER_RADIUS.large}}></TouchableOpacity>
            <TouchableOpacity onPress={()=>router.push("/(tabs)/search")}  style={{backgroundColor:COLORS.white,borderColor:COLORS.primary,borderWidth:1,width:116,height:12,borderRadius:BORDER_RADIUS.large}}></TouchableOpacity>
            <TouchableOpacity onPress={()=>router.push("/home/step3")}  style={{backgroundColor:COLORS.white,borderColor:COLORS.primary,borderWidth:1,width:116,height:12,borderRadius:BORDER_RADIUS.large}}></TouchableOpacity>
        </View>

        {/* decoration top buttons */}


        {/* let's add the image logo */}

            <View style={[{backgroundColor:"transparent"}]}>
                <Image source={tick} style={{width:232,height:232,resizeMode:"contain"}} />
            </View>

        {/* let's add the image logo */}



        {/* let's write for the middle of the page */}

        <View style={[authStyles.verticalContainer,{gap:2,backgroundColor:"transparent"}]}>

            <Text style={[homeStyles.cardTitle]}>
                Security
            </Text>
            <Text style={homeStyles.cardTitle}>
                Coontrol your security
            </Text>
            <Text style={homeStyles.cardText}>
                This application is build on blockchain so that you can get 100% security across websites & applications with single app.
            </Text>

        </View>
      

        {/* let's write for the middle of the page */}


        {/* this is the bottom of the app for the buttons */}
        <View style={viewStyles.bottomViewPadding}>
            <View 
                style={{width:"100%",height:"100%",flex:1,justifyContent:"center",flexDirection:"column",alignItems:"center",gap:16
            }}>
                <TouchableOpacity style={[authStyles.button,authStyles.buttonLarge]} onPress={()=>{
                    connected ? (
                        router.push('/(tabs)/')
                        ):(
                        router.push("/(auth)/register")
                    )
                }}>
                    <Text style={authStyles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[authStyles.buttonOutline,authStyles.buttonLarge]} onPress={()=>{
                    connected ? (
                        router.push('/(tabs)/')
                        ):(
                        router.push("/(auth)/login")
                    )
                }}>
                    <Text style={authStyles.buttonOutlineText}>Already have an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default index