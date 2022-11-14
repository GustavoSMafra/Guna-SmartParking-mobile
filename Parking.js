import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const staticImage = require("./LogoParking.png");

export default function Parking(props){
    
    const [parkingSpaces, setParkingSpaces] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const url = "https://guna-smart-parking-os.vercel.app/getSlots"
    useEffect(()=> {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setParkingSpaces(data.slots));
    }, [])

    function handleRefresh(){
        setRefresh(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRefresh(false)
                setParkingSpaces(data.slots)
            })
    }

    return (
        <View style={homeStyle.container}>
            <View style={homeStyle['Logo']}>
                <Image
                    style={homeStyle['LogoImage']}
                    source={staticImage}
                />
            </View>

            <View style={homeStyle['Information']}>
                <Text style={homeStyle['Title']}>Informações</Text>
                <View style={homeStyle['Info']}>
                    <Text style={homeStyle['Question']}> <MaterialIcons name="place" size={24} color="black" /> R. Brusque, nº 321 - Centro, Itajaí-SC</Text>
                    <Text style={homeStyle['Question']}> <Ionicons name="ios-time-outline" size={24} color="black" /> Seg à Sex: 08:00 - 22:00 R$3,00/h</Text>
                </View>
            </View>  

            <View style={homeStyle['ParkingsContainer']}>
                <ScrollView 
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={handleRefresh}
                        />
                    }
                
                >
                    {!parkingSpaces ?  <ActivityIndicator size="large" color="black" /> : parkingSpaces.map((space, i) => {
                        return space ? <View style={homeStyle['SpaceContainerTrue']} key={i}>
                            <FontAwesome name="circle" size={25} color="red" style={homeStyle['Icon']}/>
                            <Text style={homeStyle['SpotText']}>Nº {i} - Vaga ocupada</Text>
                        </View> : 
                        <View style={homeStyle['SpaceContainerFalse']}>
                            <FontAwesome name="circle" size={25} color="green" style={homeStyle['Icon']}/>
                            <Text style={homeStyle['SpotText']}>Nº {i} - Vaga disponível</Text>
                        </View>
                    })}
                </ScrollView>  
            </View>
            <TouchableOpacity style={homeStyle['ParkContainer']} onPress={() => props.handleScreen()}>
                    <Text style={homeStyle['ParkContainerText2']}>Voltar</Text>
                </TouchableOpacity>
        </View>
    );
}

const homeStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Logo: {
        display: 'flex',
        width: '100%',
    },
    LogoImage: {
        width: 200,
        height: 88,
    },  
    Information: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '20%',
    },
    Info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 20,
    }, 
    Title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    Question: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ParkContainerText: {
        marginRight: 80,
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
    },
    Icon: {
        marginRight: 20
    },
    ParkingsContainer: {
        display: 'flex',
        height: 300,
        width: 250,
    },
    SpotText: {
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    },
    SpaceContainerTrue: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width: 250,
        backgroundColor: 'black',
        marginBottom: 20,
        padding: 15,
        borderRadius: 20,
        opacity: 0.8
    },
    SpaceContainerFalse: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width: 250,
        backgroundColor: 'black',
        marginBottom: 20,
        padding: 15,
        borderRadius: 20
    },
    ParkContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 100,
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 20,
        marginTop: 20
    },
    ParkContainerText2: {
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center'
        
    },
  });