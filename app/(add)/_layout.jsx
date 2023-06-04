import { Stack } from "expo-router"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useRouter } from "expo-router"
import Toast from 'react-native-toast-message';

export default function Layout(){

    const router = useRouter()

    const handleConnected = async () =>{
        const isConnected = await AsyncStorage.getItem("isConnected")
        
        if(isConnected != "true"){
            return router.push("/(auth)/login")
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
    .then(() => console.log('hidden the spashcreen'))
    .catch(console.warn);

    return (
        <Stack>
            <Toast />
        </Stack>
    )
}