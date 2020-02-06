import React, { Component } from 'react';
import { Image, ImageBackground, Dimensions,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView } from 'react-native';
var screenWidth = Dimensions.get('window').width;
import Communications from 'react-native-communications';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Tabs,Tab,TabHeading, Card,CardItem, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
class BuyerWall extends Component {
  static navigationOptions = {
    title: 'Contact Detail',
    headerTintColor: 'black'
  };
	constructor(props) {    
    	super(props);      
    	this.state = {mybuyer:[
    		{agenid:1,desc:'Elon Musk',title:'Rumah Minimalis Murah',id:1,date:'11 Juni 2013'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Baru Renovasi',id:2,date:'11 Juni 2013'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Modern Cluster',id:3,date:'11 Juni 2013'},
    		{agenid:1,desc:'Elon Musk',title:'Nature Residence',id:4,date:'11 Juni 2013'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Pondok Indah',id:5,date:'11 Juni 2013'},
    		],publik:[
    		{agenid:1,desc:'Elon Musk',title:'Rumah Minimalis Murah',id:1,date:'11 Juni 2013'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Baru Renovasi',id:2,date:'11 Juni 2013'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Modern Cluster',id:3,date:'11 Juni 2013'},
    		{agenid:1,desc:'Elon Musk',title:'Nature Residence',id:4,date:'11 Juni 2013'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Pondok Indah',id:5,date:'11 Juni 2013'},
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

    render_listingloan(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginLeft:30,marginBottom:10,backgroundColor:'#fff'}}>

				   


				</View>						
  			);

  	}

	render() {
		return(
           <Container style={{backgroundColor:'#f5f5f5'}}>

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
              <Left>
                <Body>
                  <Text
                    style={{
                      color: 'white',
                      paddingBottom: 2,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Ilham Huda
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>
                     <Icon style={{fontSize: 17,marginLeft:10, color:'white'}}/> Client/Person
                  </Text>
                    <Text
                    style={{ color: 'white', paddingBottom: 10, fontSize: 12 }}>
                     <Icon name="md-pin" style={{fontSize: 17,marginLeft:10, color:'white'}}/> Raywhite Bandung
                  </Text>
                   <View style={{flex: 1, flexDirection: 'row'}}>
                 <Button onPress={()=>{Linking.openURL('tel:089601777308');}} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "white", borderRadius:80,marginRight:wp('4%')}} >
                  <Icon name="md-call" style={{fontSize: 17, paddingTop:5, color:'white'}}/>
                 </Button>
                 <Button onPress={()=>this.props.navigation.navigate('Sgateway')}transparent style={{paddingTop: 1, borderWidth:1, borderColor: "white", borderRadius:80,marginRight:wp('4%')}}>
                  <Icon name="md-text" style={{fontSize: 17, paddingTop:5, color:'white'}}/>
                 </Button>
                 <Button onPress={()=>this.props.navigation.navigate('Email')} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "white", borderRadius:80,marginRight:wp('4%')}}>
                  <Icon name="md-mail" style={{fontSize: 17, paddingTop:5, color:'white'}}/>
                 </Button>
           
                </View>
                </Body>
              </Left>
              <Right>
                <Thumbnail
                  style={{
                    borderWidth: 2,
                    width: wp('20%'),
                    height: hp('15%'),
                    borderColor: '#ffffff',
                  }}
                  source={{
                    uri:
                      'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg',
                  }}
                />
              </Right>
            </CardItem>
          </Card>
		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			
			<View style={{flexDirection:'row',paddingTop:15,alignContent:'space-between',backgroundColor:'#fff'}}>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'mybuyer'}) || this.scroll.scrollTo({x:0})}>
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='mybuyer')?'#00a8ea':'#ccc',color:(this.state.buyer=='mybuyer')?'#00a8ea':'#000'}}>Notes</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'publik'}) || this.scroll.scrollTo({x:screenWidth * screenWidth})}>
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='publik')?'#00a8ea':'#ccc',color:(this.state.buyer=='publik')?'#00a8ea':'#000'}}>Loan Require</Text>
				</TouchableOpacity>
			</View>
<View style={styles.MainContainer}>
			<ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={(node)=> this.scroll = node}
        >

        <View style={styles.ScrollContainer}>
      <Button  transparent style={{paddingTop: 1,marginBottom:10, width: wp('90%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Notesadd')}>
          <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
          <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new Note</Text>  
        </Button>
        
			{(this.state.buyer=='mybuyer')?this.state.mybuyer.map((item)=>this.render_listing(item)):this.state.publik.map((item)=>this.render_listing(item))}
			<View style={{height:20}}></View>
      </View >

      <View style={styles.ScrollContainer}>
           <Button  transparent style={{paddingTop: 1,marginBottom:10, width: wp('90%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Notesadd')}>
          <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
          <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new Note</Text>  
        </Button>
			{(this.state.buyer=='mybuyer')?this.state.mybuyer.map((item)=>this.render_listingloan(item)):this.state.publik.map((item)=>this.render_listingloan(item))}
			<View style={{height:20}}></View>
      </View >
			</ScrollView>
		</View>
       </View >
      </Content>
    </Container>
		);		
	}
}

export default BuyerWall;


const styles = StyleSheet.create({

   MainContainer: {
    backgroundColor: '#f5f5f5',
    flex: 1

  },
  ScrollContainer: {
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
    marginTop: 20,
    margin:20,
    width: wp('100%'),
  }
});
