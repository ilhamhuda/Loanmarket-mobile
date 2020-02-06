import React, { Component } from 'react';
import { Image, Linking, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card, CardItem, Tab, ScrollableTab,  TabHeading, Tabs, Text, Header, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
  render( n) {
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
      
        <Content>
              <List>
            <ListItem>
            <Left>
                <View style={{ flexDirection:'column', justifyContent:'flex-start'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
              <Text>KPR</Text>
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
           <Text>Kredit Multiguna Individu</Text>
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
            <Text>Bridging Loan Individu</Text>
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
          <Text style={{alignSelf:'flex-start'}}>Rekening Koran Individu</Text>
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
          <Text>Kredit Investasi Individu</Text>
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
          <Text>Take Over Individu</Text>
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
