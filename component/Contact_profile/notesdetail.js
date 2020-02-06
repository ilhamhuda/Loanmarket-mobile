import React, { Component } from 'react';
import { Image, Text, Linking, ImageBackground, TouchableOpacity, View, ScrollView, Alert, AsyncStorage, ToastAndroid,TextInput } from 'react-native';
import api from '../api'; 
import { Container, Header, Label, DatePicker,Textarea, Content, List, ListItem, Thumbnail,Item, Input, Left, Button, Body, Title,Footer,FooterTab, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
    title: 'Note Detail',
    headerTintColor: 'black'
  };
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;		
    const cekid = params ? params.id : null;	
    this.state = { chosenDate: new Date(),profile: [],idcontact:cekid, type: null, id:null, assign_to:null, note_detail: null, due_date:null, id_user:129219, id_contact:472823 };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate, type: null });
  }

  componentWillMount(){   
		api.getDetailNote(this.state.idcontact).then((result)=>{ 
			var p = result[0];
	      	this.setState({profile:p, assign_to:p.assign_to, type: p.type, note_detail: p.note_detail, due_date:p.due_date,});      
	    }); 
	}


    submit(){
		api.updateNote(this.state).then((result)=>{ 
	      ToastAndroid.show(result.message,ToastAndroid.SHORT);
	      if(result.status) this.props.navigation.goBack();
	    });
  }
  

  render() {
    return (
      
      <Container>
	<Content style={{borderTopWidth:0,margin:20, borderTopColor: "#e6e9ed"}}>
       	
		   <Item style={{marginTop:10}} >
			   <Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="id-card-alt" size={18}/> Type</Text>
	 <TextInput style={{height: 40,marginLeft:10, paddingHorizontal:15}} value={this.state.type} onChangeText={(text) => this.setState({type:text})}/>
		   </Item>
			<Item style={{marginTop:10}}>
		   <Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="calendar-day" size={18}/> Due Date</Text>
		   <DatePicker
		   defaultDate={new Date()}
		   // minimumDate={new Date(2018, 1, 1)}
		   // maximumDate={new Date(this.state.)}
		   locale={"en"}
		   value={this.state.due_date}
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
			<Item style={{marginTop:10}}>
						<Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="user-alt" size={18}/> Assign To</Text>
			 <TextInput style={{height: 40,marginLeft:10, paddingHorizontal:15}} value={this.state.assign_to} onChangeText={(text) => this.setState({assign_to:text})}/>
		   </Item>
		   <Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="receipt" size={18}/> Deskripsi</Text>
		<TextInput multiline={true} numberOfLines={7} style={{borderColor: '#ddd', borderRadius:10, padding:15, borderWidth: 1}} value={this.state.note_detail} onChangeText={(text) => this.setState({note_detail:text})}placeholder="Write here..........." />
   
   
		   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#00a8ea",marginBottom:hp('-0.3%'),marginTop:20,width: wp('102%')}}>
		   <Left>
		   <Button transparent style={{ width: wp('100%')}} onPress={()=>this.submit()}>
			 <Text style={{color:"white", fontSize:10,fontWeight:'bold'}}>UPDATE</Text>
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
