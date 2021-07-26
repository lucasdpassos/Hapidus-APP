import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native'

const cellPhone = require('../../assets/cellphone.png')
const arrow = require('../../assets/arrow.png')
const plate = require('../../assets/plate.png')
const signin = require('../../assets/signin.png')
const virtualAssistant = require('../../assets/virtual-assis.png')
const steps = require('../../assets/steps.png')
const driver = require('../../assets/driver.png')
const cadastrar = require('../../assets/cadastrar.png')

import Cadastrar from '../Preload/Cadastrar'

const styles = StyleSheet.create({
  container: {   
    backgroundColor: "tomato"
  }})

const HomeScreen = () => {   
  const navigation = useNavigation();
  return (
    <Button    
      style={styles.container}
      title="Ir para o cadastro"
      onPress={() =>
        navigation.navigate('ChatBot')
      }
    />
  );
};   

export default class App extends React.Component {

  
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Bem-vindo",
              title2:"à plataforma Hapidus Driver",
              text: "Deslize para o lado para entender as etapas",
              text2: "Ou",
              image: cellPhone,
              arrow: arrow
          },
          {
              title:"Este App",
              title2:"Servirá como sua principal ferramenta quando estiver realizando os trajetos",
              text: "Deslize para o lado para entender as etapas",
              text2: "Ou",
              image: plate,
              arrow: arrow
          },
          {
              title:"O primeiro passo",
              title2:"Vai ser realizar o seu cadastro como motorista em nossa plataforma",
              text: "Deslize para o lado para entender as etapas",
              text2: "Ou",
              image: signin,
              arrow: arrow,
              
          },
          {
              title:"Quem te ajudará com isso",
              title2:"Será o nosso assistente virtual, responsável pelos cadastros",
              text: "Deslize para o lado para entender as etapas",
              text2: "Ou",
              image: virtualAssistant,
              arrow: arrow,
             
          },
          {
              title:"Siga atentamente",
              title2:"O passo a passo de cadastro",
              text: "Deslize para o lado para entender as etapas",
              text2: "Ou",
              image: steps,
              arrow: arrow,
             
          },
          {
              title:"Preparado",
              title2:"Para ser o mais novo motorista parceiro representando a sua empresa na Hapidus?",
              text: "",
              text2: "",                          
              cadastrar: 'HomeScreen,'             
              
          }         
        ]
      }
    }

    _renderItem({item,index}){

      
        return (
          <View style={{
              backgroundColor:'#00002C',
              borderRadius: 5,
              height: 650,
              width: 400,
              display:'flex',              
              alignItems:'center'           
               }}>
            <Text style={{fontSize: 18, color:'azure', textAlign:'center'}}>{item.title}</Text>
            <Text style={{fontSize: 18, color:'azure', textAlign:'center'}}>{item.title2}</Text>
            
            <Image style={{maxWidth:200, maxHeight:390, right:40}} source={item.image} />
              
           <Text style={{color:'azure'}}>{item.text}</Text><Image style={{width:160, height:70, left:120, bottom:220}} source={item.arrow} />        
              <Text style={{padding:10, fontSize:18, color:'azure'}}>{item.text2}</Text>
               
           
            <HomeScreen  /> 
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'#00002C', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={490}
                  itemWidth={500}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                   
            </View>
          </SafeAreaView>
        );
    }
}

