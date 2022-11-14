import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Parking from './Parking.js'

const staticImage = require("./imageLogo.png");


export default function Home() {
  const [openParking, setOpenParking] = useState(false);
  function handleClose(){
    setOpenParking(false)
  }
  return ( !openParking ? <View style={homeStyle.container}>
        <View style={homeStyle['Logo']}>
            <Image
                style={homeStyle['LogoImage']}
                source={staticImage}
            />
        </View>

        <View style={homeStyle['Information']}>
            <Text style={homeStyle['Title']}>Guna smart park</Text>
            <Text style={homeStyle['Question']}>Estacionamentos próximos</Text>
        </View>  

        <View style={homeStyle['ParkingsContainer']}>
            <TouchableOpacity style={homeStyle['ParkContainer']} onPress={() => {setOpenParking(true)}}>
                <FontAwesome name="circle" size={25} color="green" style={homeStyle['Icon']}/>
                <Text style={homeStyle['ParkContainerText']}>Unipark</Text>
                <Text style={homeStyle['ParkContainerText2']}>1 Km</Text>
            </TouchableOpacity>
            <View style={homeStyle['ParkContainerFalse']}>
                <FontAwesome name="circle" size={25} color="red" style={homeStyle['Icon']}/>
                <Text style={homeStyle['ParkContainerText']}>Estamar</Text>
                <Text style={homeStyle['ParkContainerText2']}>3 Km</Text>
            </View>
            <View style={homeStyle['ParkContainerFalse']}>
                <FontAwesome name="circle" size={25} color="red" style={homeStyle['Icon']}/>
                <Text style={homeStyle['ParkContainerText']}>Bruscar</Text>
                <Text style={homeStyle['ParkContainerText2']}>4 Km</Text>
            </View>
            <View style={homeStyle['MoreContainer']}>
                <SimpleLineIcons name="magnifier" size={25} color="white" style={homeStyle['Icon2']}/>
                <Text style={homeStyle['MoreText']}>Procurar mais</Text>
            </View>
        </View>  
    </View> : <Parking handleScreen={() => handleClose()}/>
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
        height: '20%'
    },
    LogoImage: {
        width: 250,
        height: 200,
        marginBottom: 20
    },  
    Information: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '20%'
    },
    Title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    Question: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    ParkContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width:'80%',
        backgroundColor: 'black',
        marginBottom: 20,
        padding: 15,
        borderRadius: 20
    },
    ParkContainerFalse: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width:'80%',
        backgroundColor: 'black',
        marginBottom: 20,
        padding: 15,
        borderRadius: 20,
        opacity: 0.7
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
    Icon2: {
        marginRight: 10
    },
    ParkContainerText2: {
        marginLeft: 20,
        color: 'white'
    },
    MoreContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 20,
        width: 200,
        alignSelf: 'center'

    },
    MoreText: {
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    }
  });