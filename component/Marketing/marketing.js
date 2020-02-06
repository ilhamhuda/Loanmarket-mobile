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
    title: 'Email Communicator',
    headerTintColor: 'black'
  };
   componentWillMount(){		
    api.getTemplate(global.userid).then((result)=>{ 
      this.setState({listingproduk:result, loading: false})
        }
        
    );

    }

 
	constructor(props) {    
    	super(props);      
    	this.state = { active: false,loading: true,request:[],listingproduk:[],buyer:'all'};
  	}

    listingproduk(listing){
  		return(
  			<View key={listing.id} style={{marginTop:10,borderRadius:10,paddingBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<View></View>
<Text numberOfLines={1}  style={{color:"black",width: wp('70%'), paddingBottom:5,marginRight:10, fontSize: 16}}>{listing.title_message} </Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="calendar"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
           <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>
           {listing.message}</Text>
   
             </View>

            
        

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#f5f5f5",width: wp('73%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Ecommunicatortemplate',{id:listing.id})}>
              <Text style={{color:"#9c9b98", fontSize:10,fontWeight:'bold'}}>Using template</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent  onPress={()=>this.props.navigation.navigate('Ecommunicatortemplate',{id:listing.id})}>
              <Icon  name="arrow-forward"  style={{color: "#9c9b98", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>


           </View>


				</View>						
  			);

  	}
   

	render() {
    if (this.state.loading) {
      return<ActivityIndicator color='#00a8ea' style={{flex: 1,
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
 
            <Button transparent onPress={()=>this.props.navigation.navigate('Ecommunicator')}>
   
              
              <Text style={{color:"white"}}>Add New Email</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Ecommunicator')}>
              <Icon  name="add"  style={{color: "white", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
         
          </List>

          			
			

       <Searchbar
       style={{backgroundColor:"white",margin:5,marginTop:15,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search Template"
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