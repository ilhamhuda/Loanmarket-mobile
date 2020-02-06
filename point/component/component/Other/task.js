import React, { Component } from 'react';
import { Image, ImageBackground, Dimensions,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
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
    title: 'To do list',
    headerTintColor: 'black'
  };

	constructor(props) {    
    	super(props);      
    	this.state = { active: false,mybuyer:[
    		{agenid:1,desc:'Slamet Santoso (PT. Ray Propertinto)',title:'Tolong Konfirmasi Tentang Status Mandiri',id:1,date:'11 Juni 2013',text:'Read Note',btn:'Notesadd',call:'089601777308'},
    		{agenid:1,desc:'Natasya Pipit (Loan Market)',title:'Tulis email',id:2,date:'11 Juni 2013',text:'Read Note',btn:'Notesadd',call:'089601777308'},
    		{agenid:1,desc:'Slamet Santoso (PT. Ray Propertinto)',title:'Tolong Konfirmasi Tentang Status Mandiri',id:3,date:'11 Juni 2013',text:'Read Note',btn:'Notesadd',call:'089601777308'},
    		{agenid:1,desc:'Natasya Pipit (Loan Market)',title:'Tulis email',id:4,date:'11 Juni 2013',text:'Read Note',btn:'Notesadd',call:'089601777308'},
    		{agenid:1,desc:'Natasya Pipit (Loan Market)',title:'Tolong Konfirmasi Tentang Status Mandiri',id:5,date:'11 Juni 2013',text:'Read Note',btn:'Notesadd',call:'089601777308'},
    		],publik:[
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:1,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadd'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:2,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadd'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:3,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadd'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:4,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadd'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:5,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadd'},
    		],buyer:'mybuyer'};
  	}

  	render_listing(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('85%')}}>
<Text style={{color:"#063359", paddingBottom:5, fontSize: 16, fontWeight: "bold"}}>{listing.desc} </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>{listing.title}</Text>
               <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="call"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>
           {listing.call}</Text>
             </View>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>
           {listing.date}</Text>
             </View>

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#ffb52b",width: wp('82%'), borderRadius:10}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate(listing.btn)}>
              <Text style={{color:"white", fontSize:10,fontWeight:'bold'}}>Set as Completed</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent >
              <Icon  name="arrow-forward"  style={{color: "white", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>


           </View>


				</View>						
  			);

  	}

    

	render() {
		return(
           <Container style={{backgroundColor:'#f5f5f5'}}>
    <View style={{ flex: 1 }}>
        <Content style={{backgroundColor:'#f5f5f5',padding:10}}>
 


                  <Searchbar
       style={{backgroundColor:"white",margin:5,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search Task"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
        
		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			


			<ScrollView style={{flex:1, padding:15}}>
    
        
			{(this.state.buyer=='mybuyer')?this.state.mybuyer.map((item)=>this.render_listing(item)):this.state.publik.map((item)=>this.render_listing(item))}
			<View style={{height:20}}></View>
			</ScrollView>
		</View>

         
      </Content>
       <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#00a8ea' }}
            position="bottomRight"
           onPress={()=>this.props.navigation.navigate('Taskadd')}>
            <Icon name="add" />
            
          </Fab>
        </View>
    </Container>
		);		
	}
}

export default BuyerWall;