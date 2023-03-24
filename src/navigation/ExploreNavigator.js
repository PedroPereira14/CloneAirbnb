import React from "react";
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from "../screens/Home";
import SearchResultTabNavigator from "./SearchResultTabNavigator";

const Stack = createStackNavigator();

const Router = (props) => {
    return(
            <Stack.Navigator>
                <Stack.Screen 
                name={"Home"} 
                component={HomeScreen}
                options={{
                    headerShown:false,
                    }}
                />
                <Stack.Screen 
                name={"Search Results"} 
                component={SearchResultTabNavigator}
                options={{
                    title:"Select your destination",
                }}
                />
            </Stack.Navigator>
    );
};

export default Router;