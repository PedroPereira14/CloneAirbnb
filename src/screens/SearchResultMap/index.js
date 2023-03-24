import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, useWindowDimensions} from "react-native";
import MapView from 'react-native-maps';
import feeds from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultMap = (props) => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const flatlist = useRef();
    const map = useRef();
    
    const viewConfig = useRef({itemVisiblePercentThreshold: 70});

    const onViewChanged = useRef(({viewableItems}) => {
        if (viewableItems.length > 0){
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    const width = useWindowDimensions().width;

    useEffect( () =>{
        if(!selectedPlaceId || !flatlist){
            return;
        }
        const index = feeds.findIndex(feed => feed.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})

        const selectedPlace = feeds[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);
        }, [selectedPlaceId])

    return(
        <View style={{height:"100%",width:"100%"}}>
            <MapView 
            ref={map}
            style={{height:"100%",width:"100%"}}
                initialRegion={{
                latitude: 28.3915637,
                longitude: -16.6291304,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
                }}
            >  
            {feeds.map(place =>(<CustomMarker 
            coordinate={place.coordinate} 
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}  
            onPress={() => setSelectedPlaceId(place.id)}  
            />))}
            </MapView>
            
            <View style={{position:'absolute', bottom:40 }}>
                <FlatList
                    ref={flatlist}
                    data={feeds}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 40}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    )
}

export default SearchResultMap;