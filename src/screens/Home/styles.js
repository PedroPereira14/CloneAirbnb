import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: "cover",
        justifyContent: "center",
    },
    title: {
        fontSize: 80,
        fontWeight: "bold",
        color:"white",
        width:'70%',
        padding: 10,
    },
    button:{
        backgroundColor:"white",
        width:200,
        padding:10,
        marginLeft:10,
        marginTop:15,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        fontSize:16,
        fontWeight: "bold",
        color:"black",
    },
    searchButton:{
        backgroundColor:"white",
        padding:14,
        borderRadius:25,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        position: "absolute",
        top:40,
        width:Dimensions.get('screen').width -20,
        marginHorizontal:10,
        zIndex:100,
    },
    searchButtonText:{
        fontSize:16,
        fontWeight: "bold",
        color:"black",
    },
});

export default styles;