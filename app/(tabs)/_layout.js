import { Stack, Tabs } from "expo-router"
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { COLORS } from "../../constants";
import { useRouter } from "expo-router";


export default function Layout(){

    const router = useRouter();

    return (
        <Tabs
            screenOptions={{
                headerShown:true,
                headerLeft:()=>(
                    <TouchableOpacity>
                        hello
                    </TouchableOpacity>
                ),
                headerRight:()=>(
                    <TouchableOpacity>
                        left
                    </TouchableOpacity>
                )
            }}
        >
            <Tabs.Screen name="index" 
                options={{
                    tabBarIcon: ({ color, size , focused }) => (
                        <TouchableOpacity>
                            <AntDesign name="home" size={24} color={focused?COLORS.black:COLORS.gray}  />
                        </TouchableOpacity>
                    ),
                    tabBarShowLabel:false
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