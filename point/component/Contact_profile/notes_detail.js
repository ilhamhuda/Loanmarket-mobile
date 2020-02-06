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
    header: null
}
  render() {
    return (
      
      <Container>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color: "white", fontSize: 12}}>Cancel</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "white", fontSize: 16}}>Add Note</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{color: "white", fontSize: 12}}>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{borderTopWidth:0,margin:20, borderTopColor: "#e6e9ed"}}>
         
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Title</Label>
              <Input />
            </Item>
         <Textarea style={{marginTop:20}}placeholder="Write here ......." />
            
        </Content>
      </Container>
    );
  }
}
