import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    upperSection: {
        backgroundColor: '#1565C0',
        height:80,
    },
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
    },
    textInput: {
        marginTop:17,
        opacity:0.8,
        textAlignVertical: "center",
        borderRadius: 12,
        height: 48,
        width: 380,
        //borderColor : '#004D40',
        //borderWidth : 6,
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: 'white',
    },
    text: {
        color: 'black',
        fontSize: 14,
        padding: 8,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    box: {
        marginHorizontal: 10,
        margin: 4,
        justifyContent: 'center',
        backgroundColor: 'white',
        //backgroundColor:'#03DADD',
        borderRadius: 6,
        //borderColor: '#BDBDBD',
        //borderWidth : 6,
    }
})
