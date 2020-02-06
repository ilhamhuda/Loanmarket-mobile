import React, { Component } from 'react';
import { Image, Text,Picker, Linking, ImageBackground, TouchableOpacity, View, ScrollView, Alert, AsyncStorage, ToastAndroid } from 'react-native';
import api from '../api'; 
import { Container, Header, Label, DatePicker, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-material-dropdown';
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
    title: 'Add Contact',
    headerTintColor: 'black'
  };
constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() ,kategori:[],user_id: global.user_id, type: null, pilihkategori:'',name: null, company_name:null, phone: null, address:null, email:null};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
   componentWillMount(){		
    api.getKategoriLists().then((result)=>{ 
      this.setState({kategori:result.data})
        }
    );
      }

    submit(){
		api.addcontact(this.state).then((result)=>{ 
	      ToastAndroid.show(result.message,ToastAndroid.SHORT);
	      if(result.status) this.props.navigation.navigate('Home');
	    });
	}
  render() {
    return (
      
      <Container>
      
        <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
        <List>
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
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Person</Text>
            </ListItem>
            </List>
            
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Name</Label>
              <Input defaultValue={this.state.name} onChangeText={(text) => this.setState({name:text})}/>
            </Item>
             <Item style={{marginTop:10}}floatingLabel last>
              <Label>Company Name</Label>
              <Input defaultValue={this.state.company_name}  onChangeText={(text) => this.setState({company_name:text})}/>
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Position</Label>
              <Input  defaultValue={this.state.type} onChangeText={(text) => this.setState({type:text})}/>
            </Item>
             <Item style={{marginTop:10}}floatingLabel last>
              <Label>Phone</Label>
              <Input defaultValue={this.state.phone}  onChangeText={(text) => this.setState({phone:text})}/>
            </Item>
             <Item style={{marginTop:10}}floatingLabel last>
              <Label>email</Label>
              <Input defaultValue={this.state.email}  onChangeText={(text) => this.setState({email:text})}/>
            </Item>
          <List>
            </List>
              <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Residency</Text>
            </ListItem>
  
               <Dropdown
               containerStyle={{marginLeft:20,width:wp('80%')}}
        label='Pilih Kategori'
        data={this.state.kategori}
        onChangeText={(value) =>
          this.setState({pilihkategori: value})
        }
      />
  
   
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Address</Label>
              <Input style={{height:hp('20%')}} defaultValue={this.state.address}  onChangeText={(text) => this.setState({address:text})}/>
            </Item>

          
    
        </Content>
      </Container>
    );
  }
}
