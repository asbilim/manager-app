import { View, Text } from 'react-native'
import React from 'react'
import { authStyles } from '../../styles/auth'
import { viewStyles } from '../../styles/view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { homeStyles } from '../../styles/home'
import { Image } from 'react-native'
import { COLORS ,BORDER_RADIUS} from '../../constants'
import { useRouter } from 'expo-router'
import { logo } from '../../constants/image'




const index = () => {

  const router = useRouter()


  return (
    <SafeAreaView style={authStyles.container} >
        
        {/* decoration top buttons */}

        <View style={{flexDirection:"row",width:"100%",justifyContent:"space-around",paddingVertical:32}}>
            <TouchableOpacity onPress={()=>router.push("/")}  style={{backgroundColor:COLORS.white,borderColor:COLORS.primary,borderWidth:1,width:116,height:12,borderRadius:BORDER_RADIUS.large}}></TouchableOpacity>
            <TouchableOpacity  onPress={()=>router.push("/home/step2")}  style={{backgroundColor:COLORS.white,borderColor:COLORS.primary,borderWidth:1,width:116,height:12,borderRadius:BORDER_RADIUS.large}}></TouchableOpacity>
            <TouchableOpacity  style={{backgroundColor:COLORS.primary,width:116,height:12,borderRadius:BORDER_RADIUS.large}}></TouchableOpacity>
        </View>

        {/* decoration top buttons */}


        {/* let's add the image logo */}

            <View style={[{backgroundColor:"transparent",justifyContent:"center",alignItems:"center",gap:4}]}>
                <Image source={logo} style={{width:232,height:232,resizeMode:"contain"}} />
                <View style={{flexDirection:"column",gap:2,justifyContent:"center",alignItems:"center"}}>
                    <Text style={homeStyles.title}>
                        CypherChain
                    </Text>
                    <Text style={homeStyles.subtitle}>
                        Seamless Security
                    </Text>
                </View>
            </View>

        {/* let's add the image logo */}



        {/* let's write for the middle of the page */}

        <View style={[authStyles.verticalContainer,{gap:2,backgroundColor:"transparent"}]}>

            

        </View>
      

        {/* let's write for the middle of the page */}


        {/* this is the bottom of the app for the buttons */}
        <View style={viewStyles.bottomViewPadding}>
            <View 
                style={{width:"100%",height:"100%",flex:1,justifyContent:"center",flexDirection:"column",alignItems:"center",gap:16
            }}>
                <TouchableOpacity style={[authStyles.button,authStyles.buttonLarge]} onPress={()=>router.push("/(auth)/register")}>
                    <Text style={authStyles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[authStyles.buttonOutline,authStyles.buttonLarge]} onPress={()=>router.push("/(auth)/login")}>
                    <Text style={authStyles.buttonOutlineText}>Already have an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default index