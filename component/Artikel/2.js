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
                <Image source={{uri: 'https://cdns.klimg.com/merdeka.com/i/w/news/2016/04/05/689480/670x335/siswa-muslim-swiss-tolak-salaman-dengan-guru-wanita.jpg'}} style={{height: hp('15%'), width: wp('80%'),resizeMode: 'stretch', flex: 1}}/>
                <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>KREDIT MULTIGUNA</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
                Kredit multiguna membantu Anda untuk mendapatkan suku
bunga yang lebih baik, atau beralih ke KPR dengan harga yang
lebih kompetitif dan fitur yang lebih baik dari sebelumnya.
                </Text>
                 <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Pilihan-Pilihan Kredit Multiguna</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
                 
Kredit multiguna memiliki jenis – jenis yang berbeda guna
menyesuaikan dengan kondisi kebutuhan Anda; seperti kredit
multiguna aset Anda pembelian investasi aset baru, kredit multiguna
untuk biaya pendidikan, dan lain-lainnya.

Kredit multiguna merupakan pilihan yang tepat dalam membantu
Anda, pemilik rumah, dalam mempertimbangkan ketika membeli
properti untuk investasi. Ketika Anda memutuskan untuk melakukan
kredit multiguna sangat penting untuk melakukan riset terlebih dahulu
dan pastikan Anda mendapatkan pinjaman yang sesuai dengan
kebutuhan Anda.
                </Text>
                 <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Pilihan-Pilihan Kredit Multiguna</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
                 
Kredit multiguna memiliki jenis – jenis yang berbeda guna menyesuaikan dengan kondisi kebutuhan Anda; seperti kredit multiguna aset Anda pembelian investasi aset baru, kredit multiguna untuk biaya pendidikan, dan lain-lainnya.
Kredit multiguna merupakan pilihan yang tepat dalam membantu Anda, pemilik rumah, dalam mempertimbangkan ketika membeli properti untuk investasi. Ketika Anda memutuskan untuk melakukan kredit multiguna sangat penting untuk melakukan riset terlebih dahulu dan pastikan Anda mendapatkan pinjaman yang sesuai dengan kebutuhan Anda.


                </Text>
              
              </Body>
            </CardItem>
         

          </Card>

  
 
            
        </Content>
      </Container>
    );
  }
}
