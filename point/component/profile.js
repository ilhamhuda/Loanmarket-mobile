import React, { Component } from 'react';
import { Image, Linking, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card, CardItem, Tab, ScrollableTab,  TabHeading, Tabs, Text, Header, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
import Tab1 from './Contact_profile/notes';
import Tab2 from './Contact_profile/tasks';
import Tab3 from './Contact_profile/properties';
import Tab4 from './Contact_profile/requirements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Communications from 'react-native-communications';
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
class Notes extends React.Component {
  render() {
  return (
    <View >
       <Button  transparent style={{paddingTop: 1, width: wp('80%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Notes_add')}>
          <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
          <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new Note</Text>
        </Button>
    </View>
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
    header: null
}
  render() {
    return (
      
      <Container>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('App')}>
              <Icon name='arrow-back' style={{color: "#ffffff", fontSize: 20, paddingLeft: 10}}/>
              <Title style={{color: "#ffffff", fontSize: 12}}>Back</Title>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Profile</Title>
          </Body>
        </Header>
        <Content>
        <View style={{flex: 1, flexDirection: 'column', marginTop:20, marginBottom:20, borderBottomWidth: 10, borderBottomColor: '#f2f0f0', alignItems: 'center'}}>
              
              <Thumbnail style={{borderWidth: 2, width: wp('20%'),height: hp('15%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  

              <View style={{flex: 1, flexDirection: 'Column', alignItems: 'center'}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Ilham Huda</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name="md-pin" color="white" style={{fontSize: 12, paddingRight:10, color:"grey"}}/>
                  <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
              </View>
              
                </View>  
              </View>
              <List>
            <ListItem>
            <Left>
                <View style={{ flexDirection:'column', justifyContent:'flex-start'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
              <Text style={{fontSize:11, color:'#cfc8c8', alignSelf:'flex-start'}}>Multi Office</Text>
                <Text>Raywhite Indonesiat</Text>
                </TouchableOpacity>
                </View>
              </Left>
              <Right>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon name="arrow-forward" />
                </TouchableOpacity>
              </Right>
 
            </ListItem>
            <ListItem>
            <Left>
                <View style={{ flexDirection:'column', justifyContent:'flex-start'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
              <Text style={{fontSize:11, color:'#cfc8c8', alignSelf:'flex-start'}}>Properties</Text>
                <Text>Preferences and Settings</Text>
                </TouchableOpacity>
                </View>
              </Left>
              <Right>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon name="arrow-forward" />
                </TouchableOpacity>
              </Right>
 
            </ListItem>
            <ListItem>
            <Left>
                <View style={{ flexDirection:'column', justifyContent:'flex-start'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
              <Text style={{fontSize:11, color:'#cfc8c8', alignSelf:'flex-start'}}>Help & Feedback</Text>
                <Text>No unread messages</Text>
                </TouchableOpacity>
                </View>
              </Left>
              <Right>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon name="arrow-forward" />
                </TouchableOpacity>
              </Right>
 
            </ListItem>
            <ListItem>
            <Left>
                <View style={{ flexDirection:'column', justifyContent:'flex-start'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
              <Text style={{fontSize:11, color:'#cfc8c8', alignSelf:'flex-start'}}>About MyContacts App</Text>
                <Text style={{alignSelf:'flex-start'}}>Version 1.1</Text>
                </TouchableOpacity>
                </View>
              </Left>
              <Right>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon name="arrow-forward" />
                </TouchableOpacity>
              </Right>
 
            </ListItem>
            <ListItem>
            <Left>
                <View style={{ flexDirection:'column', justifyContent:'flex-start'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
              <Text style={{fontSize:11, color:'#cfc8c8', alignSelf:'flex-start'}}></Text>
                <Text>Sign out</Text>
                </TouchableOpacity>
                </View>
              </Left>
              <Right>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon name="arrow-forward" />
                </TouchableOpacity>
              </Right>
 
            </ListItem>
          
          </List>
        </Content>
       
      </Container>
    );
  }
}
