import { Text,View } from "react-native"
import { SafeAreaView } from "react-native"
import { Stack,useRouter } from "expo-router"
import { COLORS } from "../../constants"
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import SingleService from "../../components/home/singleService";
import services from "../../constants/icons";
import { useEffect ,useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import { Dimensions } from "react-native";
import { socialMediaPlatforms } from "../../constants/icons";

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
      const score = item.score
   
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

    const height = Dimensions.get('window')

    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(false)
    const [service,setService] = useState(services)

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
            const formattedData = convertTable(data);
            setService(formattedData);
            setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
        });
    }, []);

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
                    isLoading ? (

                        <View style={[{height:height.height-300,justifyContent:"center",alignItems:"center"}]} >
                            <ActivityIndicator size="large"   color={COLORS.orange}  />
                            <Text>Loading...</Text>
                        </View>
                    ):(
                        
                        service.map((element)=>{
                            return (
                                <SingleService 
                                    key={element.title}
                                    title={element.title}
                                    liste={element.liste}
                                />
                            )
                        })
                        
                    )
                }
                

            </ScrollView>
            

        </SafeAreaView>
    )
}