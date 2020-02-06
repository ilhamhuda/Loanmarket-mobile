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
      
      <Container style={{backgroundColor:'#e6e9ed'}}>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('App')}>
              <Icon name='arrow-back' style={{color: "white", fontSize: 20, paddingLeft: 10}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "white", fontSize: 16, fontWeight:'bold'}}>Group Contact</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>this.props.navigation.navigate('Group_contact_add')}>
              <Icon style={{color: 'white', fontSize: 20}}  name='add' />
            </Button>
          </Right>
        </Header>
  

        <Content style={{ margin:20, backgroundColor:'#e6e9ed'}}>
        {/* <View style={{flex: 1, paddingTop:30, flexDirection:'row'}}>
        <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('App')}>
              <Icon name='arrow-back' style={{color: "black", fontSize: 20, paddingLeft: 10}}/>
              <Text style={{color: "black", fontSize: 12, paddingLeft:-50}}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", marginLeft:20, fontSize: 16, fontWeight:'bold'}}></Title>
          </Body>
          <Right>
          <Button transparent onPress={()=>this.props.navigation.navigate('Group_contact_add')}>
              <Icon style={{color: 'blackb', fontSize: 20}}  name='add' />
              <Text style={{color: "black", fontSize: 12, paddingLeft:-50}}>Add Group</Text>
            </Button>
          </Right>
        </View>
        <Text style={{color: "black", fontSize: 20,  marginLeft:20,marginBottom:20, fontWeight:'bold'}}>Group Contacts</Text> */}

        <Card style={{backgroundColor:"white", paddingTop: 0, borderRadius:10,paddingBottom: 0, borderRadius:100, borderWidth: 0, borderColor: 'white'}}>
           <View style={{flex:1, flexDirection:'row'}}>
            <Icon active name='search' style={{color: "#000001", fontSize: 20, marginLeft: 10,marginTop:10}} />
            <Input placeholder='Search'/>
            </View>
          </Card>
        <Card style={{ paddingLeft:10,marginTop:20,borderRadius:10, backgroundColor:'white', margin:20, paddingBottom: 15, borderRadius:10, borderWidth: 0, borderWidth: 0, borderColor: '#ffffff'}}>
   <View style={{flex: 1, flexDirection: 'column',margin:5}}>
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Raywhite Jakarta </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
            
                 <View style={{flex: 1, flexDirection: 'row', paddingTop: 15}}>
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5,borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5,borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9iHkWQwZckfGInhsWcbbAcGW2AziADKaY_y3GiX4IuxXoert'}} />  
                
                </View>

                </View> 
                <Button onPress={()=>this.props.navigation.navigate('Group_contact_detail')} transparent style={{backgroundColor:'#d5d9de',alignItems:'center',flex:1, flexDirection:'row', paddingTop: 1, width: wp('78%'), borderWidth:0, borderColor: "grey", borderRadius:30,marginRight:wp('4%')}} >
          
                <Text style={{color:"white",marginLeft:90, marginTop:10, paddingBottom:5, fontSize: 12, alignSelf:'center'}}>SEE GROUPS</Text> 
                 </Button>
               
              </View>
 

           
          </Card>     
          <Card style={{ paddingLeft:10,marginTop:20,borderRadius:10, backgroundColor:'white', margin:20, paddingBottom: 15, borderRadius:10, borderWidth: 0, borderWidth: 0, borderColor: '#ffffff'}}>
   <View style={{flex: 1, flexDirection: 'column',margin:5}}>
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Raywhite Jakarta </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
            
                 <View style={{flex: 1, flexDirection: 'row', paddingTop: 15}}>
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5,borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5, borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  
                 <Thumbnail style={{borderRadius: 17, marginRight:5,borderWidth: 2, width: wp('10%'),height: hp('5%'),  borderColor: '#063359'}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9iHkWQwZckfGInhsWcbbAcGW2AziADKaY_y3GiX4IuxXoert'}} />  
                
                </View>

                </View> 
                <Button onPress={()=>this.props.navigation.navigate('Group_contact_detail')} transparent style={{backgroundColor:'#d5d9de',alignItems:'center',flex:1, flexDirection:'row', paddingTop: 1, width: wp('78%'), borderWidth:0, borderColor: "grey", borderRadius:30,marginRight:wp('4%')}} >
          
                <Text style={{color:"white",marginLeft:90, marginTop:10, paddingBottom:5, fontSize: 12, alignSelf:'center'}}>SEE GROUPS</Text> 
                 </Button>
               
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