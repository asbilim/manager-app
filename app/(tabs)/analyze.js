import { Text,View,ActivityIndicator, Dimensions } from "react-native"
import { SafeAreaView } from "react-native"
import { Stack,useRouter } from "expo-router"
import { COLORS,FONT } from "../../constants"
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import SingleSecurity from "../../components/home/serviceSecurity";
import services from "../../constants/icons";
import * as Progress from "react-native-progress"
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { socialMediaPlatforms } from "../../constants/icons";
import { countPasswords } from "../../functions/password";
import { generatePassword } from "../../hooks/checkpassword";
import { calculateAverageScore } from "../../functions/password";

function convertTable(table) {
    const categories = {
      work: "Work",
      priority: "Priority",
      entertainment: "Entertainment",
      others: "Others",
      games: "Games",
      education: "Education"
    };
  
    const table2 = Object.values(categories).map((category) => ({
      title: category,
      liste: []
    }));
  
    table.forEach((item) => {
   
      const category = categories[item.category];
    
      const image = socialMediaPlatforms.find(element =>
        element.name.toLowerCase() == item.image.toLowerCase()
      );
      
      if (category) {
        table2.find((c) => c.title === category).liste.push({
          service_name: item.service_name,
          login: item.login,
          image: image ? image.picture : null,
          score:item.score
        });
      }
    });
  
    // Filter out categories with empty lists
    const filteredTable2 = table2.filter((category) => category.liste.length > 0);
  
    return filteredTable2;
}

export default function Home(){

    const [score,setScore] = useState(20)
    const [isLoading,setIsLoading] = useState(true)
    const height = Dimensions.get('window')
    const [service,setService] = useState(services)
    const [verdict,setVerdict] = useState(verdict=>[])

    const [securityAverage,setSecurityAverage] = useState(securityAverage=>score)
    const circleColor = securityAverage < 50 && securityAverage > 0 ? COLORS.error : securityAverage > 50 && securityAverage < 75 ? COLORS.orange : COLORS.success;
    const router = useRouter()

    useEffect(() => {

        AsyncStorage.getItem('userToken').then(token => {
          const options = {
            method: 'GET',
            url: 'http://192.168.43.121:8000/api/manager/service/',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
          };
      
        axios
        .request(options)
        .then(response => {
            const data = response.data;
            const passwords = countPasswords(data);
            const { score } = calculateAverageScore(data);
            setSecurityAverage(score);
            setVerdict(countPasswords(data));
            setService(convertTable(data));
            setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
        });
    }, []);

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
                                router.replace("/(add)/")
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
                    isLoading?(
                    <View style={[{height:height.height-300,justifyContent:"center",alignItems:"center"}]} >
                        <ActivityIndicator size="large"   color={COLORS.orange}  />
                        <Text>Loading...</Text>
                    </View>
                    ):(
                        <>
                        <View style={{flex:1,marginVertical:40,justifyContent:"center",alignItems:"center",gap:25}}>
                            <Progress.Circle  thickness={10} direction="clockwise"  formatText={()=>securityAverage+"%"} showsText={true} color={circleColor} progress={securityAverage/100} size={150}  />
                            <Text style={{fontSize:18}}>{securityAverage}% Secured</Text>
                        </View>

                        <View style={{flex:1,marginVertical:40,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                        
                            
                            {verdict.map(item=>(
                                <View style={{justifyContent:"center",borderWidth:1,borderColor:COLORS.black,alignItems:"center",padding:24,borderRadius:15,gap:5}} key={generatePassword(25)}>
                                    <Text style={{fontSize:22,fontFamily:FONT.bold}}>{item.count}</Text>
                                    <Text style={{fontSize:22,fontFamily:FONT.regular,color:COLORS.gray}}>{item.verdict}</Text>
                                </View>
                            ))}
                            

                        </View>
                        
                        {
                        service.map((element)=>{
                           
                            return (
                                <SingleSecurity 
                                    key={generatePassword(25)}
                                    title={element.service_name}
                                    liste={element.liste}
                                />
                            )
                        })
                             }
                        
                        </>
                    )

                }

            </ScrollView>
            

        </SafeAreaView>
    )
}
