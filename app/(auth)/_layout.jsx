import { Stack } from "expo-router"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"


export default function Layout(){

    
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
        <Stack 
            screenOptions={{
                headerShown: false
            }} 
        />
    )
}