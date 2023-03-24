import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home";
import ExploreNavigator from "./ExploreNavigator";

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchResultMap from "../screens/SearchResultMap";
import PostScreen from "../screens/PostScreen";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return(
        <Tab.Navigator tabBarOptions={{
            activeTintColor:'#f15454'
        }}>
            <Tab.Screen 
            name={"Explore"} 
            component={ExploreNavigator}  
            //component={PostScreen} 
            options={{
                headerShown:false,
                tabBarIcon:({color: red }) => (
                    <Fontisto name="search" size={25} color={red} />
                )
            }}
            />
            <Tab.Screen 
            name={"Saved"} 
            component={HomeScreen}
            options={{
                headerShown:false,
                tabBarIcon:({red}) => (
                    <FontAwesome name="heart-o" size={25} color={red} />
                )
            }}
            />
            <Tab.Screen 
            name={"Airbnb"} 
            component={HomeScreen}
            options={{
                headerShown:false,
                tabBarIcon:({color: red }) => (
                    <FontAwesome5 name="airbnb" size={25} color={red} />
                )
            }}
            />
            <Tab.Screen 
            name={"Messages"} 
            component={HomeScreen}
            options={{
                headerShown:false,
                tabBarIcon:({color: red }) => (
                    <Feather name="message-square" size={25} color={red} />
                )
            }}
            />
            <Tab.Screen 
            name={"Profile"} 
            component={HomeScreen}
            options={{
                headerShown:false,
                tabBarIcon:({color: red }) => (
                    <EvilIcons name="user" size={25} color={red} />          
                    )
            }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;