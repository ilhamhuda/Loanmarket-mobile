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
    title: 'Loan Product Detail',
    headerTintColor: 'black'
  };

  render() {
    return (
      
      <Container style={{backgroundColor: "#f5f5f5"}}>
       
        <Content style={{margin:15, backgroundColor: "#f5f5f5", borderTopColor: "#e6e9ed", borderBottomColor: "#e6e9ed"}}>
            

     <Card style={{flex: 0, marginTop:10}}>
     
            <CardItem>
              <Body>
                <Image source={{uri: 'https://berita.teknologi.id/uploads/2018/12/Situs-Pinjam-Uang-Online.jpg'}} style={{height: hp('15%'), width: wp('80%'),resizeMode: 'stretch', flex: 1}}/>
                <Text style={{fontSize: 18,marginTop:10, fontWeight: "bold"}}>Kredit Express</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
          Kredit Express Panin adalah fasilitas kredit tanpa jaminan yang dapat diperoleh dengan cepat dan mudah. Dana pinjaman dapat digunakan untuk tujuan multiguna seperti pendidikan, pernikahan, renovasi rumah, pembelian perabot/furniture, pembelian kendaraan, liburan, dan tujuan lainnya.
Sekali Telepon Beres! 
                </Text>
                <Text style={{fontSize: 18,marginTop:10, fontWeight: "bold"}}>Keunggulan</Text>
                < View style={{flex:1, flexDirection: 'column'}}>
                <Text style={{fontSize: 12,marginTop:10}}>1)  Angsuran ringan.</Text>
                <Text style={{fontSize: 12,marginTop:10}}>2)  Jangka waktu hingga 25 tahun.</Text>
                <Text style={{fontSize: 12,marginTop:10}}>3)  Bebas memilih lokasi properti idaman.</Text>
                </View>
                  <Text style={{fontSize: 18,marginTop:10, fontWeight: "bold"}}>Syarat dan Ketentuan</Text>
                < View style={{flex:1, flexDirection: 'column'}}>
                <Text style={{fontSize: 12,marginTop:10}}>1)  Warga Negara Indonesia.</Text>
                <Text style={{fontSize: 12,marginTop:10}}>2)  Usia Minimum 21 tahun saat pengajuan, dan.</Text>
                <Text style={{fontSize: 12,marginTop:10}}>3)  Usia maksimal saat kredit lunas.</Text>
                <Text style={{fontSize: 12,marginTop:10}}>4)  Mengisi formulir dan melengkapi persyaratan dokumen.</Text>
                <Text style={{fontSize: 12,marginTop:10}}>5)  Persyaratan Dokumen</Text>
                </View>
              </Body>
            </CardItem>
         

          </Card>

  
 
            
        </Content>
      </Container>
    );
  }
}
