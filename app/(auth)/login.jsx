import { View, Text } from 'react-native'
import React from 'react'
import { authStyles } from '../../styles/auth'
import { viewStyles } from '../../styles/view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { homeStyles } from '../../styles/home'
import { Image } from 'react-native'
import { COLORS ,BORDER_RADIUS, SIZES} from '../../constants'
import { useRouter } from 'expo-router'
import { logo } from '../../constants/image'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native'





const index = () => {

  const router = useRouter()


  return (
    
    <SafeAreaView style={authStyles.startContainer} >


        {/* let's add the image logo */}

            <View style={[{backgroundColor:"transparent",justifyContent:"center",alignItems:"center"}]}>
                <Image source={logo} style={{width:120,height:120,resizeMode:"contain"}} />
                <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
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

        <View style={[authStyles.simpleVerticalContainer,{gap:4,borderRadius:BORDER_RADIUS.medium,borderWidth:1,borderColor:COLORS.primary,width:384,height:320,paddingVertical:28,paddingHorizontal:19,alignItems:"center",justifyContent:"start"}]}>

            <View style={[authStyles.containerAround,{borderWidth:1,borderColor:COLORS.black,flexDirection:"row",height:57,width:346,borderRadius:BORDER_RADIUS.medium}]}>
                <TouchableOpacity onPress={()=>{router.push("/(auth)/register")}} >
                    <Text style={{color:COLORS.black,fontSize:SIZES.large}} >Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[authStyles.buttonFilledBlack]} onPress={()=>{router.push("/(auth)/login")}}>
                    <Text style={[authStyles.buttonFilledBlackText]}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:"start",width:"100%",paddingVertical:SIZES.medium}}>
                <Text style={{fontSize:SIZES.large}}>Personal details</Text>
            </View>
            <View style={[authStyles.verticalContainer,{gap:4,justifyContent:"flex-start"}]}>
                <TextInput placeholder='Username' style={authStyles.input} />
                <TextInput placeholder='Password' secureTextEntry style={authStyles.input} />
            </View>
        </View>

      

        {/* let's write for the middle of the page */}


        {/* this is the bottom of the app for the buttons */}
        <View style={viewStyles.bottomViewPadding}>
            <View 
                style={{width:"100%",height:"100%",flex:1,justifyContent:"center",flexDirection:"column",alignItems:"center",paddingBottom:15
            }}>
                <TouchableOpacity disabled style={[authStyles.buttonOutline,authStyles.buttonLarge]} onPress={()=>router.push("/(auth)/login")}>
                    <Text style={authStyles.buttonOutlineText}>Get Verification Code</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default index