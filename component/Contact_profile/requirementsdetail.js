import React, { Component } from 'react';
import { Image, Text, Linking, ImageBackground, TouchableOpacity, View, ScrollView, Alert, AsyncStorage,KeyboardAvoidingView,TextInput, NumberFormat,ToastAndroid } from 'react-native';
import api from '../api'; 
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Label, DatePicker,Textarea, Content, List, ListItem, Thumbnail,Item, Input, Left, Button, Body, Title, Right } from 'native-base';
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
    title: 'Loan Detail',
    headerTintColor: 'black'
  };
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;		
    const cekid = params ? params.id : null;	
     this.state = { chosenDate: new Date(), profile: [], idcontact: cekid,total_amount: null, id_contact:453545, id_user: global.userid, loan_purpose: null, loan_type1:null, loan_amount1: null, loan_type2: null, loan_amount2:null,  loan_type3:null, loan_amount3:null  };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate, type: null });
  }

  componentWillMount(){   
		api.getDetaiLoan(this.state.idcontact).then((result)=>{ 
			var p = result[0];
	      	this.setState({profile:p,total_amount: p.total_amount, loan_purpose: p.loan_purpose, loan_type1:p.loan_type1, loan_amount1: p.loan_amount1, loan_type2: p.loan_type2, loan_amount2:p.loan_amount2,  loan_type3:p.loan_type3, loan_amount3:p.loan_amount3  });      
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
 <ScrollView style={{flex:1,padding:15,paddingBottom:30,}}>
				<KeyboardAvoidingView behavior="padding" enabled>			

				<Text style={{fontSize:20,fontWeight:'bold',marginVertical:15}}><Icon name="donate" size={21}/> Required Total Amount</Text>

				<View style={{flex:1}}>					
						<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="" value={this.state.total_amount} onChangeText={(text) => this.setState({total_amount:text})} />
				</View>	

				<Text style={{fontSize:20,fontWeight:'bold',marginVertical:15}}><Icon name="clipboard" size={21}/> Loan Purpose</Text>

				<View style={{flex:1}}>					
						<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="" value={this.state.loan_purpose} onChangeText={(text) => this.setState({loan_purpose:text})} />
				</View>	

				<Text style={{fontSize:20,fontWeight:'bold',marginVertical:15}}><Icon name="vote-yea" size={21}/> Loan #1 (Type) </Text>

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="" value={this.state.loan_type1} onChangeText={(text) => this.setState({loan_type1:text})} />
				</View>	

				<Text style={{fontSize:20,fontWeight:'bold',marginVertical:15}}><Icon name="dollar-sign" size={21}/> Loan #1 (amount)</Text>

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="" value={this.state.loan_amount1} onChangeText={(text) => this.setState({loan_amount1:text})} />
				</View>	
				<Text style={{fontSize:20,fontWeight:'bold',marginVertical:15}}><Icon name="vote-yea" size={21}/> Loan #2 (Type) </Text>

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="" value={this.state.loan_type2} onChangeText={(text) => this.setState({loan_type2:text})} />
				</View>	

				<Text style={{fontSize:20,fontWeight:'bold',marginVertical:15}}><Icon name="dollar-sign" size={21}/> Loan #2 (amount)</Text>

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="" value={this.state.loan_amount2} onChangeText={(text) => this.setState({loan_amount2:text})} />
				</View>	



        				<Text style={{fontSize:20,fontWeight:'bold',marginVertical:15}}><Icon name="vote-yea" size={21}/> Loan #3 (Type) </Text>

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="" value={this.state.loan_type3} onChangeText={(text) => this.setState({loan_type3:text})} />
				</View>	

				<Text style={{fontSize:20,fontWeight:'bold',marginVertical:15}}><Icon name="dollar-sign" size={21}/> Loan #3 (amount)</Text>

				<View style={{flex:1,marginBottom:30}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="" value={this.state.loan_amount3} onChangeText={(text) => this.setState({loan_amount3:text})} />
				</View>	
        
 <Button style={{ height: 50,flex:1,flexDirection:"row",marginLeft:wp('-0.3%'),backgroundColor:"#00a8ea",marginBottom:30,width: wp('102%')}}>
		<View style={{flex:1,flexDirection:"column"}}>
		<Button transparent style={{ width: wp('100%')}} onPress={()=>this.submit()}>
		  <Text style={{color:"white", fontSize:10,fontWeight:'bold'}}>UPDATE</Text>
		  </Button>
		  </View>

    	</Button>
				 </KeyboardAvoidingView>

			</ScrollView>

      </Container>
    );
  }
}
