import { Tabs } from "expo-router"
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { COLORS } from "../../constants";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";


export default function Layout(){

    const router = useRouter()

    const handleConnected = async () =>{
        const isConnected = await AsyncStorage.getItem("isConnected")
        
        if(isConnected != "true"){
            return router.push("/(auth)/")
        }

    }


    useEffect(()=>{
        handleConnected()
    },[])

    const [fonts] = useFonts({
        Regular:require("../../assets/fonts/Apercu-Regular.otf"),
        Medium:require("../../assets/fonts/Apercu-Medium.otf"),
        Bold:require("../../assets/fonts/Apercu-Bold.otf")
    })

    SplashScreen.preventAutoHideAsync()
    .then((()=>console.log("showing the splash screen")))
    .catch(()=>console.warn("something went wrong"))



    if (!fonts) {
        return null
    }

    

    SplashScreen.hideAsync()
    .then(() => console.log('Splash screen hidden'))
    .catch(console.warn);


    return (
        <Tabs
            screenOptions={{
                headerShown:true,
                headerLeft:()=>(
                    <TouchableOpacity style={{padding:12}}>
                        <AntDesign name="user" size={24} color="black" />
                    </TouchableOpacity>
                ),
            }}
        >
            <Tabs.Screen name="index" 
                options={{
                    tabBarIcon: ({ color, size , focused }) => (
                        <TouchableOpacity onPress={()=>{router.push('/(auth)/verification')}}>
                            <AntDesign name="home" size={24} color={focused?COLORS.black:COLORS.gray}  />
                        </TouchableOpacity>
                    ),
                    tabBarShowLabel:false,
                }}
            />
            <Tabs.Screen name="analyze" 
                options={{
                    tabBarIcon: ({ color, size ,focused}) => (
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="skull-scan-outline" size={24} color={focused?COLORS.black:COLORS.gray}/>
                        </TouchableOpacity>
                    ),
                    tabBarShowLabel:false
                }}
            />
            <Tabs.Screen name="search" 
                options={{
                    tabBarIcon: ({ color, size,focused }) => (
                        <TouchableOpacity>
                            <AntDesign name="search1" size={24} color={focused?COLORS.black:COLORS.gray} />
                        </TouchableOpacity>
                    ),
                    tabBarShowLabel:false
                }}
            />
            <Tabs.Screen name="settings" 
                options={{
                    tabBarIcon: ({ color, size,focused }) => (
                        <TouchableOpacity>
                            <Feather name="settings" size={24} color={focused?COLORS.black:COLORS.gray} />
                        </TouchableOpacity>
                    ),
                    tabBarShowLabel:false
                }}
            />
        </Tabs>
    )
}