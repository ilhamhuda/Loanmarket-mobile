import React, { Component } from 'react';
import { Image, ImageBackground, Dimensions,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView } from 'react-native';

var screenWidth = Dimensions.get('window').width;
import Communications from 'react-native-communications';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Tabs,Tab,TabHeading, Card,CardItem, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right,Fab } from 'native-base';
class BuyerWall extends Component {
  static navigationOptions = {
    title: 'Contact Detail',
    headerTintColor: 'black'
  };
	constructor(props) {    
    	super(props);      
    	this.state = { active: false,mybuyer:[
    		{agenid:1,desc:'Elon Musk',title:'Rumah Minimalis Murah',id:1,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Baru Renovasi',id:2,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Modern Cluster',id:3,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Nature Residence',id:4,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Pondok Indah',id:5,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		],publik:[
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:1,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadetail'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:2,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadetail'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:3,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadetail'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:4,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadetail'},
    		{agenid:1,desc:'Client/Person',title:'Ilham Huda',id:5,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsadetail'},
    		],buyer:'mybuyer'};
  	}

  	render_listing(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>{listing.title} </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>{listing.desc}</Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>
           {listing.date}</Text>
             </View>

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#f5f5f5",width: wp('78%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate(listing.btn)}>
              <Text style={{color:"#9c9b98", fontSize:10,fontWeight:'bold'}}>{listing.text}</Text>
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
		return(
           <Container style={{backgroundColor:'#f5f5f5'}}>
    <View style={{ flex: 1 }}>
        <Content style={{backgroundColor:'#f5f5f5',margin:20}}>
 
         <Card
            style={{
              borderRadius: 10,
              borderWidth: 0,
              borderColor: '#ffffff',
              marginBottom:20
            }}>
            <CardItem
              style={{
                backgroundColor: '#00a8ea',
                paddingTop: 30,
                paddingBottom: 30,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: 'ffffff',
              }}>
               <Thumbnail
                  style={{
                    borderWidth: 2,
                    width: wp('20%'),
                    height: hp('15%'),
                    borderColor: '#ffffff',
                  }}
                  source={{
                    uri:
                      'https://www.sunchem.nl/wp-content/uploads/H_About/Teamphotos/profile-placeholder.jpg',
                  }}
                />
              <View style={{flex:1, flexDirection:'column',marginLeft:10}}  >
                  <Text
                    style={{
                      color: 'white',
                      paddingBottom: 2,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Ilham Huda
                  </Text>
                  <View style={{flex:1, flexDirection:'row',}}>
                   <View style={{flex:1, flexDirection:'column'}}>
                   <Text
                    style={{ color: 'white', paddingBottom: 2,  fontSize: 12 }}>
                     <Icon name="md-person" style={{fontSize: 17,marginLeft:10, color:'white'}}/> Type  
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 2,  fontSize: 12 }}>
                     <Icon name="md-call" style={{fontSize: 17,marginLeft:10, color:'white'}}/> Phone  
                  </Text>
                   <Text
                    style={{ color: 'white', paddingBottom: 2,  fontSize: 12 }}>
                     <Icon name="md-mail" style={{fontSize: 17,marginLeft:10, color:'white'}}/> Email  
                  </Text>
                   </View>

                    <View style={{flex:1, flexDirection:'column'}}>
                    <Text
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>
                     Client/Person
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>
                     +6289601777308
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>
                     ilhamhuda6@gmail.com
                  </Text>
                   </View>
                  </View>
                
      
                 
        
               
         </View>
            </CardItem>
          </Card>


                 <List style={{backgroundColor: '#00a8ea', height:55, borderRadius:10, marginBottom:10}}>
                               
    
            <ListItem style={{ paddingTop:-10}}>
             
 
    

             <Button transparent onPress={()=>{Linking.openURL('tel:089601777308');}} style={{flex:1, flexDirection:'column'}}>
              <Icon  name="md-call"  style={{color: "white"}}/>
              <Text style={{color:'white', textAlign: 'center', fontSize: 10 }}>
              Call
              </Text>
            </Button>

           <Button transparent onPress={()=>this.props.navigation.navigate('Sgateway')} style={{flex:1, flexDirection:'column'}}>
              <Icon  name="md-text"  style={{color: "white"}}/>
                <Text style={{color:'white', textAlign: 'center', fontSize: 10 }}>
              SMS
              </Text>
            </Button>
             <Button transparent style={{flex:1, flexDirection:'column'}}>
              <Icon  name="logo-whatsapp"  style={{color: "white"}}/>
              <Text style={{color:'white', textAlign: 'center', fontSize: 10 }}>
              WA
              </Text>
            </Button>
             <Button style={{flex:1, flexDirection:'column'}} transparent onPress={()=>this.props.navigation.navigate('Email')}>
              <Icon  name="md-mail"  style={{color: "white"}}/>
              <Text style={{color:'white', textAlign: 'center', fontSize: 10 }}>
              Email
              </Text>
            </Button>
      
            </ListItem>
         
          </List>

         
		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			
			<View style={{flexDirection:'row',paddingTop:15,alignContent:'space-between',backgroundColor:'#fff'}}>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'mybuyer'})}>
        
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='mybuyer')?'#00a8ea':'#ccc',color:(this.state.buyer=='mybuyer')?'#00a8ea':'#000'}}>Notes</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'publik'})}>
       
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='publik')?'#00a8ea':'#ccc',color:(this.state.buyer=='publik')?'#00a8ea':'#000'}}>Loan Require</Text>
				</TouchableOpacity>
			</View>

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
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="add" />
            <Button style={{ backgroundColor: '#00a8ea' }} onPress={()=>this.props.navigation.navigate('Notesadd')}>
              <Icon name="document" />
 
            </Button>
            <Button style={{ backgroundColor: '#00a8ea' }} onPress={()=>this.props.navigation.navigate('Requirementsadd')}>
              <Icon name="list-box" />
      
            </Button>
          </Fab>
        </View>
    </Container>
		);		
	}
}

export default BuyerWall;