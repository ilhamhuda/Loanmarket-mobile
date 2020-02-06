import React, { Component } from 'react';
import { Image, Linking, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header, Label, DatePicker, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
  static navigationOptions = {
    header: null
}
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
        <Header style={{backgroundColor: "white"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color: "black", fontSize: 12}}>Cancel</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "black", fontSize: 16}}>Add Requirement</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{color: "black", fontSize: 12}}>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
        <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Person</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Type</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Title Name</Label>
              <Input />
            </Item>
      <Item style={{marginTop:10}}floatingLabel last>
              <Label>Given Name</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Surname</Label>
              <Input />
            </Item>
             <Item style={{marginTop:10}}floatingLabel last>
              <Label>Company Name</Label>
              <Input />
            </Item>
             <Item style={{marginTop:10}}floatingLabel last>
              <Label>Position</Label>
              <Input />
            </Item>
             <Item style={{marginTop:10}}floatingLabel last>
              <Label>Telephone</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Type Phone</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Comments</Label>
              <Input />
            </Item>
          <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Address Details</Text>
            </ListItem>
            </List>
              <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Residency</Text>
            </ListItem>
               <Item style={{marginTop:10}}floatingLabel last>
              <Label>Unit</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Street</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Suburb</Label>
              <Input />
            </Item>
        </Content>
      </Container>
    );
  }
}
