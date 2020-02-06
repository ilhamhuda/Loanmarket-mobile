import React, { Component } from 'react';
import { Image, Text, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header, Label, DatePicker, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
    title: 'Add Task',
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
              <Label>Assign to</Label>
              <Input />
            </Item>
        </Content>
      </Container>
    );
  }
}
