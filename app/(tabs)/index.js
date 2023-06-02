import { Text,View } from "react-native"
import { SafeAreaView } from "react-native"
import { Stack,useRouter } from "expo-router"
import { COLORS } from "../../constants"
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native";
import github from "../../assets/github.png"
import { Ionicons } from '@expo/vector-icons';
import SingleService from "../../components/home/singleService";
import services from "../../constants/icons";


export default function Home(){

    const router = useRouter()

    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <Stack.Screen
                options={{
                    headerStyle:{
                        backgroundColor:COLORS.white,
                    },
                    headerShadowVisible:false,
                    headerTitleAlign:"center",
                    headerTitle:"Passwords",
                    headerLeft:()=>{
                        return(
                            <AntDesign name="user" style={{marginHorizontal:10,color:COLORS.gray}} size={35} color={COLORS.black} onPress={()=>{
                                console.log("user test")
                            }} />
                        )
                    },
                    headerTitleStyle:()=>{
                        return (
                            <Text style={{color:COLORS.black,fontSize:135}}>Passwods</Text>
                        )
                    },
                    headerRight:()=>{
                        return(
                            <AntDesign name="plus" style={{marginHorizontal:10,color:COLORS.gray}} size={35} color={COLORS.black} onPress={()=>{
                                console.log("user test")
                            }} />
                        )
                    },
                }}
            />

            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={{marginVertical:10,padding:15}}
            >

                {
                    services.map((element)=>{
                        return (
                            <SingleService 
                                title={element.title}
                                liste={element.liste}
                            />
                        )
                    })
                }

            </ScrollView>
            

        </SafeAreaView>
    )
}