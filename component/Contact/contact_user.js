import React, { Component } from 'react';
import { Image, Text, ImageBackground, Dimensions,ToastAndroid,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView,Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';
import api from '../api'; 
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
var screenWidth = Dimensions.get('window').width;
import Communications from 'react-native-communications';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Tabs,Tab,TabHeading, Card,CardItem, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right,Fab } from 'native-base';
class BuyerWall extends Component {
  static navigationOptions = {
    title: 'Access',
    headerTintColor: 'black'
  };
   componentWillMount(){		
    api.getUser(this.state.contactid).then((result)=>{ 
      this.setState({listingproduk:result.data})
        }
    );

    }

     submit(data){
		api.addakses(this.state,data).then((result)=>{ 
	      ToastAndroid.show(result.message,ToastAndroid.SHORT);
	      if(result.status) this.props.navigation.navigate('Contactreq');
	    });
	}
	constructor(props) {    
    	super(props);     
       const { params } = this.props.navigation.state;		
    const cekid = params ? params.id : null;	 
    	this.state = { active: false,contactid:cekid,iduser:null,request:[],listingproduk:[],mybuyer:[
    		{name:'Ilham Huda',type:'Loan Advisor',id:1,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{name:'Budi Marpaung',type:'Borrower',id:2,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{name:'Slamet Santoso',type:'Borrower',id:3,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		],buyer:'all'};
  	}

  	render_listing(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('0%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text style={{color:"#000001"}}>{listing.name.substring(0, 13)}</Text>
              <Text note>{listing.type}</Text>
          </View>
        <Button transparent onPress={()=>{Linking.openURL('tel:089601777308');}} >
              <Icon  name="md-call"  style={{color: "#bdbebf"}}/>
            </Button>
     <Button transparent onPress={()=>this.props.navigation.navigate('Sgateway')}>
              <Icon  name="md-text"  style={{color: "#bdbebf"}}/>
            </Button>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contactdetail')}>
              <Icon  name="arrow-forward"  style={{color: "#bdbebf"}}/>
            </Button>
            
          </List>

       


				</View>						
  			);

  	}
  request(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('0%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text numberOfLines={1}  style={{color:"#000001"}}>{listing.name}</Text>
              <Text note numberOfLines={1} >{listing.position}</Text>
          </View>
        <Button transparent onPress={()=>{Linking.openURL('tel:' + listing.phone);}} >
        
              <Icon  name="md-call"  style={{color: "#bdbebf"}}/>

            </Button>
     <Button transparent onPress={()=>this.props.navigation.navigate('Sgateway')}>
              <Icon  name="md-text"  style={{color: "#bdbebf"}}/>
            </Button>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contactdetail',{id:listing.id})}>
              <Icon  name="arrow-forward"  style={{color: "#bdbebf"}}/>
            </Button>
            
          </List>

       


				</View>						
  			);

  	}
    listingproduk(listing){
  		return(
  			<View key={listing.id} style={{height:hp('13%'),paddingBottom:10,borderBottomRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

            <List style={{backgroundColor: 'white', height: hp('10%'), paddingTop:hp('0%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
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
            <Button style={{backgroundColor: '#9bd692',marginRight:10,}}  onPress={()=>this.submit(listing.id)} transparent >
              <Icon  name="add"  style={{color: "white"}}/>
            </Button>
            
          </List>

       


				</View>						
  			);

  	}

    render_listingloan(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>{listing.title} </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>{listing.title}</Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>
           13 Agustus 2019</Text>
             </View>

           </View>


				</View>						
  			);

  	}

	render() {
		return(
           <Container style={{backgroundColor:'#f5f5f5'}}>
    <View style={{ flex: 1 }}>
        <Content style={{backgroundColor:'#f5f5f5',margin:20}}>


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