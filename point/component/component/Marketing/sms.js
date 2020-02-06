import React, { Component } from 'react';
import { Image, Linking, ImageBackground, Textarea, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header, Label, DatePicker, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base'
class LogoTitle extends React.Component {
  render() {
    return (

      <Text style={{fontWeight:"bold", color:'white'}}> Contact</Text>
    );
  }
}
export default class Tasks extends Component {
    static navigationOptions = {
    title: 'SMS',
    headerTintColor: 'black',
    headerRight: (
          <Button transparent onPress={()=>this.props.navigation.navigate('Contactadd')}>
              <Icon style={{color: "black", fontSize: 20}}  name='send' />
            </Button>
    )
  };
constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      
      <Container>
        
        <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
        <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>SMS Gateway</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Send To</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label> Send From</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Template</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10, height: 300}}floatingLabel last>
              <Label>Message</Label>
              <Input />
            </Item>
            <List>
       
            </List>
    
        </Content>
      </Container>
    );
  }
}
