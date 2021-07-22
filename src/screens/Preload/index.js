import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { ScrollView, Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';


export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      
     
        setTimeout(() => {  navigation.navigate("Tutorial"); }, 3000);
    
        
    }
    

    checkToken()
  }, []);

  return (
    <View>     
     <Image  source={require('../../assets/pexels.jpg')} style={{width:'100%', height:'100%'}} />
    </View>
  );
};