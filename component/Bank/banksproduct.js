import React, { Component } from 'react';
import { Image, ImageBackground,Linking, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card,CardItem, Header, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
    title: 'Loan Product',
    headerTintColor: 'black'
  };

  render() {
    return (
      
      <Container style={{backgroundColor: "#f5f5f5"}}>
       
        <Content style={{margin:15, backgroundColor: "#f5f5f5", borderTopColor: "#e6e9ed", borderBottomColor: "#e6e9ed"}}>
            

     <Card style={{flex: 0, marginTop:10}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://soulusi.s3.amazonaws.com/posts/913/medium_20180605051118.png'}} />
                <Body>
                  <Text style={{fontSize: 18, fontWeight: "bold"}}>Kredit Express</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://berita.teknologi.id/uploads/2018/12/Situs-Pinjam-Uang-Online.jpg'}} style={{height: hp('15%'), width: wp('80%'),resizeMode: 'stretch', flex: 1}}/>
                <Text style={{fontSize:12,marginTop:10, color:'grey',textAlign:'justify'}}>
                 Kredit Express Panin adalah fasilitas kredit tanpa jaminan yang dapat diperoleh dengan cepat dan mudah. Dana pinjaman dapat digunakan untuk tujuan multiguna seperti pendidikan, pernikahan, renovasi rumah, pembelian perabot/furniture, pembelian kendaraan, liburan, dan tujuan lainnya....
                </Text>
              </Body>
            </CardItem>
           <List style={{margin:10,backgroundColor: '#00a8ea', height:45, borderRadius:10, marginTop:10, marginBottom:10}}>
            <ListItem style={{ paddingTop:-10}}>
              <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksproductdetail')}>
              <Text style={{color:"white"}}>See Product</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksproductdetail')}>
              <Icon  name="arrow-forward"  style={{color: "white", paddingLeft: 10}}/>
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
