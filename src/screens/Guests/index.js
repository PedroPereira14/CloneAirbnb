import React, {useState} from 'react';
import {View, Text, Pressable} from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const GuestsScreen = (props) => {

    const navigation = useNavigation();

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    return(
        <View style={{justifyContent: 'space-between', height:"100%"}}>
            <View>
                {/* Row1: Adultos */}
                <View style={styles.row}>
                    {/* Title */}
                    <View>
                        <Text style={{fontWeight:"bold", color:"black"}}>Adults</Text>
                        <Text style={{color:"grey"}}>Ages 13 or above</Text>
                    </View>
                    {/* Buttons with Value */}
                    <View style={styles.buttons}>
                        {/* - */}
                        <Pressable 
                            onPress={() => setAdults(Math.max(0,adults-1))}
                            style={styles.button}
                        >
                        <Text style={styles.plusMinus}>-</Text>
                        </Pressable>
                        <Text style={styles.number}>{adults}</Text>
                        {/* Value */}
                        {/* + */}
                        <Pressable 
                            onPress={() => setAdults(adults+1)}
                            style={styles.button}
                        >
                        <Text style={styles.plusMinus}>+</Text>
                        </Pressable>
                    </View>
                </View>    
                {/* Row2: Adultos */}
                <View style={styles.row}>
                    {/* Title */}
                    <View>
                        <Text style={{fontWeight:"bold", color:"black"}}>Children</Text>
                        <Text style={{color:"grey"}}>Ages 2-12</Text>
                    </View>
                    {/* Buttons with Value */}
                    <View style={styles.buttons}>
                        {/* - */}
                        <Pressable 
                            onPress={() => setChildren(Math.max(0,children-1))}
                            style={styles.button}
                        >
                        <Text style={styles.plusMinus}>-</Text>
                        </Pressable>
                        <Text style={styles.number}>{children}</Text>
                        {/* Value */}
                        {/* + */}
                        <Pressable 
                            onPress={() => setChildren(children+1)}
                            style={styles.button}
                        >
                        <Text style={styles.plusMinus}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Row3: Adultos */}
                <View style={styles.row}>
                    {/* Title */}
                    <View>
                        <Text style={{fontWeight:"bold", color:"black"}}>Infants</Text>
                        <Text style={{color:"grey"}}>Under 2</Text>
                    </View>
                    {/* Buttons with Value */}
                    <View style={styles.buttons}>
                        {/* - */}
                        <Pressable 
                            onPress={() => setInfants(Math.max(0,infants-1))}
                            style={styles.button}
                        >
                        <Text style={styles.plusMinus}>-</Text>
                        </Pressable>
                        <Text style={styles.number}>{infants}</Text>
                        {/* Value */}
                        {/* + */}
                        <Pressable 
                            onPress={() => setInfants(infants+1)}
                            style={styles.button}
                        >
                        <Text style={styles.plusMinus}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View>
                <Pressable 
                onPress={() => navigation.navigate('Home', {
                    screen: 'Explore',
                    params: {
                        screen:'Search Results',
                    }
                })}
                style={{
                    marginBottom:20, 
                    backgroundColor:"#f15454",
                    alignItems:"center",
                    justifyContent:"center",
                    height:50,
                    marginHorizontal:20,
                    borderRadius:10,
                    }}>
                    <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Search</Text>
                </Pressable>
            </View>     
        </View>
    );
}

export default GuestsScreen;