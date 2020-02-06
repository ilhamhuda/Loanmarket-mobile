import React, { Component } from 'react';
import { Image, StyleSheet, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header,Card, CardItem, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
      
      <Container style={{backgroundColor: "#e6e9ed"}}>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail')}>
              <Icon name='arrow-back' style={{color: "white", fontSize: 20, paddingLeft: 10}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "white", fontSize: 16, fontWeight:'bold'}}>Jakarta Pusat</Title>
          </Body>
          <Right>

          </Right>
        </Header>
  

        <Content style={{ margin:20}}>
        <Card style={{backgroundColor:"white", paddingTop: 0, borderRadius:10,paddingBottom: 0, borderRadius:100, borderWidth: 0, borderColor: 'white'}}>
           <View style={{flex:1, flexDirection:'row'}}>
            <Icon active name='search' style={{color: "#000001", fontSize: 20, marginLeft: 10,marginTop:10}} />
            <Input placeholder='Search'/>
            </View>
          </Card>
        <Card style={{ paddingTop:20,marginTop:20,paddingLeft:10,borderRadius:10, backgroundColor:'white', margin:20, paddingBottom: 15, borderRadius:10, borderWidth: 0, borderWidth: 0, borderColor: '#ffffff'}}>
   <View style={{flex: 1, flexDirection: 'column',margin:10}}>
   <View style={{flex: 1, flexDirection: 'row'}}>
       <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://medioenblog.files.wordpress.com/2018/01/bni1200x630bb.jpg'}} />
              
        <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingBottom:5}}>
            
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>KCU Gambir</Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}> Jalan Kebon Sirih No 51-53
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
               
              </View>
 

           
          </Card>     
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  title: {
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
  },
});