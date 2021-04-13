import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, ImageBackground, StyleSheet, Dimensions, PermissionsAndroid, Alert, ScrollView } from 'react-native';
import { Container, Text, Form, Thumbnail, Card, CardItem, Button, Header } from 'native-base';
import { Actions } from 'react-native-router-flux';
import F5Icon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Utils from '../helper/Utils';
import { version } from '../../package.json';

const win = Dimensions.get('window');
const { width, height } = win

export default function Home() {
    const [flash, setFlash] = useState();
    const [camera, setCamera] = useState(0);
    const [scan, setScan] = useState();
    // const [reactive, setReactive] = useState(true);

    const onSuccess = e => {
        // setReactive(false);
        setScan(e.data);
        Actions.Hasil({data: scan});
    };
    
    const onFlash = async () => {
        if(flash === RNCamera.Constants.FlashMode.torch){
            setFlash();
        } else{
            setFlash(RNCamera.Constants.FlashMode.torch);
        }
    }
    
    const onCamera = async () => {
        if(camera == 0){
            setCamera(1);
        } else{
            setCamera(0);
        }
    }
    const cameranya = camera == 0 ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front;
    
    return (
        <Container style={styles.container}>
            <Header iosBarStyle="light-content" androidStatusBarColor="#000" style={{ backgroundColor: '#000', paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textHeader1}>QR</Text>
                    <Text style={styles.textHeader2}> Scanner</Text>
                </View>
                <TouchableOpacity style={styles.searchIcon} onPress={() => Actions.Help()}>
                    <FA5Icon name="question" size={20} color="white" />
                </TouchableOpacity>
            </Header>
                <ScrollView style={{backgroundColor:'black'}}>
                    <QRCodeScanner
                        onRead={onSuccess}
                        flashMode={flash}
                        reactivate={false}
                        // reactivateTimeout={5}
                        showMarker={true}
                        cameraType={cameranya}
                        markerStyle={{borderRadius: 5}}
                        containerStyle={{height: height*0.7}}
                        cameraStyle={{height: height*0.6}}
                    />
                    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                        <TouchableOpacity style={{...styles.searchIcon2,marginHorizontal: 10}} onPress={onFlash}>
                            <F5Icon name="flash" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.searchIcon2,marginHorizontal: 10}} onPress={onCamera}>
                            <F5Icon name="camera" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>Swipe UP</Text>
                    </View>
                </ScrollView>
        </Container>
    );
}
let styles = StyleSheet.create({
    container: {
        height: height,
        flex: 1,
    },
    textHeader1: {
        fontSize: 21,
        color: '#fff',
        fontFamily: 'Montserrat-Bold',
    },
    textHeader2: {
        fontSize: 21,
        color: '#fff',
        fontFamily: 'Montserrat-Medium',
    },
    fontMedium: {
        fontFamily: 'Montserrat-Medium',
    },
    fontBold: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
    },
    namaMenu: {
        color: '#fff',
        fontSize: 12,
        flexWrap: 'wrap',
        fontFamily: 'Montserrat-Medium',
    },
    searchSection: {
        paddingLeft: 10,
        flexDirection: 'row',
        backgroundColor: 'rgba(175, 175, 175, .25)',
        borderRadius: 10,
    },
    searchIcon2: {
        flexDirection:'row',
        alignSelf: 'center',
        justifyContent:'center',
        padding: 10,
        backgroundColor:'#fff',
        borderRadius:30,
        width:47,
        height:47
    },
    searchIcon: {
        flexDirection:'row',
        alignSelf: 'center',
        padding: 10,
    },
    imageMenu: {
        width: 45,
        height: 45,
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: 'black'
    }
});