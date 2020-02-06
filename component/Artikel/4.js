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
                <Image source={{uri: 'https://www.bni.co.id/portals/1/BNI/Personal/Pinjaman/Images/BP_griyamultiguna2.jpg'}} style={{height: hp('15%'), width: wp('80%'),resizeMode: 'stretch', flex: 1}}/>
                <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Kredit Investasi Individu</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
            
                </Text>
                 <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Take over murni individu</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
                 
Fasilitas yang diajukan oleh pihak perorangan, dimana terjadi pemindahan plafond sesuai outstanding pinjaman dari bank lama ke bank baru. Fasilitas yang termasuk didalamnya adalah KPR dan kredit multiguna. Biasanya fasilitas ini digunakan untuk mendapatkan bunga yang lebih rendah dan angsuran bulanan yang lebih kecil.

                </Text>
                 <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Take over top up individu</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
                 
Fasilitas yang diajukan oleh pihak perorangan dimana terjadi pemindahan fasilitas outstanding beserta penambahan plafond dari bank lama ke bank baru. Fasilitas yang termasuk didalamnya adalah KPR dan kredit multiguna. Biasanya fasilitas ini digunakan untuk mendapatkan bunga yang lebih rendah dan angsuran bulanan yang lebih kecil. Dimana plafond pinjaman yang didapatkan akan lebih besar dari outstanding pinjaman bank lama ke bank baru, yang dapat digunakan untuk keperluan lainnya.
                </Text>


                   <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Take over jual beli individu</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
          Fasilitas yang diajukan oleh pihak perorangan, dimana terjadi transaksi jual beli pada saat kondisi jaminan sedang di agunkan di bank. Fasilitas yang termasuk didalamnya adalah KPR dan kredit multiguna. Dan terjadi transaksi jual beli pemindahan aset dari pemilik lama ke pemilik baru secara individu.
                </Text>  
                  
              </Body>
            </CardItem>
         

          </Card>

  
 
            
        </Content>
      </Container>
    );
  }
}
