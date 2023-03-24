import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {
    const post = props.post;
    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('PostDetails', {postId: post.id})
    }

    return (
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{
                uri:post.image
            }}/>
            {/* Bed and Bedroom */}
            <Text style={styles.bedrooms}>{post.bed} bed with {post.bedroom} bedroom</Text>
            {/* Type and Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}, {post.title}
            </Text>
            {/* Old Price and new Price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>{post.oldPrice}€</Text>
                <Text style={styles.price}> {post.newPrice}€</Text>
                /night
            </Text>
            {/* Total Price */}
            <Text style={styles.totalPrice}>Total: {post.totalPrice}€</Text>
        </Pressable>
    );
}
 
export default Post;