import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
    header: null
}
  render() {
    return (
      
      <Container>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banks')}>
              <Icon name='arrow-back' style={{color: "#ffffff", fontSize: 20, paddingLeft: 10}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Bank Detail</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        
        <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
       <View style={{flex: 1, flexDirection: 'row'}}>
       <Thumbnail style={{borderWidth: 2,marginTop:20, borderColor: '#ffffff'}} source={{uri: 'https://medioenblog.files.wordpress.com/2018/01/bni1200x630bb.jpg'}} />
              
        <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:5}}>
            
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Bank Negara Indonesia </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey", width:wp('80%')}}> Gedung Grha BNI
Jl. Jenderal Sudirman Kav. 1
Jakarta Pusat 10220
Indonesia</Text>
            </View>
            
            </View>
            <View style={{flex: 1, flexDirection: 'column', width:wp('60%')}}>

                 <Button transparent style={{paddingTop: 1, borderWidth:1, width:wp('40%'), borderColor: "white", borderRadius:80,marginRight:wp('4%')}} >
                 
                  <Icon name="md-call" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}>
                  </Icon>
                  <Text style={{paddingTop:5, fontSize: 15, color:"grey"}}>+62-21-2511946</Text>
                 </Button>
                 <Button transparent style={{paddingTop: 1, borderWidth:1, borderColor: "white", borderRadius:80,marginRight:wp('4%')}}>
                 <Icon name='desktop'color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 
                   <Text style={{paddingTop:5, fontSize: 15, color:"grey"}}>https://www.bni.co.id</Text>
                   
                 </Button>
                 </View>
        <Item style={{borderTopWidth:5, borderTopColor: "#e6e9ed"}}>
            <Icon active name='search' style={{color: "#000001", fontSize: 20, paddingLeft: 10}} />
            <Input placeholder='Search'/>
          </Item>
          <List>
                          
          <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail_cabang')}>
              <Text style={{color:"#000001"}}>DKI Jakarta</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent>
              <Icon  name="arrow-forward" style={{color: "#000001", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail_cabang')}>
              <Text style={{color:"#000001"}}>Jawa Barat</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent>
              <Icon  name="arrow-forward"  style={{color: "#000001", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail')}>
              <Text style={{color:"#000001"}}>DI Yogyakarta</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent>
              <Icon  name="arrow-forward"  style={{color: "#000001", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
