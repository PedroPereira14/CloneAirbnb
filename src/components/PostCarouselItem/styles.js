import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        height:120,
        padding:5,
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    innerContainer:{
        flexDirection:'row',
        backgroundColor:"white",
        borderRadius:10,
        overflow:"hidden"
    },
    image:{
        height:"100%",
        aspectRatio: 1,
        resizeMode:"cover",
    },
    bedrooms:{
        marginVertical:10,
        fontSize:16,
        color:"#5b5b5b",
    },
    description:{
        fontSize:15,
        color:"black"
    },
    prices:{
        fontSize:15,
        color:"black",
        marginVertical:10,
    },
    oldPrice:{
        color:"#5b5b5b",
        textDecorationLine: "line-through",
    },
    price:{
        fontWeight:'bold',
    },
    totalPrice:{
        color:"#5b5b5b",
        textDecorationLine: "underline",
    },
});

export default styles;