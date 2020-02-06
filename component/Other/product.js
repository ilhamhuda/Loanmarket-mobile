import React, { Component } from 'react';
import { Image, Text, ImageBackground, Dimensions,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView } from 'react-native';
var screenWidth = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Tabs,Tab,TabHeading, Card,CardItem, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right,Fab } from 'native-base';
class BuyerWall extends Component {
  static navigationOptions = {
    title: 'Product',
    headerTintColor: 'black'
  };
	constructor(props) {    
    	super(props);      
    	this.state = { active: false,mybuyer:[
    		{agenid:1,desc:'Elon Musk',title:'Rumah Minimalis Murah',id:1,date:'11 Juni 2013',text:'KPR',btn:'Productdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Baru Renovasi',id:2,date:'11 Juni 2013',text:'Kredit Multiguna Individu',btn:'Artikel2'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Pondok Indah',id:5,date:'11 Juni 2013',text:'Take Over Individu',btn:'Artikel4'},
    		],publik:[
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:2,date:'11 Juni 2013',text:'Rekening Koran Perusahaan',btn:'Artikel7'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:3,date:'11 Juni 2013',text:'Kredit Investasi Perusahaan',btn:'Artikel5'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:4,date:'11 Juni 2013',text:'Take Over Perusahaan',btn:'Artikel6'}
    		],buyer:'mybuyer'};
  	}

  	render_listing(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('85%')}}>

   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"white",width: wp('82%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate(listing.btn)}>
              <Text style={{color:"#595958", fontSize:12,fontWeight:'bold'}}>{listing.text}</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent  onPress={()=>this.props.navigation.navigate(listing.btn)}>
              <Icon  name="arrow-forward"  style={{color: "#9c9b98", fontSize:14, paddingLeft: 10}}/>
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
		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			
			<View style={{flexDirection:'row',paddingTop:15,alignContent:'space-between',backgroundColor:'#fff'}}>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'mybuyer'})}>
        
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='mybuyer')?'#00a8ea':'#ccc',color:(this.state.buyer=='mybuyer')?'#00a8ea':'#000'}}>Individu</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'publik'})}>
       
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='publik')?'#00a8ea':'#ccc',color:(this.state.buyer=='publik')?'#00a8ea':'#000'}}>Perusahaan</Text>
				</TouchableOpacity>
			</View>

			<ScrollView style={{flex:1, padding:15}}>
    
        
			{(this.state.buyer=='mybuyer')?this.state.mybuyer.map((item)=>this.render_listing(item)):this.state.publik.map((item)=>this.render_listing(item))}
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