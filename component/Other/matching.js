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
            <Title style={{color: "#ffffff", fontSize: 16}}>Products</Title>
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
            <View style={{flex: 1, flexDirection: 'row',margin:20}}>
              
              <Thumbnail style={{borderWidth: 2, width: wp('20%'),height: hp('15%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  

              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:30}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Ilham Huda</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name="md-pin" color="white" style={{fontSize: 12, paddingRight:10, color:"grey"}}/>
                  <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
              </View>
                 <View style={{flex: 1, flexDirection: 'row'}}>
                 <Button onPress={()=>{Linking.openURL('tel:089601777308');}} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} >
                  <Icon name="md-call" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                 <Button onPress={() => Communications.phonecall('0123456789', true)}  transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-text" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                 <Button onPress={() => Communications.email(['aboutreact11@gmail.com', 'hello@aboutreact.com'],null,null,'Demo Subject','Demo Content for the mail')} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-mail" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                </View>
               
                </View> 
                 
              </View>
            
            </CardItem>

            <CardItem style={{backgroundColor:"white",  margin:20, paddingTop: 0, paddingBottom: 15, borderRadius:10, borderWidth: 0, borderColor: 'ffffff'}}>
            <View style={{flex: 1, flexDirection: 'row',margin:20}}>
              
              <Thumbnail style={{borderWidth: 2, width: wp('20%'),height: hp('15%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  

              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:30}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Ilham Huda</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name="md-pin" color="white" style={{fontSize: 12, paddingRight:10, color:"grey"}}/>
                  <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
              </View>
                 <View style={{flex: 1, flexDirection: 'row'}}>
                 <Button onPress={()=>{Linking.openURL('tel:089601777308');}} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} >
                  <Icon name="md-call" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                 <Button onPress={() => Communications.phonecall('0123456789', true)}  transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-text" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                 <Button onPress={() => Communications.email(['aboutreact11@gmail.com', 'hello@aboutreact.com'],null,null,'Demo Subject','Demo Content for the mail')} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-mail" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                </View>
               
                </View> 
                 
              </View>
            
            </CardItem>
            

            <CardItem style={{backgroundColor:"white",  margin:20, paddingTop: 0, paddingBottom: 15, borderRadius:10, borderWidth: 0, borderColor: 'ffffff'}}>
            <View style={{flex: 1, flexDirection: 'row',margin:20}}>
              
              <Thumbnail style={{borderWidth: 2, width: wp('20%'),height: hp('15%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  

              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:30}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Ilham Huda</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name="md-pin" color="white" style={{fontSize: 12, paddingRight:10, color:"grey"}}/>
                  <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
              </View>
                 <View style={{flex: 1, flexDirection: 'row'}}>
                 <Button onPress={()=>{Linking.openURL('tel:089601777308');}} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} >
                  <Icon name="md-call" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                 <Button onPress={() => Communications.phonecall('0123456789', true)}  transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-text" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                 <Button onPress={() => Communications.email(['aboutreact11@gmail.com', 'hello@aboutreact.com'],null,null,'Demo Subject','Demo Content for the mail')} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-mail" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                </View>
               
                </View> 
                 
              </View>
            
            </CardItem>
          </Card>     
        </Content>
      </Container>
    );
  }
}
