import React, {Component} from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'
import {Dialogflow, Dialogflow_V2} from 'react-native-dialogflow'

import {dialogflowConfig} from '../../../env'


const botAvatar = require('../../assets/botAvatar.png')

const BOT = {
    _id: 2,
    name: 'Mr. Robot',
    avatar: botAvatar
}

class ChatBot extends Component {

    state = {
        messages: [
            {_id: 3, text: 'O cadastro é bem simples e rápido, caso queira começar agora, aperte o cinto e me diga: CADASTRO', createdAt: new Date(), user: BOT},
            {_id: 2, text: 'Se você chegou até aqui, meus parabéns! ;) Você foi indicado pela sua empresa para ser o mais novo parceiro driver Hapidus!', createdAt: new Date(), user: BOT},           
            {_id: 1, text: 'Olá', createdAt: new Date(), user: BOT}
          
        ],
        id: 1,
        name: '',
    }

    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
            dialogflowConfig.project_id,
        )
    }

    sendBotResponse(text) {
        
        let msg = {
            _id: this.state.messages._id + 2,
            text,
            createdAt: new Date(),
            user: BOT
        }

        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, [msg])
        }))
    }

    handleGoogleResponse(result){
        let text = result.queryResult.fulfillmentMessages[0].text.text[0]

        this.sendBotResponse(text)
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
          }))
          messages.forEach(message => {  
            console.log(message.text);
            Dialogflow_V2.requestQuery(
              message.text, 
              result=>{
                console.log(result)
                messages = [
                  {
                    _id: result.responseId,
                    text: result.queryResult.fulfillmentText,
                    createdAt: new Date(),
                    user: {
                      _id: 2,
                      name: "Bot",
                      avatar: botAvatar
                    }
                  }
                ]
                this.setState(previousState => ({
                  messages: GiftedChat.append(previousState.messages, messages),
                }))
              }, 
              error=>console.log(error)
            );
          });
    }

    onQuickReply(quickReply){
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, quickReply)
        }))

        let message = quickReply[0].value;

        Dialogflow_V2.requestQuery(
            message,
            (result) => this.handleGoogleResponse(result),
            (error) => console.log(error)
        )
    }


    render() {
        return (
            <View style={{flex:1}}>
                <GiftedChat messagesContainerStyle={{backgroundColor: '#00002C'}} messages={this.state.messages} onSend={(message) => this.onSend(message)}
                onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
                user={{_id: 1 }}
                
                />
            </View>
        )
    }
}

export default ChatBot