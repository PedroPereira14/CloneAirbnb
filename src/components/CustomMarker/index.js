import React from "react";
import { View, Text } from "react-native";
import {Marker} from "react-native-maps";

const CustomMarker = (props) => {
    const {coordinate, price, onPress, isSelected} = props;
    return(
        <Marker coordinate={coordinate} onPress={onPress}>
            <View style={{
                backgroundColor: isSelected ? "white" : "black", 
                padding: 5,
                borderRadius:20,
                borderColor:"black",
                borderWidth:1,

            }}>
                <Text style={{color: isSelected ? "black" : "white", fontWeight:"bold", fontSize:16}}>{price}€</Text>
            </View>
        </Marker>
    )
}

export default CustomMarker;