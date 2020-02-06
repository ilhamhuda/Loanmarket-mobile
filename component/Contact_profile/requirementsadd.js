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
    title: 'Add Loan',
    headerTintColor: 'black'
  };
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), total_amount: null, id_contact:453545, id_user: global.userid, loan_purpose: null, loan_type1:null, loan_amount1: null, loan_type2: null, loan_amount2:null,  loan_type3:null, loan_amount3:null  };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate, type: null });
  }

    submit(){
		api.addloan(this.state).then((result)=>{ 
	      ToastAndroid.show(result.message,ToastAndroid.SHORT);
	      if(result.status) this.props.navigation.goBack();
	    });
	}
  render() {
    return (
      
      <Container>
       
       <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
        <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Specific Data</Text>
            </ListItem>
            </List>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Required Total Amount</Label>
              <Input defaultValue={this.state.total_amount} onChangeText={(text) => this.setState({total_amount:text})}/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Loan Purpose</Label>
              <Input defaultValue={this.state.loan_purpose} onChangeText={(text) => this.setState({loan_purpose:text})}/>
            </Item>
      <Item style={{marginTop:10}}floatingLabel last>
              <Label>Loan #1 (Type) </Label>
              <Input defaultValue={this.state.loan_type1} onChangeText={(text) => this.setState({loan_type1:text})}/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Loan #1 (amount)</Label>
              <Input defaultValue={this.state.loan_amount1} onChangeText={(text) => this.setState({loan_amount1:text})}/>
            </Item>
               <Item style={{marginTop:10}}floatingLabel last>
              <Label>Loan #2 (Type) </Label>
              <Input defaultValue={this.state.loan_type2} onChangeText={(text) => this.setState({loan_amount2:text})}/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Loan #2 (amount)</Label>
              <Input defaultValue={this.state.loan_amount2} onChangeText={(text) => this.setState({loan_amount2:text})}/>
            </Item>
            
             <Item style={{marginTop:10}}floatingLabel last>
              <Label>Loan #3 (Type) </Label>
              <Input defaultValue={this.state.loan_type3} onChangeText={(text) => this.setState({loan_type3:text})}/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Loan #3 (amount)</Label>
              <Input defaultValue={this.state.loan_amount3} onChangeText={(text) => this.setState({loan_amount3:text})}/>
            </Item>
             
                 <Item style={{marginTop:10}}floatingLabel last>

            </Item>
  
            <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#00a8ea",marginBottom:hp('-0.3%'),width: wp('102%')}}>
            <Left>
            <Button transparent style={{ width: wp('100%')}} onPress={()=>this.submit()}>
              <Text style={{color:"white", fontSize:10,fontWeight:'bold'}}>SUBMIT</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.submit()}>
              <Icon  name="arrow-forward"  style={{color: "white", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
        </Content>
      </Container>
    );
  }
}
