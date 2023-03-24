import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin:20,
    },
    image:{
        width:"100%",
        aspectRatio: 3/2,
        resizeMode:"cover",
        borderRadius: 10,
    },
    bedrooms:{
        marginVertical:10,
        fontSize:16,
        color:"#5b5b5b",
    },
    description:{
        fontSize:22,
        lineHeight:26,
        color:"black"
    },
    prices:{
        fontSize:18,
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
        fontSize:40,
        color:"#000",
        textDecorationLine: "underline",
        marginLeft:140,
    },
    longDescription:{
        color:"#000",
        padding:5,
        fontSize:16,
    },
    viewBeds:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical:5,
    },
    button:{
        marginBottom:20, 
        backgroundColor:"#f15454",
        alignItems:"center",
        justifyContent:"center",
        height:50,
        width:200,
        marginTop:10,
        borderRadius:10,
    },
    viewPrice:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:5,
        borderTopWidth:0.5
    },
    viewDesc:{
        paddingVertical:5,

    }
});

export default styles;