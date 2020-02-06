import React, { Component } from 'react';
import { Image, ImageBackground, Dimensions,ToastAndroid,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView,Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';
import api from '../api'; 
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
var screenWidth = Dimensions.get('window').width;
import Communications from 'react-native-communications';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Tabs,Tab,TabHeading, Card,CardItem, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right,Fab } from 'native-base';
class BuyerWall extends Component {
  static navigationOptions = {
    title: 'List Contact',
    headerTintColor: 'black'
  };  
   componentWillMount(){		
    api.getGroupContactlist(this.state.groupid).then((result)=>{ 
      this.setState({listingproduk:result})
        }
    );

    }


      submit(id){
		api.groupuserdelete(id).then((result)=>{ 
	      ToastAndroid.show(result.message,ToastAndroid.SHORT);
	      if(result.status)this.props.navigation.navigate('Groucontact');
	    });
	}
	constructor(props) {    
    	super(props);     
       const { params } = this.props.navigation.state;		
    const cekid = params ? params.id : null;	 
    	this.state = { active: false,groupid:cekid,request:[],listingproduk:[],mybuyer:[
    		{name:'Ilham Huda',type:'Loan Advisor',id:1,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{name:'Budi Marpaung',type:'Borrower',id:2,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{name:'Slamet Santoso',type:'Borrower',id:3,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		],buyer:'all'};
  	}


    listingproduk(listing){
  		return(
  			<View key={listing.id} style={{height:hp('13%'),paddingBottom:10,borderBottomRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('0%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text numberOfLines={1}  style={{color:"#000001"}}>{listing.name}</Text>
              <Text note numberOfLines={1} >{listing.position}</Text>
          </View>

               <Button transparent onPress={()=>{Linking.openURL('tel:' + listing.phone);}} >
        
              <Icon  name="md-call"  style={{color: "white"}}/>

            </Button>
     <Button transparent onPress={()=>this.props.navigation.navigate('Sgateway')}>
              <Icon  name="md-text"  style={{color: "white"}}/>
            </Button>
            <Button onPress={()=>this.submit(listing.id)} style={{backgroundColor: '#eb6452',marginRight:10,}} transparent >
              <Icon  name="close"  style={{color: "white"}}/>
            </Button>
            
          </List>

       


				</View>						
  			);

  	}



	render() {
		return(
           <Container style={{backgroundColor:'#f5f5f5'}}>
    <View style={{ flex: 1 }}>
        <Content style={{backgroundColor:'#f5f5f5',margin:20}}>

     <List style={{backgroundColor: '#00a8ea', height:45, borderRadius:10, marginBottom:10}}>
                               
    
            <ListItem style={{ paddingTop:-10}}>
              <Left>
 
               <Button transparent onPress={()=>this.props.navigation.navigate('Groupcontacteditcontact',{id:this.state.groupid})}>
              
              <Text style={{color:"white"}}>Add Contact to Group</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Groupcontacteditcontact',{id:this.state.groupid})}>
              <Icon  name="add"  style={{color: "white", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
         
          </List>

       <Searchbar
       style={{backgroundColor:"white",margin:5,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search User"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />

         
		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			<ScrollView style={{flex:1, padding:15}}>

                	{(this.state.listingproduk.length>0)?this.state.listingproduk.map((item)=>this.listingproduk(item)):null}

            
			<View style={{height:20}}></View>
			</ScrollView>
		</View>

         
      </Content>
     
        </View>
    </Container>
		);		
	}
}

export default BuyerWall;