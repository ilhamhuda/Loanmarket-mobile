import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card, Header, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
class LogoTitle extends React.Component {
  render() {
    return (
      // <Image
      //   source={require('../assets/holder.png')}
      //   style={{ width: 30, height: 30 }}
      // />
      <Text style={{fontWeight:"bold", color:'white'}}> Contact</Text>
    );
  }
}
export default class Tasks extends Component {
  // static navigationOptions = {
  //   headerTitle: <LogoTitle />,
  //   headerTintColor: 'white',
  //   headerStyle: {
  //     backgroundColor: '#063359',
  //   },
  // };

  static navigationOptions = {
    title: 'E-Marketing',
    headerTintColor: 'black'
  };

  render() {
    return (
      
      <Container style={{backgroundColor: "#f5f5f5"}}>
       
        <Content style={{margin:15, backgroundColor: "#f5f5f5", borderTopColor: "#e6e9ed", borderBottomColor: "#e6e9ed"}}>
  
          <List style={{backgroundColor: 'white', marginTop:10}}>
                               
            <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Ecommunicator')}>
             <Icon  name="mail"  style={{color: "#000001", paddingLeft: 10}}/>
              <Text style={{color:"#000001",fontSize:12}}>Email Communicator</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Ecommunicator')}>
              <Icon name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
          
          </List>

           <List style={{backgroundColor: 'white', marginTop:10}}>
                               
    
            <ListItem>
              <Left>
 
            <Button transparent onPress={()=>this.props.navigation.navigate('Scommunicator')}>
            <Icon  name="ios-chatboxes"  style={{color: "#000001", paddingLeft: 10}}/>
              
              <Text style={{color:"#000001", fontSize:12}}>SMS/Text Communicator</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Scommunicator')}>
              <Icon  name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
         
          </List>

           <List style={{backgroundColor: 'white', marginTop:10}}>
                               
           
            <ListItem>
              <Left>
                
            <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail')}>
            <Icon  name="ios-cloud-upload"  style={{color: "#000001", paddingLeft: 10}}/>
              <Text style={{color:"#000001",fontSize:12}}>E-Marketing Storage</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail')}>
              <Icon  name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
