import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View,  Linking, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Communications from 'react-native-communications';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Card, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
class LogoTitle extends React.Component {
  render() {
    return (
      <Text style={{fontWeight:"bold", color:'white'}}> Contact</Text>
    );
  }
}
export default class Tasks extends Component {
  static navigationOptions = {
    title: 'Contact',
    headerTintColor: 'black',
  };
constructor(props) {
    super(props);
    this.state = { firstQuery : ''};
  }
  render() {
    return (
      
      <Container style={{backgroundColor:'#f5f5f5'}}>

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
       <Searchbar
       style={{backgroundColor:"white",margin:5,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search Contact"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
        


            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('3%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
        
            <Button transparent onPress={()=>this.props.navigation.navigate('Contactdetail')}>
           <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri:'https://www.sunchem.nl/wp-content/uploads/H_About/Teamphotos/profile-placeholder.jpg'}} />
              </Button>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text style={{color:"#000001"}}>Ilham Huda</Text>
              <Text note>Nasabah</Text>
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

          
            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('3%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
        
            <Button transparent onPress={()=>this.props.navigation.navigate('Contactdetail')}>
           <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri:'https://www.sunchem.nl/wp-content/uploads/H_About/Teamphotos/profile-placeholder.jpg'}} />
              </Button>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text style={{color:"#000001"}}>Ilham Huda</Text>
              <Text note>Nasabah</Text>
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

          
            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('3%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
        
            <Button transparent onPress={()=>this.props.navigation.navigate('Contactdetail')}>
           <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri:'https://www.sunchem.nl/wp-content/uploads/H_About/Teamphotos/profile-placeholder.jpg'}} />
              </Button>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text style={{color:"#000001"}}>Ilham Huda</Text>
              <Text note>Nasabah</Text>
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

          
            <List style={{backgroundColor: 'white', height: hp('12%'), paddingTop:hp('3%'), paddingLeft: wp('3%'),marginTop:hp('3%'),flex:1, flexDirection:'row'}}>
        
            <Button transparent onPress={()=>this.props.navigation.navigate('Contactdetail')}>
           <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri:'https://www.sunchem.nl/wp-content/uploads/H_About/Teamphotos/profile-placeholder.jpg'}} />
              </Button>
          <View style={{flex:1, flexDirection:'column', width: wp('40%') , marginLeft: 20 }}>
          <Text style={{color:"#000001"}}>Ilham Huda</Text>
              <Text note>Nasabah</Text>
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
        </Content>
      </Container>
    );
  }
}
