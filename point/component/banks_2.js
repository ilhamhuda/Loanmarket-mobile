import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
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
      
      <Container>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('App')}>
              <Icon name='arrow-back' style={{color: "#ffffff", fontSize: 20, paddingLeft: 10}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Banks</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contact_add')}>
              <Icon style={{color: "#ffffff", fontSize: 20}}  name='add' />
            </Button>
          </Right>
        </Header>
        <Content style={{}}>
        
        <Card style={{borderRadius:10, backgroundColor:'#f2f0f0', borderWidth: 0, borderColor: '#ffffff'}}>
        <CardItem style={{backgroundColor:"white",  margin:20, paddingTop: 0, paddingBottom: 0, borderRadius:100, borderWidth: 3, borderColor: '#063359'}} >
            <Icon active name='search' style={{color: "#000001", fontSize: 20, paddingLeft: 10}} />
            <Input placeholder='Search'/>
          </CardItem>
            <CardItem style={{backgroundColor:"white",  margin:20, paddingTop: 15, paddingBottom: 15, borderRadius:10, borderWidth: 0, borderColor: 'ffffff'}}>
            <View style={{flex: 1, flexDirection: 'Column'}}>
            <View style={{flex: 1, flexDirection: 'row',margin:5,marginBottom:15}}>
              
              <Thumbnail style={{borderWidth: 2,borderRadius:27, width: wp('15%'),height: hp('8%'),alignItems:'stretch',  borderColor: '#063359'}} source={{uri: 'https://i0.wp.com/www.alamatbank.com/wp-content/uploads/2014/11/Logo-Bank-BNI-1.gif?fit=415%2C307&ssl=1'}} />  

              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>BNI</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{color:"#063359", paddingBottom:10, fontSize: 10, color:"grey"}}>PT Bank Negara Indonesia (Persero), Tbk</Text>
              </View>
               
                </View> 
                 
              </View>
              <Image style={{borderWidth: 2, width: wp('80%'),height: hp('15%'),  borderColor: '#063359'}} source={{uri: 'https://2.bp.blogspot.com/-qy7Sanutml0/WmXk88IBzNI/AAAAAAAANyg/2fENOvWf5bUgTD8T7FEAzotvjdmusMZYACLcBGAs/s600/Bank-BNI-Syariah-Logo.jpg'}} />  

              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:5, paddingTop:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Cabang Abdul Muiz</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{color:"#063359", alignSelf:'flex-start', paddingBottom:10, fontSize: 12, color:"grey"}}>JL. ABDUL MUIS NO. 7A , JAK-PUS, GEDUNG DEPARTEMEN PERHUBUNGAN</Text>
              </View>
                 <Button onPress={()=>{Linking.openURL('tel:089601777308');}} transparent style={{backgroundColor:'#063359',alignItems:'center',paddingTop: 1, width: wp('78%'), borderWidth:1, borderColor: "grey", borderRadius:10,marginRight:wp('4%')}} >
                  <Icon name="md-call" color="white" style={{fontSize: 17, paddingTop:5, color:"white", alignSelf:'center'}}/>
                  <Text style={{color:"white", paddingBottom:5, fontSize: 18, alignSelf:'center'}}>Hubungi</Text>
                 </Button>
               
                </View> 
         
                 
              </View>
            
            </CardItem>

   
            <CardItem style={{backgroundColor:"white",  margin:20, paddingTop: 15, paddingBottom: 15, borderRadius:10, borderWidth: 0, borderColor: 'ffffff'}}>
            <View style={{flex: 1, flexDirection: 'Column'}}>
            <View style={{flex: 1, flexDirection: 'row',margin:5,marginBottom:15}}>
              
              <Thumbnail style={{borderWidth: 2,borderRadius:27, width: wp('15%'),height: hp('8%'),alignItems:'stretch',  borderColor: '#063359'}} source={{uri: 'https://i0.wp.com/www.alamatbank.com/wp-content/uploads/2014/11/Logo-Bank-BNI-1.gif?fit=415%2C307&ssl=1'}} />  

              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>BNI</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{color:"#063359", paddingBottom:10, fontSize: 10, color:"grey"}}>PT Bank Negara Indonesia (Persero), Tbk</Text>
              </View>
               
                </View> 
                 
              </View>
              <Image style={{borderWidth: 2, width: wp('80%'),height: hp('15%'),  borderColor: '#063359'}} source={{uri: 'https://2.bp.blogspot.com/-qy7Sanutml0/WmXk88IBzNI/AAAAAAAANyg/2fENOvWf5bUgTD8T7FEAzotvjdmusMZYACLcBGAs/s600/Bank-BNI-Syariah-Logo.jpg'}} />  

              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:5, paddingTop:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Cabang Abdul Muiz</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{color:"#063359", alignSelf:'flex-start', paddingBottom:10, fontSize: 12, color:"grey"}}>JL. ABDUL MUIS NO. 7A , JAK-PUS, GEDUNG DEPARTEMEN PERHUBUNGAN</Text>
              </View>
                 <Button onPress={()=>{Linking.openURL('tel:089601777308');}} transparent style={{backgroundColor:'#063359',alignItems:'center',paddingTop: 1, width: wp('78%'), borderWidth:1, borderColor: "grey", borderRadius:10,marginRight:wp('4%')}} >
                  <Icon name="md-call" color="white" style={{fontSize: 17, paddingTop:5, color:"white", alignSelf:'center'}}/>
                  <Text style={{color:"white", paddingBottom:5, fontSize: 18, alignSelf:'center'}}>Hubungi</Text>
                 </Button>
               
                </View> 
         
                 
              </View>
            
            </CardItem>
         
          
          </Card> 
         
        </Content>
      </Container>
    );
  }
}
