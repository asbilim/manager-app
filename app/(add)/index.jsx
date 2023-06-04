import { Stack,useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { Text,View,TextInput } from "react-native";
import { COLORS,FONT } from "../../constants";
import { AntDesign } from '@expo/vector-icons';
import {TouchableOpacity} from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { generatePassword } from "../../hooks/checkpassword";
import checkPassword from "../../hooks/checkpassword";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Picker} from '@react-native-picker/picker';
import { socialMediaPlatforms } from "../../constants/icons";
import axios from "axios"
import Toast from 'react-native-toast-message';
import { useRef } from "react";

export default function Search(){

    
    const [borderColor,setBorderColor] = useState(borderColor=>"#888")
    const router = useRouter()
    const [passwordLen, setPasswordLen] = useState(12);
    const [password, setPassword] = useState("")
    const [scoreValue,setScoreValue] = useState(scoreValue=>0)
    const [changed,setChanged] = useState(false)
    const [serviceName,setServiceName] = useState(serviceName=>"")
    const [login,setLogin] = useState(login=>"")
    const [image,setImage] = useState(image=>"")
    const [loading,setLoading] = useState(loading=>false)
    const toastRef = useRef(null);
    const [category,setCategory] = useState(category=>"")


    const categories = [
        { value: "work", label: "work" },
        { value: "priority", label: "priority" },
        { value: "entertainment", label: "entertainment" },
        { value: "others", label: "others" },
        { value: "games", label: "games" },
        { value: "education", label: "education" },
      ];
    



    const handleSubmit = async ()=> {

        const token  = await AsyncStorage.getItem("userToken")
        const {score} = checkPassword(password)
        const tempData = {
            "name":serviceName,
            "login":login,
            "password":password,
            "image":image,
            "category":category,
            "score":score
        }

        const options = {
            method: "POST",
            url:"http://192.168.43.121:8000/api/manager/service/",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: JSON.stringify(tempData)
        }

        try {
            const response = await axios.request(options)
            const data = response.data
          
        
            Toast.show({
                type: 'success',
                text1: 'success',
                text2: "password added successfully",
                position:"bottom",
                visibilityTime:8000
            });
        }
        catch (error) {
            Toast.show({
            type: 'error',
            text1: 'Error',
            text2: "service name already exists",
            position:"bottom"
            });
           
        }
        

    }

    const getCircleColor = (score) => {
        if (score < 50 && score > 0) {
          return COLORS.error;
        } else if (score >= 50 && score < 75) {
          return COLORS.orange;
        } else if (score >= 75) {
          return COLORS.success;
        } else {
          // Handle invalid score values
          return COLORS.gray;
        }
    };

    const handlePasswordChange = () => {
        if (changed){
            const { score } = checkPassword(password);
            setScoreValue(scoreValue=>score)
            setBorderColor(getCircleColor(scoreValue));
            
        }
      };

    const [addNumbers,setAddNumbers] = useState(true)
    const [addLower,setAddLower] = useState(true)
    const [addUpper,setAddUpper] = useState(true)
    const [addSymbols,setAddSymbols] = useState(true)


    const handleSliderValueChange = (newValue) => {
        setPasswordLen(newValue);
    };



    return (
        <SafeAreaView style={{flex:1,padding:15,backgroundColor:COLORS.white}}>
            
            <Stack.Screen
                options={{
                    headerShadowVisible:false,
                    headerTitle:()=>(
                        <Text style={{fontSize:20}}>New Record</Text>
                    ),
                    headerLeft:()=>(
                        <TouchableOpacity onPress={()=>{router.push('/(tabs)/')}} style={{flex:1,flexDirection:"row",alignItems:"center",gap:15,fontFamily:FONT.bold}}>
                            <AntDesign name="arrowleft" size={28} color="black" />
                            <Text style={{fontSize:20}}>Back</Text>
                        </TouchableOpacity>
                    )
                }}
            />


            <ScrollView style={{flex:1,backgroundColor:COLORS.white}}>


                <View style={{marginVertical:50,flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",paddingHorizontal:20}}>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center"}}>
                        <Text style={{fontSize:24}}>Name</Text>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10,paddingLeft:20}}>
                            <TextInput initialValue={serviceName} onChangeText={(value)=>setServiceName(serviceName=>value)} placeholder="website or app name" style={{borderBottomWidth:1,flex:1,borderBottomColor:"#808080",fontSize:20}} />
                            <AntDesign name="checkcircleo" size={24} color="#808080" />
                        </View>
                    </View>
                </View>

                <View style={{paddingBottom:40,borderBottomColor:"#808080",borderBottomWidth:3,flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",marginHorizontal:20}}>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center"}}>
                        <Text style={{fontSize:24}}>Login</Text>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10,paddingLeft:20}}>
                            <TextInput initialValue={login} onChangeText={(value)=>setLogin(value)} placeholder="username , email or phone..." style={{borderBottomWidth:1,flex:1,borderBottomColor:"#808080",fontSize:20}} />
                            <AntDesign name="checkcircleo" size={24} color="#808080" />
                        </View>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:"row",gap:10,marginTop:20,alignItems:"center",justifyContent:"center"}}>
                        <View style={{flex:1}}>
                                <View style={{flex:1,paddingTop:50,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{fontSize:28,fontFamily:FONT.medium}}>Icon</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <Picker
                                        selectedValue={image}
                                        onValueChange={(itemValue) => setImage(itemValue)}>
                                        {
                                            socialMediaPlatforms.map((item, index) => (
                                                <Picker.Item key={index} label={item.name.toLowerCase()} value={item.name.toLowerCase()} />
                                            ))
                                        }
                                        <Picker.Item label="Facebook" value="facebook" />
                                        
                                    </Picker>
                                </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flex:1,paddingTop:50,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontSize:28,fontFamily:FONT.medium}}>Category</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Picker
                                    selectedValue={category}
                                    onValueChange={(itemValue) => setCategory(itemValue)}>
                                    {
                                        categories.map((item, index) => (
                                            <Picker.Item key={index} label={item.value.toLowerCase()} value={item.value.toLowerCase()} />
                                        ))
                                    }
                                    <Picker.Item label="Facebook" value="facebook" />
                                    
                                </Picker>
                            </View>
                        </View>
                </View>
                
                <View style={{flex:1,paddingBottom:50,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:28,fontFamily:FONT.medium}}>Password</Text>
                </View>

                <View style={{flex:1,marginHorizontal:20,alignItems:"center",justifyContent:"space-between",flexDirection:"row",borderWidth:1,borderBottomColor:getCircleColor(scoreValue),padding:18,borderBottomWidth:10}}>
                    <TextInput defaultValue={password}  editable={false} style={{flex:1,fontSize:20}} onChangeText={handlePasswordChange} />
                    <Feather name="refresh-ccw" size={24} color="black"  onPress={()=>{setPassword(generatePassword(passwordLen,addNumbers,addSymbols,addLower,addUpper));handlePasswordChange()}}/>
                </View>

                <View style={{paddingVertical:40,flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",marginHorizontal:20}}>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center"}}>
                        <Text style={{fontSize:24}}>Lenght</Text>
                        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10,paddingLeft:20}}>
                            <TextInput
                                defaultValue={passwordLen.toString()}
                                keyboardType="numeric"
                                style={{ borderWidth: 1, borderColor: "#808080", padding: 10, paddingHorizontal: 15 }}
                            />
                            <Slider
                                value={passwordLen}
                                maximumValue={40}
                                lowerLimit={10}
                                step={1}
                                onValueChange={handleSliderValueChange}
                                style={{ borderBottomWidth: 1, flex: 1, borderBottomColor: "#808080", fontSize: 20 }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{paddingVertical:20,flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",marginHorizontal:20}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",gap:20,alignItems:"center"}}>
                        <Text style={{fontSize:24}}>Numbers</Text>
                        <Checkbox value={addNumbers} onValueChange={()=>{setAddNumbers(!addNumbers)}}/>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",gap:20,alignItems:"center"}}>
                        <Text style={{fontSize:24}}>Lowercase</Text>
                        <Checkbox value={addLower} onValueChange={()=>{setAddLower(!addLower)}}/>
                    </View>
                </View>
                <View style={{paddingVertical:20,flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",marginHorizontal:20}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",gap:20,alignItems:"center"}}>
                        <Text style={{fontSize:24}}>Uppercase</Text>
                        <Checkbox value={addUpper} onValueChange={()=>{setAddUpper(!addUpper)}}/>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",gap:20,alignItems:"center"}}>
                        <Text style={{fontSize:24}}>Symbols</Text>
                        <Checkbox value={addSymbols}  onValueChange={()=>{setAddSymbols(!addSymbols)}}/>
                    </View>
                </View>
                <View style={{paddingVertical:40,flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",marginHorizontal:20}}>
                    <TouchableOpacity style={{borderWidth:1,borderColor:"#888",paddingHorizontal:28,paddingVertical:13}}
                        onPress={()=>{
                            setChanged(true)
                            setPassword(generatePassword(passwordLen,addNumbers,addSymbols,addLower,addUpper))  
                            const {score} = checkPassword(password)
                            setBorderColor(getCircleColor(score))
                            handlePasswordChange()
                        }}
                    >
                        <Text style={{fontSize:24}}>Generate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSubmit}>
                        <AntDesign name="save" size={35} color="black"  />
                    </TouchableOpacity>
                </View>
                <View style={{paddingVertical:40,flex:1,flexDirection:"row",justifyContent:"center",gap:10,alignItems:"center",marginHorizontal:20}}>
                    <TouchableOpacity style={{borderWidth:1,flex:1,borderColor:"#888",paddingHorizontal:40,paddingVertical:13,backgroundColor:COLORS.black}}>
                        <Text style={{fontSize:24,color:COLORS.white}}>Enter Manually</Text>
                    </TouchableOpacity>
                </View>

                <Toast ref={toastRef} />

            </ScrollView>

        </SafeAreaView>
    )

}