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
                <Image source={{uri: 'https://24slides.com/presentbetter/wp-content/uploads/2018/12/company-profile-presentation-tips.jpg'}} style={{height: hp('15%'), width: wp('80%'),resizeMode: 'stretch', flex: 1}}/>
                <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Kredit rekening koran perusahaan (KRK)</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
            Dengan banyaknya kredit modal kerja yang ditawarkan oleh institusi peminjam, sangat penting bagi Anda untuk mengetahui jenis kredit modal kerja yang Anda butuhkan.
Loan Adviser kami dapat membantu Anda untuk mendapatkan pinjaman modal kerja yang sesuai dengan kebutuhan Anda

                </Text>
                 <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Pinjaman Rekening Koran perusahaan</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
                Pinjaman rekening koran merupakan kredit yang digunakan untuk ekspansi usaha di mana fasilitas kredit dapat digunakan untuk pembelian inventory, beban yang tidak terduga, dan lain sebagainya.
Pinjaman rekening koran merupakan pilihan ideal untuk pinjaman jangka pendek karena institusi peminjam akan memberikan plafond kredit sesuai dengan kemampuan pembayaran debitur yang dapat digunakan untuk berbagai keperluan usaha. 

                </Text>
                
                  
              </Body>
            </CardItem>
         

          </Card>

  
 
            
        </Content>
      </Container>
    );
  }
}
