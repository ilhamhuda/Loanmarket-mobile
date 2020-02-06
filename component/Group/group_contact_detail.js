import React, { Component } from 'react';
import { Image, Text, ImageBackground, Dimensions,ActivityIndicator,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView } from 'react-native';
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
    title: 'Group Detail',
    headerTintColor: 'black'
  };

	constructor(props) {    
    	super(props);  
             const { params } = this.props.navigation.state;		
    const cekid = params ? params.id : null;	    
    	this.state = { active: false,request:[],groupid:cekid,listingproduk:[],listingdetail:[],mybuyer:[
    		{name:'Ilham Huda',type:'Loan Advisor',id:1,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{name:'Budi Marpaung',type:'Borrower',id:2,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{name:'Slamet Santoso',type:'Borrower',id:3,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		],buyer:'all'};
  	}

     componentWillMount(){		
    api.getGroupUserDetail(this.state.groupid).then((result)=>{ 
      this.setState({listingproduk:result})
        }
    );
   api.getGroupDetail(this.state.groupid).then((result)=>{ 
      this.setState({listingdetail:result})
        }
    );
    }

    listingproduk(listing){

  		return(
  			<View key={listing.id} style={{height:hp('13%'),marginBottom:10,backgroundColor:'#fff'}}>

            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('0%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text numberOfLines={1}  style={{color:"#000001"}}>{listing.name}</Text>
              <Text note numberOfLines={1} >{listing.type}</Text>
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


    listingdetail(listing){

  		return(
  			<View key={listing.id} style={{borderRadius:10,marginTop:10,paddingBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
                <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('90%')}}>
             <Button style={{marginLeft:10,marginBottom:20,flex:1,width:wp('20%'),borderRadius:10,height:hp('5%'),borderColor:'black',borderWidth:1, flexDirection:'row'}} transparent onPress={()=>this.props.navigation.navigate('Groupcontactedit',{id:listing.id})}>
                                 <Icon  name="person"  style={{color: "black", fontSize: 10}}/>
                                 <Text style={{marginLeft:-30,color:'black', textAlign: 'center', fontSize: 8 }}>
                                 Edit
                                 </Text>
                               </Button>
<Text numberOfLines={1}  style={{color:"black",marginLeft:20, paddingBottom:5,marginRight:10, fontSize: 20, fontweight:'bold'}}>{listing.name} </Text>
           
              
           
              </View>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="paper"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
           <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>
           {listing.description}</Text>
   
             </View>

           </View>


				</View>										
  			);

  	}

	render() {
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
           <Container style={{backgroundColor:'#f5f5f5'}}>
    <View style={{ flex: 1 }}>
        <Content style={{backgroundColor:'#f5f5f5',margin:20}}>
   	{(this.state.buyer=='all')?this.state.listingdetail.map((item)=>this.listingdetail(item)):null}


       <Searchbar
       style={{backgroundColor:"white",margin:5,marginTop:15,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search Contact"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
        


           

         
		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			<ScrollView style={{flex:1, padding:15}}>

                	{(this.state.buyer=='all')?this.state.listingproduk.map((item)=>this.listingproduk(item)):null}
  
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