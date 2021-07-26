import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'
const cadastrarBtn = require('../../assets/cadastrar.png')


class Cadastrar extends React.Component {
    render() {
      // Get it from props
      const { navigation } = this.props;
    }
  }
  
  // Wrap and export
  export default function(props) {
    const navigation = useNavigation();
  
    return <TouchableOpacity {...props} navigation={navigation} onClick={ () => navigation.reset({
        routes: [{name: 'Done'}]
     })} style={{position:'absolute', top:590}}><Image style={{width:600, height:80}} source={cadastrarBtn} /></TouchableOpacity>
  }