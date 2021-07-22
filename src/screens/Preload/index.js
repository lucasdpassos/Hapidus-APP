import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';

const cellPhone = require('../../assets/cellphone.png')
const arrow = require('../../assets/arrow.png')

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
              image: cellPhone,
              arrow: arrow
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
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
            <Text style={{fontSize: 22, color:'azure'}}>{item.title}</Text>
            <Text style={{fontSize: 22, color:'azure'}}>{item.title2}</Text>
            
            <Image source={item.image} />
            <Text style={{color:'azure'}}>{item.text}</Text>
            <Image style={{width:100, height:100}} source={item.arrow} />
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

