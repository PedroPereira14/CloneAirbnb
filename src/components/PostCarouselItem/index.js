import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const Post = (props) => {
    const post = props.post;
    const width = useWindowDimensions().width;
    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('PostDetails', {postId: post.id})
    }
    return (
        <Pressable onPress={goToPostPage} style={[styles.container, {width: width - 40}]}>
            <View style={styles.innerContainer}>
                {/* Image */}
                <Image style={styles.image} source={{
                    uri:post.image
                }}/>
                <View style={{marginHorizontal:10, flex:1}}>
                {/* Bed and Bedroom */}
                <Text style={styles.bedrooms}>{post.bed} bed with {post.bedroom} bedroom</Text>
                {/* Type and Description */}
                <Text style={styles.description} numberOfLines={2}>
                    {post.type}, {post.title}
                </Text>
                {/* Old Price and new Price */}
                <Text style={styles.prices}>
                    <Text style={styles.price}>{post.newPrice}€</Text>
                    /night
                </Text>
            </View>
        </View>
    </Pressable>
    );
}
 
export default Post;