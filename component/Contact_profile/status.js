import React, { Component } from 'react';
import { Image, Text, ImageBackground, TouchableOpacity, View, ScrollView,ToastAndroid,TextInput, Alert } from 'react-native';
import api from '../api'; 
import { Container, Header, Form, Textarea, Label, DatePicker, Content, List, ListItem, Thumbnail,Item, Input, Left, Button, Body,Footer,FooterTab, Title, Right, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Note Type - Business Note
// BCA MASTER - BANK OFFICE PUSAT - BANK CABANG KOTA
// KPR Perorangan
//KPR , Credit Multiguna, Rekening Koran, Produk Investasi
// Picker, Deskripsi, 
export default class Tasks extends Component {
   static navigationOptions = {
    title: 'Status' ,
    headerTintColor: 'black'
  };
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;		
    const cekid = params ? params.id : null;	
    this.state = { chosenDate: new Date(),id_contact: cekid, document_submited: '', status_proccess:'', bi_checking: '', asset_appraisal:'', credit_analysis:'', akad:''  ,noted:''};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate, type: null });
  }



	componentWillMount(){   
		api.getStatusDetail(this.state.id_contact).then((result)=>{ 
			var p = result[0];
	      	this.setState({profile:p, document_submited:p.document_submited, status_proccess:p.status_proccess, bi_checking:p.bi_checking, asset_appraisal:p.asset_appraisal, credit_analysis:p.credit_analysis, akad:p.akad  ,noted:p.noted});      
		}); 
	Alert.alert('tes', 'adalah :  ' + this.state.document_submited)
	}



  render() {
    return (
      
      <Container>
       
        <Content style={{borderTopWidth:0,marginLeft:20, marginRight:20,borderTopColor: "#e6e9ed"}}>

        	<Item style={{marginTop:10}} >
          <Left>
			<Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="id-card-alt" size={18}/> Document Submited</Text>
	</Left>
  <Right>
				 <Text style={{marginTop:10,color:'black',paddingHorizontal:10,borderRadius:5,borderWidth:1,borderColor:'black',fontSize:12, textAlign:'center',paddingVertical:5}} value={this.state.document_submited} >{this.state.document_submited} </Text>
          </Right>
		</Item>
		
		 <Item style={{marginTop:10}}>
       <Left>
		 			<Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="university" size={18}/> Status Process by Bank</Text>
		 	</Left>
  <Right>
		 <Text style={{marginTop:10,color:'black',paddingHorizontal:10,borderRadius:5,borderWidth:1,borderColor:'black',fontSize:12, textAlign:'center',paddingVertical:5}}>{this.state.status_proccess} </Text>
           </Right>
		</Item>


    	 <Item style={{marginTop:10}}>
         <Left>
		 			<Text style={{fontSize:14,marginVertical:15}}>-   BI Checking</Text>
               </Left>
		 <Right>
				 <Text style={{marginTop:10,color:'black',paddingHorizontal:10,borderRadius:5,borderWidth:1,borderColor:'black',fontSize:12, textAlign:'center',paddingVertical:5}}>{this.state.bi_checking} </Text>
           </Right>
		</Item>

    	 <Item style={{marginTop:10}}>
         <Left>
		 			<Text style={{fontSize:14,marginVertical:15}}>-   Asset Apraisal</Text>
		 	</Left>
  <Right>
		 <Text style={{marginTop:10,color:'black',paddingHorizontal:10,borderRadius:5,borderWidth:1,borderColor:'black',fontSize:12, textAlign:'center',paddingVertical:5}}>{this.state.asset_appraisal} </Text>
           </Right>
		</Item>


    	 <Item style={{marginTop:10}}>
         <Left>
		 			<Text style={{fontSize:14,marginVertical:15}}>-   Credit Analysis</Text>
		</Left>
  <Right>
			 <Text style={{marginTop:10,color:'black',paddingHorizontal:10,borderRadius:5,borderWidth:1,borderColor:'black',fontSize:12, textAlign:'center',paddingVertical:5}}>{this.state.credit_analysis}  </Text>
           </Right>
		</Item>

    	 <Item style={{marginTop:10}}>
       <Left>
		 			<Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="handshake" size={18}/> Akad</Text>
	</Left>
  <Right>
					 <Text style={{marginTop:10,color:'black',paddingHorizontal:10,borderRadius:5,borderWidth:1,borderColor:'black',fontSize:12, textAlign:'center',paddingVertical:5}}>{this.state.akad} </Text>
				 
  </Right>
		</Item>
    
    <Text style={{fontSize:17,fontWeight:'bold',marginVertical:15}}><Icon name="receipt" size={18}/> Noted</Text>
	 <TextInput multiline={true} numberOfLines={7} style={{borderColor: '#ddd', borderRadius:10, padding:15, borderWidth: 1}} value={this.state.noted} onChangeText={(text) => this.setState({noted:text})}placeholder="" />

        <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#00a8ea",marginBottom:hp('-0.3%'),marginTop:20,width: wp('102%')}}>
		<Left>
		<Button transparent style={{ width: wp('100%')}} onPress={()=>this.submit()}>
		  <Text style={{color:"white", fontSize:10,fontWeight:'bold'}}>Done</Text>
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
