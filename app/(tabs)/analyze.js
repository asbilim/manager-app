import { Text,View } from "react-native"
import { SafeAreaView } from "react-native"
import { Stack,useRouter } from "expo-router"
import { COLORS,FONT } from "../../constants"
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import SingleSecurity from "../../components/home/serviceSecurity";
import services from "../../constants/icons";
import checkPassword from "../../hooks/checkpassword";
import * as Progress from "react-native-progress"

export default function Home(){

    console.log(checkPassword("Zx9!yT3@wQ6#rE7$mU8%hJ1&nK2*"))

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
                    headerTitle:()=>(
                      <Text style={{fontSize:25}}>Security</Text>
                    ),
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

                <View style={{flex:1,marginVertical:40,justifyContent:"center",alignItems:"center",gap:25}}>
                  <Progress.Circle  thickness={10} direction="clockwise"  formatText={()=>"80%"} showsText={true} color={COLORS.success} progress={0.8} size={150}  />
                  <Text style={{fontSize:18}}>80% Secured</Text>
                </View>

                <View style={{flex:1,marginVertical:80,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                  
                    {
                      [1,2,3].map(item=>(
                        <View style={{justifyContent:"center",borderWidth:1,borderColor:COLORS.black,alignItems:"center",padding:24,borderRadius:15,gap:5}} key={item}>
                            <Text style={{fontSize:22,fontFamily:FONT.bold}}>82</Text>
                            <Text style={{fontSize:22,fontFamily:FONT.regular,color:COLORS.gray}}>Safe</Text>
                        </View>
                      ))
                    }

                </View>

                {
                    services.map((element)=>{
                        return (
                            <SingleSecurity
                                key={element.title}
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
