/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
    return(
  <View>
  <Pressable 
      style={styles.searchButton} 
      onPress={ () => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={"#f15454"} />
        <Text style={styles.searchButtonText}>Where are we going?</Text>
      </Pressable>
  <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
      <Text style={styles.title}>Go Near</Text>

      <Pressable 
      style={styles.button} 
      onPress={() => navigation.navigate('Explore', {
                    screen: 'Explore',
                    params: {
                        screen:'Search Results',
                    }
                })}>
        <Text style={styles.buttonText}>Explore nearby stays</Text>
      </Pressable>
  </ImageBackground>
  </View>

    )
};

export default HomeScreen;
