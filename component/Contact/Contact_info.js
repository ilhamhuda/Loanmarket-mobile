import React, { Component } from 'react';
import { Image, Text, Linking, ImageBackground, TouchableOpacity, View, ScrollView, Alert, AsyncStorage, ToastAndroid } from 'react-native';
import api from '../api'; 
import { Container, Header, Label, DatePicker, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
    title: 'Contact Info',
    headerTintColor: 'black'
  };
constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;		
    const cekid = params ? params.id : null;	
    this.state = { chosenDate: new Date() ,idcontact:cekid,profile:[], user_id: global.user_id, type: null, name: null, company_name:null, phone: null, address:null, email:null};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  componentWillMount(){   
		api.getDetailContact(this.state.idcontact).then((result)=>{ 
			var p = result[0];
	      	this.setState({profile:p,id_contact: p.id, name:p.name,address:p.address, type:p.type, company_name:p.company_name, email:p.email, phone: p.phone});      
	    }); 
	}


    submit(){
		api.updatecontact(this.state).then((result)=>{ 
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
            <Text style={{color: "grey", fontSize: 12}}>Person</Text>
          </ListItem>
          </List>
        
          <Item style={{marginTop:10}}floatingLabel last>
            <Label>Name</Label>
            <Input value={this.state.name} onChangeText={(text) => this.setState({name:text})}/>
          </Item>
           <Item style={{marginTop:10}}floatingLabel last>
            <Label>Company Name</Label>
            <Input value={this.state.company_name}  onChangeText={(text) => this.setState({company_name:text})}/>
          </Item>
          <Item style={{marginTop:10}}floatingLabel last>
            <Label> Position</Label>
            <Input value={this.state.type} onChangeText={(text) => this.setState({type:text})}/>
          </Item>
           <Item style={{marginTop:10}}floatingLabel last>
            <Label>Phone</Label>
            <Input value={this.state.phone}  onChangeText={(text) => this.setState({phone:text})}/>
          </Item>
           <Item style={{marginTop:10}}floatingLabel last>
            <Label>email</Label>
            <Input value={this.state.email}  onChangeText={(text) => this.setState({email:text})}/>
          </Item>
        <List>
          </List>
            <ListItem itemDivider>
            <Text style={{color: "grey", fontSize: 12}}>Residency</Text>
          </ListItem>
             <Item style={{marginTop:10}}floatingLabel last>
            <Label>Address</Label>   
          </Item>
          <TextInput multiline={true} numberOfLines={7}  value={this.state.address}  onChangeText={(text) => this.setState({address:text})}/>

             <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#00a8ea",marginBottom:hp('-0.3%'),width: wp('102%')}}>
          <Left>
          <Button transparent style={{ width: wp('100%')}} onPress={()=>this.submit()}>
            <Text style={{color:"white", fontSize:10,fontWeight:'bold'}}>UPDATE</Text>
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
