import { Stack } from "expo-router"
import { useFonts } from "expo-font"
import { useCallback } from "react"
import { SplashScreen } from "expo-router"
import { useLayoutEffect } from "react"


export default function Layout(){


    const [fontsLoaded] = useFonts({
        Regular:require("../assets/fonts/Apercu-Regular.otf"),
        Medium:require("../assets/fonts/Apercu-Medium.otf"),
        Bold:require("../assets/fonts/Apercu-Bold.otf")
    })

    const onLayoutRootView = useCallback(
        async () =>{
            if(fontsLoaded){
                await SplashScreen.hideAsync();
            }
        },[fontsLoaded]
    )

    useLayoutEffect(() => {
        onLayoutRootView();
    }, [onLayoutRootView]);

    return (
        <Stack 
            screenOptions={{
                headerShown: false
            }} 
            onLayout={onLayoutRootView}
        />
    )
}