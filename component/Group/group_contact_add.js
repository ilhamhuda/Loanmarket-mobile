import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView,ToastAndroid,TextInput } from 'react-native';
import api from '../api'; 
import { Container, Header, Form, Textarea, Label, DatePicker, Content, List, ListItem, Thumbnail, Text,Item, Input, Left, Button, Body,Footer,FooterTab, Title, Right, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Note Type - Business Note
// BCA MASTER - BANK OFFICE PUSAT - BANK CABANG KOTA
// KPR Perorangan
//KPR , Credit Multiguna, Rekening Koran, Produk Investasi
// Picker, Deskripsi, 
export default class Tasks extends Component {
   static navigationOptions = {
    title: 'Group contact Add',
    headerTintColor: 'black'
  };
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), name: null,  description: null, id_user:129219, id_contact:472823 };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate, type: null });
  }

    submit(){
		api.addgroup(this.state).then((result)=>{ 
	      ToastAndroid.show(result.message,ToastAndroid.SHORT);
	      if(result.status) this.props.navigation.goBack();
	    });
	}
  render() {
    return (
      
      <Container>
       
        <Content style={{borderTopWidth:0,marginLeft:20, marginRight:20,borderTopColor: "#e6e9ed"}}>

        	<Item style={{marginTop:10}} >
			<Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="id-card-alt" size={18}/> Group Name</Text>
  <TextInput style={{height: 40,marginLeft:10, paddingHorizontal:15}} value={this.state.name} onChangeText={(text) => this.setState({name:text})}/>
		</Item>

    	<Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="receipt" size={18}/> Description</Text>
	 <TextInput multiline={true} numberOfLines={7} style={{borderColor: '#ddd', borderRadius:10, padding:15, borderWidth: 1}} value={this.state.description} onChangeText={(text) => this.setState({description:text})}placeholder="Write here..........." />


        <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#00a8ea",marginBottom:hp('-0.3%'),marginTop:20,width: wp('102%')}}>
		<Left>
		<Button transparent style={{ width: wp('100%')}} onPress={()=>this.submit()}>
		  <Text style={{color:"white", fontSize:10,fontWeight:'bold'}}>Add</Text>
		  </Button>
		  </Left>
		  <Right>
		  <Button transparent   onPress={()=>this.submit()}>
		  <Icon  name="caret-right"  style={{color: "white", fontSize:14, paddingLeft: 10, }}/>
		</Button>
		  </Right>
		</ListItem>
        </Content>
      </Container>
    );
  }
}
