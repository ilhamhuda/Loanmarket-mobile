import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header, Form, Textarea, Label, DatePicker, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right, Picker } from 'native-base';
// Note Type - Business Note
// BCA MASTER - BANK OFFICE PUSAT - BANK CABANG KOTA
// KPR Perorangan
//KPR , Credit Multiguna, Rekening Koran, Produk Investasi
// Picker, Deskripsi, 
export default class Tasks extends Component {
   static navigationOptions = {
    title: 'Add Note',
    headerTintColor: 'black'
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
       
        <Content style={{borderTopWidth:0,margin:20, borderTopColor: "#e6e9ed"}}>
       
            <Item style={{marginTop:10}}floatingLabel last>
              <Label style={{fontSize:16}}>Type</Label>
              <Input style={{fontSize:12}} />
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
            textStyle={{ color: "green",fontSize:16 }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            
            </Item>
             <Item style={{marginTop:10}}floatingLabel last>
              <Label style={{fontSize:16}}>Assign to</Label>
              <Input style={{fontSize:12}} />
            </Item>
         <Textarea style={{marginTop:20}} placeholder="Write here..........." />
            
        </Content>
      </Container>
    );
  }
}
