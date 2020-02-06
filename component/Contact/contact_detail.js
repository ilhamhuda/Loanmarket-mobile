import React, { Component } from 'react';
import { Image, Text, ImageBackground, ActivityIndicator,Dimensions,TouchableOpacity,StyleSheet,  View,ToastAndroid,  Linking, ScrollView } from 'react-native';
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
    headerTitle: 'Contact Detail',
    headerRight: () => (
    <Button transparent onPress={()=>this.submitdelete()}>
  <Icon  name="trash"  style={{color: "black"}}/>
</Button>
    ),
  };
   
	constructor(props) {    
    	super(props);
      const { params } = this.props.navigation.state;		
      const cekid = params ? params.id : null;	      
    	this.state = {detail:[],loading:true,listingcpa:[],listingnote: [],listingrequire: [],listingstatus: [],idcontact:cekid, active: false,buyer:'note'};
  	}

       submitdelete(id){
		api.contactdelete(this.state.idcontact).then((result)=>{ 
	      ToastAndroid.show(result.message,ToastAndroid.SHORT);
     
	      if(result.status) this.props.navigation.navigate('Contact');
	    });
	}
componentWillMount(){   
  api.getDetailContact(this.state.idcontact).then((result)=>{ 
    this.setState({detail:result, email:result[0].email, name:result[0].name, phone:result[0].phone, type:result[0].type, kategori:result[0].kategori,loading:false });
  }); 
 
  api.getNote(this.state.idcontact).then((result)=>{ 
      this.setState({listingnote:result})
        }
    );


  api.getRequire(this.state.idcontact).then((result)=>{ 
      this.setState({listingrequire:result})
        }
    );  


  api.getStatus(this.state.idcontact).then((result)=>{ 
      this.setState({listingstatus:result})
        }
    );  

 api.getCpa(this.state.idcontact).then((result)=>{ 
      this.setState({listingcpa:result})
        }
    );  
  /*api.getcategory4().then((result)=>{ 
    this.setState({listing:result.data})
  });	*/  
}


  	listingproduk(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,paddingBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<View></View>
<Text numberOfLines={1}  style={{color:"black",width: wp('70%'), paddingBottom:5,marginRight:10, fontSize: 16}}>{listing.note_detail} </Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="calendar"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
           <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>
           {listing.type}</Text>
   
             </View>

            
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
           <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>
           {listing.due_date}</Text>
   
             </View>

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#f5f5f5",width: wp('73%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Notesdetail',{id:listing.id})}>
              <Text style={{color:"#9c9b98", fontSize:10,fontWeight:'bold'}}>Read</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent  onPress={()=>this.props.navigation.navigate('Notesdetail',{id:listing.id})}>
              <Icon  name="arrow-forward"  style={{color: "#9c9b98", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>


           </View>


				</View>						
  			);

  	}
listingstatus(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,paddingBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<View></View>
<Text numberOfLines={1}  style={{color:"black",width: wp('70%'), paddingBottom:5,marginRight:10, fontSize: 16}}>{listing.document_submited} </Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="calendar"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
           <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>
           {listing.status}</Text>
   
             </View>

            
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
           <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>
           {listing.status}</Text>
   
             </View>

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#f5f5f5",width: wp('73%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Status',{id:listing.id})}>
              <Text style={{color:"#9c9b98", fontSize:10,fontWeight:'bold'}}>Read</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent  onPress={()=>this.props.navigation.navigate('Status')}>
              <Icon  name="arrow-forward"  style={{color: "#9c9b98", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>


           </View>


				</View>				
  			);

  	}
	listingcpa(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,paddingBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<View></View>
<Text numberOfLines={1}  style={{color:"black",width: wp('70%'), paddingBottom:5,marginRight:10, fontSize: 16}}>{listing.tujuan_permohonan} </Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="calendar"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
           <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>
           {listing.jenis_pinjaman}</Text>
   
             </View>

            
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
           <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>
           {listing.date_approval}</Text>
   
             </View>

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#f5f5f5",width: wp('73%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Cpadetail',{id:listing.id})}>
              <Text style={{color:"#9c9b98", fontSize:10,fontWeight:'bold'}}>Read</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent  onPress={()=>this.props.navigation.navigate('Cpadetail',{id:listing.id})}>
              <Icon  name="arrow-forward"  style={{color: "#9c9b98", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>


           </View>


				</View>				
  			);

  	}



      addnote(){
        return(
          <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#00a8ea' }}
          position="bottomRight"
          onPress={()=>this.props.navigation.navigate('Notesadd')}>
          <Icon name="add" />
        </Fab>
        )
      }

      addloan(){
        return(
          <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#00a8ea' }}
          position="bottomRight"
          onPress={()=>this.props.navigation.navigate('Requirementsadd')}>
          <Icon name="add" />
        </Fab>
        )
      }
      addcpa(){
        return(
          <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#00a8ea' }}
          position="bottomRight"
          onPress={()=>this.props.navigation.navigate('Cpaattact')}>
          <Icon name="add" />
        </Fab>
        )
      }
listingrequire(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>
     
				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<Text numberOfLines={2}  style={{color:"black", paddingBottom:5, fontSize: 18}}>{listing.loan_purpose} </Text>
  <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="card"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
         <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>Total Amount : IDR. {listing.total_amount}</Text>
   
             </View>
            
             <View style={{flex: 1, flexDirection: 'row'}}>  
      
             </View>

   
   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#f5f5f5",width: wp('73%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Requirementsdetail',{id:listing.id})}>
              <Text style={{color:"#9c9b98", fontSize:10,fontWeight:'bold'}}>Read</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent  onPress={()=>this.props.navigation.navigate('Requirementsdetail',{id:listing.id})}>
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
    if (this.state.loading) {
      return<ActivityIndicator color='#00a8ea' style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80}}/>;
    }
		return(
           <Container style={{backgroundColor:'#f5f5f5'}}>
    <View style={{ flex: 1 }}>
        <Content style={{backgroundColor:'#f5f5f5',marginRight:20,marginLeft:20}}>
         
        <Card 
            style={{
              borderRadius: 10,
              borderWidth: 0,
              borderColor: '#ffffff',
              marginBottom:20,
              marginTop:10
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
                   <View style={{flex:1, flexDirection:'row',}}>
                   <View style={{flex: 1, flexDirection: 'column', margin:10,width: wp('90%')}}>
             <Button style={{marginLeft:0,marginBottom:20,flex:1,width:wp('20%'),borderRadius:10,height:hp('4%'),borderColor:'white',borderWidth:1, flexDirection:'row'}} transparent onPress={()=>this.props.navigation.navigate('Contactreq',{id:this.state.idcontact})}>
                                 <Icon  name="person"  style={{color: "white", fontSize: 10}}/>
                                 <Text style={{marginRight:10, color:'white', textAlign: 'center', fontSize: 8 }}>
                                 Access
                                 </Text>
                               </Button>

                               <Text
                    style={{
                      color: 'white',
                      paddingBottom: 2,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
       {this.state.name}
                  </Text>

           
              </View>
           
                  
                          
                  </View>
                  <View style={{flex:1, flexDirection:'row',}}>
                   <View style={{flex:1, flexDirection:'column'}}>
                   <Text
                    style={{ color: 'white', paddingBottom: 2,  fontSize: 11 }}>
                     <Icon name="md-person" style={{fontSize: 17,marginLeft:10, color:'white'}}/> Position  
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 2,  fontSize: 11 }}>
                     <Icon name="md-call" style={{fontSize: 17,marginLeft:10, color:'white'}}/> Phone  
                  </Text>
                   <Text
                    style={{ color: 'white', paddingBottom: 2,  fontSize: 11 }}>
                     <Icon name="md-mail" style={{fontSize: 17,marginLeft:10, color:'white'}}/> Email  
                  </Text>
                   </View>

                    <View style={{flex:1, flexDirection:'column'}}>
                    <Text
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 11 }}>{this.state.type}
                
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 11 }}>{this.state.phone}
                  
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 11 }}>{this.state.email}
                  </Text>
                   </View>
                  </View>
               
         </View>
            </CardItem>
          </Card>

   
         
          <List style={{backgroundColor: '#00a8ea', height:55, borderRadius:10, marginBottom:10}}>
                               
    
                               <ListItem style={{ paddingTop:-10}}>
                                
                               
                               
                               
                                <Button transparent onPress={()=>{Linking.openURL('tel:' + this.state.phone);}} style={{flex:1, flexDirection:'column'}}>
                                 <Icon  name="md-call"  style={{color: "white"}}/>
                                 <Text style={{color:'white', textAlign: 'center', fontSize: 8 }}>
                                 Call
                                 </Text>
                               </Button>
                               
                              

                                <Button onPress={()=>{Linking.openURL('whatsapp://send?text=' + '' + '&phone=62' + this.state.phone);}} transparent style={{flex:1, flexDirection:'column'}}>
                                 <Icon  name="logo-whatsapp"  style={{color: "white"}}/>
                                 <Text style={{color:'white', textAlign: 'center', fontSize: 8 }}>
                                 WA
                                 </Text>
                               </Button>
                                <Button style={{flex:1, flexDirection:'column'}} transparent onPress={()=>{Linking.openURL('mailto:'+this.state.email+'?subject=&body=');}}>
                                 <Icon  name="md-mail"  style={{color: "white"}}/>
                                 <Text style={{color:'white', textAlign: 'center', fontSize: 8 }}>
                                 Email
                                 </Text>
                               </Button>
                               
                               <Button style={{flex:1, flexDirection:'column'}} transparent onPress={()=>this.props.navigation.navigate('Contactinfo',{id:this.state.idcontact})}>
                                 <Icon  name="information"  style={{color: "white"}}/>
                                 <Text style={{color:'white', textAlign: 'center', fontSize: 8 }}>
                                 Info
                                 </Text>
                               </Button>

                       

                               </ListItem>

                               
                               </List>


		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			
			<View style={{flexDirection:'row',paddingTop:15,alignContent:'space-between',backgroundColor:'#fff'}}>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'note'})}>
        
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='note')?'#00a8ea':'#ccc',color:(this.state.buyer=='note')?'#00a8ea':'#000'}}>Notes</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'loan'})}>
       
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='loan')?'#00a8ea':'#ccc',color:(this.state.buyer=='loan')?'#00a8ea':'#000'}}>Loan</Text>
				</TouchableOpacity>

        				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'cpa'})}>
       
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='cpa')?'#00a8ea':'#ccc',color:(this.state.buyer=='cpa')?'#00a8ea':'#000'}}>CPA</Text>
				</TouchableOpacity>
   

   	<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'status'})}>
       
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='status')?'#00a8ea':'#ccc',color:(this.state.buyer=='status')?'#00a8ea':'#000'}}>Status</Text>
				</TouchableOpacity>
			</View>

			<ScrollView style={{flex:1, padding:15}}>

                	{(this.state.buyer=='note')?this.state.listingnote.map((item)=>this.listingproduk(item)):null}
             

                	{(this.state.buyer=='loan')?this.state.listingrequire.map((item)=>this.listingrequire(item)):null}


                	{(this.state.buyer=='cpa')?this.state.listingcpa.map((item)=>this.listingcpa(item)):null}


                	{(this.state.buyer=='status')?this.state.listingstatus.map((item)=>this.listingstatus(item)):null}

			<View style={{height:20}}></View>
			</ScrollView>
		</View>

         
      </Content>
        {(this.state.buyer=='note')?this.addnote():null}
        {(this.state.buyer=='loan')?this.addloan():null}
        {(this.state.buyer=='cpa')?this.addcpa():null}

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