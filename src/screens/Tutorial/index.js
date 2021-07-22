import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { WebView } from 'react-native-webview';

import HapidusLogo from '../../assets/hapiduslogo2.png'




export default () => {

    
return (
   
    
    <View style={{backgroundColor:'#00002c', height:900}}>
     
        <View style={{display:'flex', width:300, marginTop:230, marginLeft:50, alignItems:'center'}}>
       
         <Image  source={require('../../assets/hapiduslogo2.png')} style={{width:290, height:130}} />
        <Text style={{color:'#D7DF23'}}>Aplicativo do motorista parceiro</Text>
        

       
        </View>
    </View>
)

}

