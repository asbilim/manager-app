import { View, Text, Keyboard } from 'react-native'
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
import { TextInput } from 'react-native'
import { useRef } from 'react'



const index = () => {

  const router = useRouter()

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleInputChange = (text, inputRef) => {
    if (text.length > 0 && inputRef) {
      inputRef.current.focus();
    }
    if (text.length === 0 && inputRef) {
      inputRef.current.blur();
    }
    if (text.length > 0 && inputRef === input4Ref) {
      Keyboard.dismiss();
    }
  };


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

        <View style={[authStyles.simpleVerticalContainer,{gap:4,borderRadius:BORDER_RADIUS.medium,borderWidth:1,borderColor:COLORS.primary,width:384,height:180,paddingVertical:40,paddingHorizontal:19,alignItems:"center",justifyContent:"flex-start"}]}>
            
            <Text style={homeStyles.cardTitle}>Enter Verification Code</Text>
            <View style={[authStyles.containerAround,{flexDirection:"row",height:57,width:346,borderRadius:BORDER_RADIUS.medium}]}>
                <TextInput
                    style={[authStyles.smallInput]}
                    inputMode='numeric'
                    onChangeText={(text) => handleInputChange(text, input1Ref)}
                />
                <TextInput
                    ref={input1Ref}
                    style={[authStyles.smallInput]}
                    inputMode='numeric'
                    onChangeText={(text) => handleInputChange(text, input2Ref)}
                />
                <TextInput
                    ref={input2Ref}
                    style={[authStyles.smallInput]}
                    inputMode='numeric'
                    onChangeText={(text) => handleInputChange(text, input3Ref)}
                />
                <TextInput
                    ref={input3Ref}
                    style={[authStyles.smallInput]}
                    inputMode='numeric'
                    onChangeText={(text) => {handleInputChange(text, input3Ref);Keyboard.dismiss()}}
                    onChange={()=>Keyboard.dismiss()}
                />         
            </View>
        </View>

      

        {/* let's write for the middle of the page */}


        {/* this is the bottom of the app for the buttons */}
        <View style={viewStyles.bottomViewPadding}>
            <View 
                style={{width:"100%",height:"100%",flex:1,justifyContent:"center",flexDirection:"column",alignItems:"center",paddingBottom:15
            }}>
                <TouchableOpacity  disabled style={[authStyles.buttonOutline,authStyles.buttonLarge]} onPress={()=>router.push("/(auth)/login")}>
                    <Text style={authStyles.buttonOutlineText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default index