import React from "react";
import { View, Text } from "react-native";
import PostDetails from "../../components/PostDetails";
import feed from "../../../assets/data/feed";
import { useRoute } from "@react-navigation/native";

const PostScreen = (props) => {
    const route = useRoute();
    const post = feed.find(feed => feed.id === route.params.postId);
    console.warn(route.params);

    return(
        <View style={{backgroundColor:"white",  }}>
            <PostDetails post={post} />
        </View>
    )
}

export default PostScreen;