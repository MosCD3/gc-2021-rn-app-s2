import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import LoginPage from "../screens/LoginPage";
import SignUpPage from "../screens/SignUp";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import HomeTab from "../screens/HomeTab";
import ProfileTab from "../screens/ProfileTab";


const Tabs = createBottomTabNavigator()


const AfterLoginPage = () => {
    return (
        <Tabs.Navigator screenOptions={{

        }}>
            <Tabs.Screen name="route-home" component={HomeTab} 
            options={{ 
                title:"Main",
                tabBarIcon:({ color, size })=>( <MaterialCommunityIcons name="home-variant" size={24} color={color} />)
                }}/>
            <Tabs.Screen name="route-settings" component={ProfileTab} 
            options = {{
                title: "Profile",
                tabBarIcon:({ color, size })=>( <MaterialCommunityIcons name="face-profile" size={24} color={color} />)
            }} />
        </Tabs.Navigator>
    )
}

export default AfterLoginPage;