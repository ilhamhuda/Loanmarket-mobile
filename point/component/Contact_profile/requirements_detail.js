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
            <Button transparent onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color: "#ffffff", fontSize: 12}}>Cancel</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Add Requirement</Title>
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
              <Label>Propery Classification</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Rental</Label>
              <Input />
            </Item>
            <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Property Type</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Type</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Bedrooms</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Bathrooms</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Car Spaces</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>From Land Area</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>To Land Area</Label>
              <Input />
            </Item>
            <List>
            <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Suburbs</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Suburb</Label>
              <Input />
            </Item>
            <List>
            <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Price Range</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>From</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>To</Label>
              <Input keyboardType='numeric'/>
            </Item>
            <List>
            <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Property Category</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Category</Label>
              <Input />
            </Item>
        </Content>
      </Container>
    );
  }
}
