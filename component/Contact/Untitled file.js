import React, { Component } from 'react';
import { Image, ImageBackground, Dimensions,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView } from 'react-native';
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
    title: 'Contact Detail',
    headerTintColor: 'black'
  };
	constructor(props) {    
    	super(props);
      const { params } = this.props.navigation.state;		
      const cekid = params ? params.id : null;	      
    	this.state = {detail:[],listingnote: [],listingrequire: [],idcontact:cekid, active: false,mybuyer:[
    		{agenid:1,desc:'Elon Musk',title:'Rumah Minimalis Murah',id:1,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Baru Renovasi',id:2,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Modern Cluster',id:3,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Nature Residence',id:4,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Pondok Indah',id:5,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		],publik:[
    		{agenid:1,desc:'Pembelian Rumah dan Renovasi Kecil',title:'KPR, Kredit Multiguna',id:1,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Pembelian Rumah',title:'Take Over Top Up',d:2,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Renovasi Kecil',title:'KPR',id:3,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Pembelian Rumah dan Renovasi Kecil',title:'Kredit Rekening Koran',id:4,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Pembelian Rumah dan Renovasi Kecil',title:'Term Loan',id:5,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		]
        ,cpa:[
    		{agenid:1,desc:'Pembelian Rumah dan Renovasi Kecil',title:'KPR, Kredit Multiguna',id:1,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Pembelian Rumah',title:'Take Over Top Up',d:2,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Renovasi Kecil',title:'KPR',id:3,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Pembelian Rumah dan Renovasi Kecil',title:'Kredit Rekening Koran',id:4,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Pembelian Rumah dan Renovasi Kecil',title:'Term Loan',id:5,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		],buyer:'note'};
  	}

    
componentWillMount(){   
  api.getDetailContact(this.state.idcontact).then((result)=>{ 
    this.setState({detail:result});
  }); 
  
  api.getNote().then((result)=>{ 
      this.setState({listingnote:result.data})
        }
    );


  api.getRequire().then((result)=>{ 
      this.setState({listingrequire:result.data})
        }
    );

  /*api.getcategory4().then((result)=>{ 
    this.setState({listing:result.data})
  });	*/  
}


  	listingproduk(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>{listing.note_detail} </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>{listing.type}</Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{backgroundColor:'grey',color:"#063359", paddingBottom:10, fontSize: 12, }}>
           ALL</Text>
           <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>
           {listing.due_date}</Text>
             </View>

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#f5f5f5",width: wp('78%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Notesdetail',{id:listing.id_user})}>
              <Text style={{color:"#9c9b98", fontSize:10,fontWeight:'bold'}}>Read</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent  onPress={()=>this.props.navigation.navigate('Notesdetail',{id:listing.id_user})}>
              <Icon  name="arrow-forward"  style={{color: "#9c9b98", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>


           </View>


				</View>						
  			);

  	}


    profilebar(listing){
  		return(
           
<List style={{backgroundColor: '#00a8ea', height:55, borderRadius:10, marginBottom:10}}>
                               
    
                               <ListItem style={{ paddingTop:-10}}>
                                
                               
                               
                               
                                <Button transparent onPress={()=>{Linking.openURL('tel:');}} style={{flex:1, flexDirection:'column'}}>
                                 <Icon  name="md-call"  style={{color: "white"}}/>
                                 <Text style={{color:'white', textAlign: 'center', fontSize: 8 }}>
                                 Call
                                 </Text>
                               </Button>
                               
                               <Button transparent onPress={()=>this.props.navigation.navigate('Sgateway')} style={{flex:1, flexDirection:'column'}}>
                                 <Icon  name="md-text"  style={{color: "white"}}/>
                                   <Text style={{color:'white', textAlign: 'center', fontSize: 8 }}>
                                 SMS
                                 </Text>
                               </Button>
                                <Button transparent style={{flex:1, flexDirection:'column'}}>
                                 <Icon  name="logo-whatsapp"  style={{color: "white"}}/>
                                 <Text style={{color:'white', textAlign: 'center', fontSize: 8 }}>
                                 WA
                                 </Text>
                               </Button>
                                <Button style={{flex:1, flexDirection:'column'}} transparent onPress={()=>this.props.navigation.navigate('Email')}>
                                 <Icon  name="md-mail"  style={{color: "white"}}/>
                                 <Text style={{color:'white', textAlign: 'center', fontSize: 8 }}>
                                 Email
                                 </Text>
                               </Button>
                               
                               <Button style={{flex:1, flexDirection:'column'}} transparent onPress={()=>this.props.navigation.navigate('Contactinfo',{id:listing.id})}>
                                 <Icon  name="information"  style={{color: "white"}}/>
                                 <Text style={{color:'white', textAlign: 'center', fontSize: 8 }}>
                                 Info
                                 </Text>
                               </Button>
                               </ListItem>
                               
                               </List>
);
  }
    profile(listing){
  		return(

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
              
              <View style={{flex:1, flexDirection:'column',marginLeft:10}}  >
                  <Text
                    style={{
                      color: 'white',
                      paddingBottom: 2,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
       {listing.name}
                  </Text>
                  <View style={{flex:1, flexDirection:'row',}}>
                   <View style={{flex:1, flexDirection:'column'}}>
                   <Text
                    style={{ color: 'white', paddingBottom: 2,  fontSize: 12 }}>
                     <Icon name="md-person" style={{fontSize: 17,marginLeft:10, color:'white'}}/> Position  
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
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>{listing.type}
                
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>{listing.phone}
                  
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>{listing.email}
                  </Text>
                   </View>
                  </View>
                
      
                 
        
               
         </View>
            </CardItem>
          </Card>

   
         
      );
      }
listingrequire(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>{listing.total_amount} </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>{listing.loan_purpose}</Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, }}>
           {listing.status}</Text>
             </View>

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#f5f5f5",width: wp('78%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate(listing.btn)}>
              <Text style={{color:"#9c9b98", fontSize:10,fontWeight:'bold'}}>Read</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent  onPress={()=>this.props.navigation.navigate('Requirementsdetail')}>
              <Icon  name="arrow-forward"  style={{color: "#9c9b98", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>


           </View>


				</View>						
  			);

  	}


    // listingproduk(listing){
  	// 	return(
  	// 		<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

    //     </View>
    //   )
    // }

    
	render() {
		return(
           <Container style={{backgroundColor:'#f5f5f5'}}>
    <View style={{ flex: 1 }}>
        <Content style={{backgroundColor:'#f5f5f5',margin:20}}>
         
        {this.state.detail.map(item =>  this.profile(item))} 

        {this.state.detail.map(item =>  this.profilebar(item))} 
 


		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			
			<View style={{flexDirection:'row',paddingTop:15,alignContent:'space-between',backgroundColor:'#fff'}}>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'note'})}>
        
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='note')?'#00a8ea':'#ccc',color:(this.state.buyer=='note')?'#00a8ea':'#000'}}>Notes</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'loan'})}>
       
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='loan')?'#00a8ea':'#ccc',color:(this.state.buyer=='loan')?'#00a8ea':'#000'}}>Loan Require</Text>
				</TouchableOpacity>

        				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'cpa'})}>
       
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='cpa')?'#00a8ea':'#ccc',color:(this.state.buyer=='cpa')?'#00a8ea':'#000'}}>CPA</Text>
				</TouchableOpacity>
   
			</View>

			<ScrollView style={{flex:1, padding:15}}>

                	{(this.state.buyer=='note')?this.state.listingnote.map((item)=>this.listingproduk(item)):null}
             

                	{(this.state.buyer=='loan')?this.state.listingrequire.map((item)=>this.listingrequire(item)):null}


                	{(this.state.buyer=='cpa')?this.state.listingnote.map((item)=>this.listingproduk(item)):null}


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