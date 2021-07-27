import React, { Component, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput, SafeAreaView, Button, LayoutAnimation } from 'react-native';
import { WebView } from 'react-native-webview';

import HapidusLogo from '../../assets/hapiduslogo2.png'
import { use } from 'ast-types';
import { saveSnapshotFile } from 'jest-snapshot/build/utils';




export default () => {

const IsLoading = require('../../assets/loading.gif')
const avatar = require('../../assets/botAvatar.png')

const [arrayState, setArrayState] = React.useState([]);

const [modal, setModal] = useState(true)
const [modal2, setModal2] = useState(true)
const [modal3, setModal3] = useState(false)
const [modal4, setModal4] = useState(false)
const [loading, setLoading] = useState(false)
const [loading2, setLoading2] = useState(false)
const [nextModal, setNextModal] = useState(true)
const [nextModal2, setNextModal2] = useState(true)
const [value, onChangeText] = React.useState('Responda aqui')

const [testingValue, setTestingValue] = useState('')

const jewelStyle = function(options) {
    return {
      marginBottom: 120,
      
    }
  }

var loadingStatus = 0

const setLoadingTrue1 = () => {

    if(modal == true){
        setLoading(true)
        loadingStatus = 1
    }    
    
}
const setLoadingTrue2 = () => {

    if(modal3 == true && loadingStatus == 1){
        setLoading(false)
        setLoading2(true)
    }    
    
}

const babyTest = () => {
       
    setModal(true)
   
    setTimeout(() => {          
         
        if(modal2 == true) {
            setLoading(false)
            setModal3(true)
            setNextModal(false)
            setArrayState([...arrayState, value]);   
            console.log(arrayState)
           
           
        }if(modal2 == true && modal3 == true) {
            
            setModal4(true)
            setNextModal2(false)
            setLoading2(false)
           
        }
      }, 2000);
    

}



return (
    
    <ScrollView>
    
    <View style={[styles.Container1]}>
     
        <View value={testingValue} style={[styles.message, modal ? {} : styles.hidden, nextModal ? {} : styles.modal1Margin, nextModal2 ? {} : styles.modal1Margin2 ]}>      
      
        <Text style={{color:'#D7DF23', padding:10}}>Olá, se você chegou até aqui, meus parabéns, você foi indicado pela sua empresa para ser o mais novo parceiro hapidus driver! 🚗</Text>
        
     {/*    // Lucas: Este ícone será mudado na próxima versão para 'digitando...' */}
        {loading ? <Image style={[styles.loading1]} source={IsLoading} /> : <View /> }
       
        </View>
        <View style={[styles.message2, modal2 ? {} : styles.hidden, nextModal ? {} : styles.modal2Margin, nextModal2 ? {} : styles.modal2Margin2]}>      
      
        <Text style={{color:'#D7DF23', padding:10}}>Pra começar, me diga qual é o seu nome?</Text>       

      <View style={[styles.userMessage, modal3 ? {} : styles.hidden,  nextModal ? {} : styles.userMessage, nextModal2 ? {} : styles.userModal1]}>      
      
      <Text style={{color:'#D7DF23', padding:10}}>{arrayState[0]}</Text>       
          
      </View>
       
        </View>
        <View style={[styles.message3, modal3 ? {} : styles.hidden,  nextModal ? {} : styles.modal3Margin, nextModal2 ? {} : styles.modal3Margin2]}>      
      
        <Text style={{color:'#D7DF23', padding:10}}>Entendi, {arrayState[0]}! E qual é o número do seu CPF?</Text>       
       
       
        </View>
       
        <View style={[styles.userMessage1, modal4 ? {} : styles.hidden,  nextModal2 ? {} : styles.userMessage2]}>      
      
      <Text style={{color:'#D7DF23', padding:10}}>{arrayState[1]}</Text>       
          
      </View>
      {loading2 ? <Image style={[styles.loading2]} source={IsLoading} /> : <View /> }

        <View style={{position:'absolute', bottom:150}} >
        <TextInput
      style={{ width:390, height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor:'azure' }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <Button 
    onPress={() => {setLoadingTrue1();setLoadingTrue2();babyTest()}}
    title="Enviar"
    color="#D7D23C"    
    />
    </View>
    </View>
   
    </ScrollView>
)

}

var styles = StyleSheet.create({
    Container1: {
        backgroundColor:'#F4F4F4', 
        height:900
    },
    loading1: {
        bottom: 45
    },
    loading2: {       
        top: 280,
        left: 55
        
    },
    loading3: {
        position: 'absolute'
        
    },
    Dialog: {
        position:'absolute', 
        bottom:150
    },
    userMessage: {
        backgroundColor:'#00002C',
        width: 300,
        height: 60,
        borderRadius: 15,
        top:30,
        right: 50 
    },
    userMessage2: {
        backgroundColor:'#00002C',
        width: 300,
        height: 60,
        borderRadius: 15,
        top:310,
        left: 10,
        
    },
    userModal1: {
        backgroundColor:'#00002C',
        width: 300,
        height: 60,
        borderRadius: 15,
        top:30,
        
        
    },
    message: {
        backgroundColor:'grey',
        width: 300,
        height: 90,
        borderRadius: 15,
        top:450,
        left: 60 
    },
    modal1Margin: {
        backgroundColor:'grey',
        width: 300,
        height: 90,
        borderRadius: 15,
        top:300,
        left: 60 
    },
    modal1Margin2: {
        backgroundColor:'grey',
        width: 300,
        height: 90,
        borderRadius: 15,
        top:210,
        left: 60 
    },
    modal2Margin: {
        backgroundColor:'grey',
        width: 300,
        height: 60,
        borderRadius: 15,
        top:310,
        left: 60 
    },
    modal2Margin2: {
        backgroundColor:'grey',
        width: 300,
        height: 60,
        borderRadius: 15,
        top:220,
        left: 60 
    },
    modal3Margin: {
        backgroundColor:'grey',
        width: 300,
        height: 70,
        borderRadius: 15,
        top:390,
        left: 60 
    },
    modal3Margin2: {
        backgroundColor:'grey',
        width: 300,
        height: 70,
        borderRadius: 15,
        top:300,
        left: 60 
    },
    message2: {
        backgroundColor:'grey',
        width: 300,
        height: 60,
        borderRadius: 15,
        top:470,
        left: 60 
    },
    message3: {
        backgroundColor:'grey',
        width: 300,
        height: 90,
        borderRadius: 15,
        top:60,
        left: 60 
    },
    hidden: {
      width: 0,
      height: 0,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        marginTop: 430,
        backgroundColor: 'azure'
      },
  });