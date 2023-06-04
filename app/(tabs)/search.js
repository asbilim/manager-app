import { Stack,useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { Text,View,TextInput } from "react-native";
import { COLORS,FONT } from "../../constants";
import { AntDesign } from '@expo/vector-icons';
import services from "../../constants/icons";
import SingleSearch from "../../components/home/singleSearch";

export default function Search(){


    return (
        <SafeAreaView style={{flex:1,padding:15}}>
            
            <Stack.Screen
                options={{
                    headerShadowVisible:false,
                    headerTitle:"",
                    headerLeft:""
                }}
            />

            <ScrollView style={{flex:1,backgroundColor:COLORS.white}} showsVerticalScrollIndicator={false} >

                <View style={{flex:1,marginHorizontal:20,paddingVertical:15,paddingHorizontal:20,backgroundColor:"#F2F2F2",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <TextInput style={{padding:5,fontFamily:FONT.regular,fontSize:18}} placeholder="search here..." />
                    <AntDesign name="search1" size={24} color="black" />
                </View>
                <View style={{marginVertical:10,padding:15}}>
                  {
                      services.map((element)=>{
                          return (
                              <SingleSearch
                                  key={element.title}
                                  title={element.title}
                                  liste={element.liste}
                              />
                          )
                      })
                  }
                </View>

            </ScrollView>

        </SafeAreaView>
    )

}