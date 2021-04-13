import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Container, Text, Form, Thumbnail, Card, CardItem, Button, Header } from 'native-base';
import { Actions } from 'react-native-router-flux';
import F5Icon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

import RepoUtil from '../helper/Utils';
import { version } from '../../package.json';

const win = Dimensions.get('window');
const { width, height } = win

export default function Hasil() {

    return (
        <Container style={styles.container}>
            <Header iosBarStyle="light-content" androidStatusBarColor="#000" style={{ backgroundColor: '#000', paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.searchIcon} onPress={() => Actions.Home()}>
                        <FA5Icon size={20} color="white" name='chevron-left' />
                    </TouchableOpacity>
                    <Text style={styles.textHeader2}>Help</Text>
                </View>
            </Header>
            <ScrollView>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ ...styles.textHeader1, fontSize: 20 }}>Bantuan</Text>
                    <Text>QR Scanner v.{version}</Text>
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
    searchIcon: {
        padding: 10,
        alignSelf: 'center'
    },
    imageMenu: {
        width: 45,
        height: 45,
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: 'black'
    }
});