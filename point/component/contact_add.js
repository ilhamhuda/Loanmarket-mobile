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
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contact')}>
              <Text style={{color: "#ffffff", fontSize: 12}}>Cancel</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Add Contact</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{color: "#ffffff", fontSize: 12}}>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
        <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>General</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Home Phone</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Address</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>unit No</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Street No</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <Item style={{marginTop:10}} floatingLabel last>
              <Label>Street Name</Label>
              <Input/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>District</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Postcode</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <List>
            <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>First Point of Contact</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Primary</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Secondary</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}} floatingLabel last>
              <Label>Tertiary</Label>
              <Input/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Quaternary</Label>
              <Input />
            </Item>
            <List>
            <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Accessible By</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Agents</Label>
              <Input />
            </Item>
            <List>
            <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Contact Categories</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Categories</Label>
              <Input />
            </Item>
        </Content>
      </Container>
    );
  }
}
