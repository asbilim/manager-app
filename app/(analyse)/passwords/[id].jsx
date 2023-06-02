import { SafeAreaView, Text } from "react-native";
import { Stack,useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import github from "../../../assets/github.png"
import { Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FONT } from "../../../constants";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ServiceDetail(){

    const router = useRouter()


    return (
        <SafeAreaView style={{flex:1,padding:15,backgroundColor:COLORS.white}}>

            <Stack.Screen 

                options={{
                    headerTitle:()=>{
                        return(
                            <Text style={{fontSize:20}}>Service Detail</Text>
                        )
                    },
                    headerShadowVisible:false,
                    headerTitleAlign:"center",
                    headerTitle:"Security",
                    headerLeft:()=>{
                        return(
                            <TouchableOpacity onPress={()=>{router.back()}} style={{flex:1,flexDirection:"row",alignItems:"center",gap:15,fontFamily:FONT.bold}}>
                                <AntDesign name="arrowleft" size={28} color="black" />
                                <Text style={{fontSize:20}}>Back</Text>
                            </TouchableOpacity>
                        )
                    },
                    headerRight:()=>{
                        return(
                            <Ionicons name="trash-outline" size={28} color={COLORS.error} />
                        )
                    },
                }}

            />

            <ScrollView style={{flex:1}}>

                <View style={{marginVertical:40,flexDirection:"row",justifyContent:"space-around",gap:10,paddingHorizontal:15}}>
                    <Image source={github} style={{width:100,height:100,resizeMode:"contain"}}/>   
                    <View style={{justifyContent:"center",alignItems:"start",gap:15,paddingHorizontal:10}}>
                        <Text style={{fontSize:24,color:COLORS.black,fontWeight:600,fontFamily:FONT.bold}}>Github</Text>
                        <Text style={{fontSize:18,color:COLORS.gray,fontWeight:400,fontFamily:FONT.regular}}>somelongemailaddress@gmail.com</Text>
                    </View>
                </View>

                <View style={{marginVertical:40,flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10,marginHorizontal:15,paddingBottom:15,borderBottomWidth:1,borderBottomColor:COLORS.black}}>
                    <Text style={{fontSize:25,fontFamily:FONT.medium}}>Details & Settings</Text>
                    <SimpleLineIcons name="arrow-down" style={{fontSize:25,fontFamily:FONT.bold}} size={24} color="black" />
                </View>

                <View style={{marginVertical:15,flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10,marginHorizontal:15,paddingBottom:15,borderBottomColor:COLORS.black}}>
                    <Text style={{fontSize:18,fontFamily:FONT.medium}}>Author</Text>
                    <Text style={{fontSize:18,fontFamily:FONT.medium,color:COLORS.gray}}>Ngannouseraphin13</Text>
                </View>
                <View style={{marginVertical:15,flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10,marginHorizontal:15,paddingBottom:15,borderBottomColor:COLORS.black}}>
                    <Text style={{fontSize:18,fontFamily:FONT.medium}}>Login</Text>
                    <Text style={{fontSize:18,fontFamily:FONT.medium,color:COLORS.gray}}>Ngannouseraphin13@gmail.com</Text>
                </View>
                <View style={{marginVertical:15,flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10,marginHorizontal:15,paddingBottom:15,borderBottomColor:COLORS.black}}>
                    <Text style={{fontSize:18,fontFamily:FONT.medium}}>Password</Text>
                    <Text style={{fontSize:18,fontFamily:FONT.medium,color:COLORS.gray}}>*****************</Text>
                </View>


                <View style={{marginVertical:65,flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:10,marginHorizontal:15,paddingBottom:15,borderBottomColor:COLORS.black}}>
                    <TouchableOpacity style={{backgroundColor:COLORS.primary,paddingHorizontal:55,paddingVertical:10}}>
                        <Text style={{fontSize:18,fontFamily:FONT.medium,color:COLORS.white}}>Copy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="rotate-3d-variant" size={50} color="black" />
                    </TouchableOpacity>
                </View>

            </ScrollView>
            

        </SafeAreaView>

    )

}