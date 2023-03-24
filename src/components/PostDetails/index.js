import React from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import styles from './styles';

const PostDetails = (props) => {

    const post = props.post;

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Image */}
                <Image style={styles.image} source={{
                    uri:post.image
                }}/>  
                <View style={styles.viewDesc}>
                    {/* Type and Description */}
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}, {post.title}
                    </Text>
                </View>
                <View style={styles.viewBeds}>
                    {/* Bed and Bedroom */}
                    <Text style={styles.bedrooms}>{post.bed} bed with {post.bedroom} bedroom</Text>
                </View>
                
                <Text style={styles.longDescription}>
                    {post.longDescription}
                </Text>
                <View style={styles.viewPrice}>
                    {/* Old Price and new Price */}
                    <Text style={styles.prices}>
                    <Text style={styles.price}> {post.newPrice}€</Text>
                    /night
                    </Text>
                    <Pressable style={styles.button} onPress={() => console.warn("Reserved")}>
                        <Text style={{fontSize:20, color: "white"}}>Reserve</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
 
export default PostDetails;