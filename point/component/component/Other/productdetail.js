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
                <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>KPR</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
                 KPR adalah hal yang penting dan merupakan komitmen finansial dengan jangka panjang, maka Anda harus mengetahui KPR secara detail dari awal
                </Text>
                 <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Apa yang harus dipersiapkan?</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
                 
Dalam memberikan pinjaman, Pemberi Pinjaman akan meminta sejumlah informasi tambahan terkait diri Anda. Tentunya, Loan Adviser Anda akan siap memberitahu Anda apa yang akan diperlukan selama Anda menjalani proses aplikasi pinjaman.

                </Text>
                 <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Keuntungan KPR dan Menggunakan Jasa Loan Market</Text>
                <Text style={{fontSize:12,marginTop:10, color:'grey'}}>
                 
Umumnya, para pengembang telah bekerja sama dengan bank-bank untuk dapat menciptakan proses pengajuan kredit yang lebih baik serta lancar. Maka dari itu, dalam mengajukan kredit, Anda perlu cermat ketika memilih bank yang tepat untuk melakukan pengajuan.
Loan Market siap dan mampu membantu Anda dalam proses pengajuan aplikasi kredit kepemilikan rumah yang Anda impikan dengan membantu Anda mendapatkan pinjaman KPR dari bank – bank terkemuka yang paling sesuai dengan kondisi Anda.

Loan Adviser kami siap membantu Anda secara langsung dalam membandingkan bunga, biaya, dan pengeluaran lainnya yang tujuannya untuk memastikan pinjaman KPR yang sesuai dengan Anda.

                </Text>
                <Text style={{fontSize: 14,marginTop:10, fontWeight: "bold"}}>Peryaratan</Text>
                < View style={{flex:1, flexDirection: 'column'}}>
                <Text style={{fontSize: 12,marginTop:10}}>1)  Warga Negara Indonesia (WNI) dan berdomisili di Indonesia.</Text>
                <Text style={{fontSize: 12,marginTop:10}}>2)  Minimal Usia pada saat kredit berakhir maksimal 55 tahun (pegawai) dan maksimal 6 tahun (Profesional/Wiraswasta).</Text>
                <Text style={{fontSize: 12,marginTop:10}}>3)  Memiliki pekerjaan dan penghasilan sebagai pegawai/wiraswasta/professional dengan masa kerja/usaha minimal 1 tahun atau 2 tahun.</Text>
                </View>
                  
              </Body>
            </CardItem>
         

          </Card>

  
 
            
        </Content>
      </Container>
    );
  }
}
