import { View, Text } from 'react-native'
import React from 'react'
import { authStyles } from '../../styles/auth'
import { viewStyles } from '../../styles/view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { homeStyles } from '../../styles/home'
import { tick } from '../../constants/image'
import { Image } from 'react-native'
import { COLORS ,BORDER_RADIUS} from '../../constants'
import { useRouter } from 'expo-router'
import { box } from '../../constants/image'





const cardsData = [
    {
        isActive:true,
        name:"foo"
    },
    {
        isActive:false,
        name:"bar"
    },
    {
        isActive:false,
        name:"and"
    },
]




const index = () => {

  const router = useRouter()


  return (
    <SafeAreaView style={authStyles.container} >
        
        {/* decoration top buttons */}

        <View style={{flexDirection:"row",width:"100%",justifyContent:"space-around",paddingVertical:32}}>
            <TouchableOpacity onPress={()=>router.push("/")}  style={{backgroundColor:COLORS.white,borderColor:COLORS.primary,borderWidth:1,width:116,height:12,borderRadius:BORDER_RADIUS.large}}></TouchableOpacity>
            <TouchableOpacity  style={{backgroundColor:COLORS.primary,width:116,height:12,borderRadius:BORDER_RADIUS.large}}></TouchableOpacity>
            <TouchableOpacity  style={{backgroundColor:COLORS.white,borderColor:COLORS.primary,borderWidth:1,width:116,height:12,borderRadius:BORDER_RADIUS.large}}></TouchableOpacity>
        </View>

        {/* decoration top buttons */}


        {/* let's add the image logo */}

            <View style={[{backgroundColor:"transparent",justifyContent:"center",alignItems:"center"}]}>
                <Image source={box} style={{width:232,height:232,resizeMode:"contain"}} />
            </View>

        {/* let's add the image logo */}



        {/* let's write for the middle of the page */}

        <View style={[authStyles.verticalContainer,{gap:2,backgroundColor:"transparent"}]}>

            <Text style={[homeStyles.cardTitle]}>
                Fast
            </Text>
            <Text style={homeStyles.cardTitle}>
                Everything in single click
            </Text>
            <Text style={homeStyles.cardText}>
            Add, genreate, store, transfer, sync, export & copy all your passwords in single click. Use autofill for quick action without opening app.
            </Text>

        </View>
      

        {/* let's write for the middle of the page */}


        {/* this is the bottom of the app for the buttons */}
        <View style={viewStyles.bottomViewPadding}>
            <View 
                style={{width:"100%",height:"100%",flex:1,justifyContent:"center",flexDirection:"column",alignItems:"center",gap:16
            }}>
                <TouchableOpacity style={[authStyles.button,authStyles.buttonLarge]}>
                    <Text style={authStyles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[authStyles.buttonOutline,authStyles.buttonLarge]}>
                    <Text style={authStyles.buttonOutlineText}>Already have an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default index