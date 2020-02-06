import React, { Component } from 'react';
import { Image, Text, ImageBackground, Dimensions,ActivityIndicator,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import api from '../api'; 
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import * as Font from "expo-font";
var screenWidth = Dimensions.get('window').width;
import Communications from 'react-native-communications';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Tabs,Tab,TabHeading, Card,CardItem, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right,Fab } from 'native-base';
class BuyerWall extends Component {
  static navigationOptions = {
    title: 'Contact',
    headerTintColor: 'black'
  };
   componentWillMount(){		
    api.getContact(global.user_id).then((result)=>{ 
      this.setState({listingproduk:result, loading: false})
        }

        
    );

api.getRequest(global.userid).then((result)=>{ 
      this.setState({listingrequest:result})
        }
    );
    }

 
	constructor(props) {    
    	super(props);      
    	this.state = { active: false,loading: true,request:[],listingproduk:[],mybuyer:[
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
          <Text style={{color:"#000001",fontWeight:'bold', fontSize:16}}>{listing.name.substring(0, 13)}</Text>
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
       if (!this.state.listingrequest) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('0%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text numberOfLines={1}  style={{color:"#000001"}}>{listing.name}</Text>
              <Text note numberOfLines={1} >{listing.type}</Text>
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
         if (!this.state.listingproduk) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
  		return(
  			<View key={listing.id} style={{height:hp('13%'),marginBottom:10,backgroundColor:'#fff'}}>

            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('0%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text numberOfLines={1}  style={{color:"#575757",fontWeight:'bold', fontSize:16}}>{listing.name}</Text>
              <Text note numberOfLines={1} style={{color:"#a1a1a1"}} >{listing.type}</Text>
          </View>
        <Button transparent onPress={()=>{Linking.openURL('tel:' + listing.phone);}} >
        
              <Icon  name="md-call"  style={{color: "#bdbebf"}}/>

            </Button>
     <Button transparent onPress={()=>{Linking.openURL('whatsapp://send?text=' + '' + '&phone=62' + listing.phone);}}>
              <Icon  name="logo-whatsapp"  style={{color: "#bdbebf"}}/>
            </Button>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contactdetail',{id:listing.id})}>
              <Icon  name="arrow-forward"  style={{color: "#bdbebf"}}/>
            </Button>
            
          </List>

       


				</View>						
  			);

  	}

    render_listingloan(listing){
          if (!this.state.listingloan) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
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

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#f5f5f5",width: wp('78%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color:"#000001", fontSize:10,fontWeight:'bold'}}>Read Note</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent >
              <Icon  name="arrow-forward"  style={{color: "#000001", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>


           </View>


				</View>						
  			);

  	}

	render() {
    if (this.state.loading) {
      return <ActivityIndicator color='#00a8ea' style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80}}/>;
    }
		return(
           <Container style={{backgroundColor:'#f5f5f5'}}>
    <View style={{ flex: 1 }}>
        <Content style={{backgroundColor:'#f5f5f5',margin:20}}>
   <List style={{backgroundColor: '#00a8ea', height:45, borderRadius:10, marginBottom:10}}>
                               
    
            <ListItem style={{ paddingTop:-10}}>
              <Left>
 
            <Button transparent onPress={()=>this.props.navigation.navigate('Contactadd')}>
   
              
              <Text style={{color:"white"}}>Add Contact</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Contactadd')}>
              <Icon  name="add"  style={{color: "white", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
         
          </List>

          			
			<View style={{flexDirection:'row',paddingTop:15,alignContent:'space-between',backgroundColor:'#fff'}}>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'all'})}>
        
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='all')?'#00a8ea':'#ccc',color:(this.state.buyer=='all')?'#00a8ea':'#000'}}>All</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'request'})}>
       
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='request')?'#00a8ea':'#ccc',color:(this.state.buyer=='request')?'#00a8ea':'#000'}}>Access</Text>
				</TouchableOpacity>
   
			</View>

       <Searchbar
       style={{backgroundColor:"white",margin:5,marginTop:15,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search Contact"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
        


           

         
		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			<ScrollView style={{flex:1, padding:15}}>

                	{(this.state.buyer=='all')?this.state.listingproduk.map((item)=>this.listingproduk(item)):null}
             

                	{(this.state.buyer=='request')?this.state.listingrequest.map((item)=>this.request(item)):null}

            
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

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  }
  
});