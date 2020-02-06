import React, { Component } from 'react';
import { Image, Text, ImageBackground, TouchableOpacity, View, ScrollView,ToastAndroid } from 'react-native';
import api from '../api'; 
import { Container, Header, Form, Textarea, Label, DatePicker, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right, Picker } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
    this.state = { chosenDate: new Date(), type: null, assign_to:null, note_detail: null, due_date:null, id_user:129219, id_contact:472823 };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate, type: null });
  }

    submit(){
		api.addnote(this.state).then((result)=>{ 
	      ToastAndroid.show(result.message,ToastAndroid.SHORT);
	      if(result.status) this.props.navigation.goBack();
	    });
	}
  render() {
    return (
      
      <Container>
       
        <Content style={{borderTopWidth:0,margin:20, borderTopColor: "#e6e9ed"}}>
       
            <Item style={{marginTop:10}}floatingLabel last>
              <Label style={{fontSize:16}}>Type</Label>
   <Input style={{fontSize:12}} defaultValue={this.state.type} onChangeText={(text) => this.setState({type:text})}/>
            </Item>
             <Item style={{marginTop:10}}>
            <Label style={{marginLeft:15}} >Due Date</Label>
            <DatePicker
            defaultDate={new Date()}
            // minimumDate={new Date(2018, 1, 1)}
            // maximumDate={new Date(this.state.)}
            locale={"en"}
            defaultValue={this.state.due_date}
            onChangeText={(text) => this.setState({date:text})}
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
              <Input style={{fontSize:12}} defaultValue={this.state.assign_to} onChangeText={(text) => this.setState({assign_to:text})}/>
            </Item>
         <Textarea style={{marginTop:20}} defaultValue={this.state.note_detail} onChangeText={(text) => this.setState({note_detail:text})}placeholder="Write here..........." />
               <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#00a8ea",marginBottom:hp('-0.3%'),width: wp('102%')}}>
            <Left>
            <Button transparent style={{ width: wp('100%')}} onPress={()=>this.submit()}>
              <Text style={{color:"white", fontSize:10,fontWeight:'bold'}}>SUBMIT</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent   onPress={()=>this.submit()}>
              <Icon  name="arrow-forward"  style={{color: "white", fontSize:14, paddingLeft: 10, }}/>
            </Button>
              </Right>
            </ListItem>
        </Content>
      </Container>
    );
  }
}
