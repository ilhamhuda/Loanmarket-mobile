import React, { Component } from 'react';
import { Image, ImageBackground,Linking, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card,CardItem, Header, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
import { Searchbar } from 'react-native-paper';
import api from '../api'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class LogoTitle extends React.Component {
  render() {
    return (
      // <Image
      //   source={require('../assets/holder.png')}
      //   style={{ width: 30, height: 30 }}
      // />
      <Text style={{fontWeight:"bold", color:'white'}}> Contact</Text>
    );
  }
}

export default class Tasks extends Component {
  // static navigationOptions = {
  //   headerTitle: <LogoTitle />,
  //   headerTintColor: 'white',
  //   headerStyle: {
  //     backgroundColor: '#063359',
  //   },
  // };

  static navigationOptions = {
    title: 'Bank Detail',
    headerTintColor: 'black'
  };

  constructor(props) {
    super(props);
    
    const { params } = this.props.navigation.state;		
      const cekid = params ? params.id : null;	      
    this.state = { bank : [], idbank: cekid};
  }

  componentWillMount(){		
    api.getBankDetail(this.state.idbank).then((result)=>{ 
      this.setState({bank:result})
        }
    );
  }

  render_bank(listing){
    return(
      <Card
      style={{
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#ffffff',
      }}>
      <CardItem
        style={{
          backgroundColor: 'white',
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 10,
          borderWidth: 0,
          borderColor: 'ffffff',
        }}>
 <View style={{flex: 1, flexDirection: 'row'}}>
        <Thumbnail style={{borderWidth: 2,marginTop:20, borderColor: '#ffffff'}} source={{uri: listing.imageurl}} />
        
   <View style={{paddingLeft:10, paddingTop:20, paddingBottom:5}}>
   
        <Text style={{color:"black", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>{listing.name} </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <Icon name="md-pin" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
         <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>{listing.address}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <Icon name="md-call" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
         <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>{listing.phonce}</Text>
        </View>
         <View style={{flex: 1, flexDirection: 'row'}}>
         <Icon name="desktop" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
         <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>{listing.website}</Text>
        </View>

   </View>
</View>            
      </CardItem>
    
    </Card>

    )
  }

  render() {
    return (
      
      <Container style={{backgroundColor: "#f5f5f5"}}>
       
        <Content style={{margin:15, backgroundColor: "#f5f5f5", borderTopColor: "#e6e9ed", borderBottomColor: "#e6e9ed"}}>
         
          <List style={{backgroundColor: '#00a8ea', height:45, borderRadius:10, marginTop:10, marginBottom:10}}>
                               
    
            <ListItem style={{ paddingTop:-10}}>
              <Left>
 
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksproduct')}>
            <Icon  name="md-card"  style={{color: "white", paddingLeft: 10}}/>
              
              <Text style={{color:"white"}}>Loan Product</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksproduct')}>
              <Icon  name="arrow-forward"  style={{color: "white", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
         
          </List>

            <Searchbar
       style={{backgroundColor:"white",marginBottom: 10,margin:5,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
           
           {this.state.bank.map((item)=>this.render_bank(item))}            
            

            <Card
            style={{
              borderRadius: 10,
              borderWidth: 0,
              borderColor: '#ffffff',
            }}>

          <List style={{backgroundColor: 'white', marginTop:10,borderRadius:10}}>
                               
            <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetailcabang')}>
           
              
              <Text style={{color:"#878787"}}>Jakarta Pusat</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetailcabang')}>
              <Icon name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            
          </List>
          </Card>
        </Content>
      </Container>
    );
  }
}
