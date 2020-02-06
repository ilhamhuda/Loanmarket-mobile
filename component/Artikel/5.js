import React, { Component } from 'react';
import { Image, ImageBackground,Linking,Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card,CardItem, Header, Content, List, ListItem, Thumbnail, Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
    title: 'Product Detail',
    headerTintColor: 'black'
  };

  render() {
    return (
      
      <Container style={{backgroundColor: "#f5f5f5"}}>
       
        <Content style={{margin:15, backgroundColor: "#f5f5f5", borderTopColor: "#e6e9ed", borderBottomColor: "#e6e9ed"}}>
            

     <Card style={{flex: 0, marginTop:10}}>
     
            <CardItem>
              <Body>
                <Image source={{uri: 'https://indonesiaexpat.biz/wp-content/uploads/2017/03/hands-1063442_960_720.jpg'}} style={{height: hp('15%'), width: wp('80%'),resizeMode: 'stretch', flex: 1}}/>
                <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Kredit Investasi Perusahaan</Text>

                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
            Kredit investasi memberikan Anda fleksibilitas untuk mengangsur pinjaman Anda sesuai tenor pinjaman. Kredit investasi dapat digunakan untuk modal kerja usaha, pembelian properti komersial untuk keperluan usaha, pembelian mesin, dan lain sebagainya.
Fleksibilitas dari pinjaman ini adalah di bunga yang berlaku fixed dan floating juga jangka waktu pinjaman bervariasi. 
Anda disyaratkan untuk menjaminkan aset Anda seperti rumah tinggal, ruko, gudang, pabrik, dan aset lainnya.

                </Text>
               
              </Body>
            </CardItem>
         

          </Card>

  
 
            
        </Content>
      </Container>
    );
  }
}
