import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
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
            <Button transparent onPress={()=>this.props.navigation.navigate('Tasks')}>
              <Text style={{color: "#ffffff", fontSize: 12}}>Cancel</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Add Task</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{color: "#ffffff", fontSize: 12}}>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Description</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}>
            <Label style={{marginLeft:15}}>Due Date</Label>
            <DatePicker
            defaultDate={new Date()}
            // minimumDate={new Date(2018, 1, 1)}
            // maximumDate={new Date(this.state.)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"calendar"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Contact</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Property</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Priority</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Assign to</Label>
              <Input />
            </Item>
        </Content>
      </Container>
    );
  }
}
