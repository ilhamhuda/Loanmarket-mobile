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
                <Thumbnail source={{uri: 'https://medioenblog.files.wordpress.com/2018/01/bni1200x630bb.jpg'}} />
                <Body>
                  <Text style={{fontSize: 18, fontWeight: "bold"}}>BNI Griya</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.bni.co.id/portals/1/BNI/Personal/Pinjaman/Images/BP_BNIGriya8.jpg'}} style={{height: hp('15%'), width: wp('80%'),resizeMode: 'stretch', flex: 1}}/>
                <Text style={{fontSize:12,marginTop:10, color:'grey',textAlign:'justify'}}>
                  BNI GRIYA merupakan fasilitas pembiayaan konsumtif yang dapat digunakan untuk tujuan : Pembelian, Pembangunan/Renovasi, Top Up...
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


 <Card style={{flex: 0, marginTop:10}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://medioenblog.files.wordpress.com/2018/01/bni1200x630bb.jpg'}} />
                <Body>
                  <Text style={{fontSize: 18, fontWeight: "bold"}}>BNI Griya Multiguna</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.bni.co.id/portals/1/BNI/Personal/Pinjaman/Images/BP_griyamultiguna2.jpg'}} style={{height: hp('15%'), width: wp('80%'),resizeMode: 'stretch', flex: 1}}/>
                <Text style={{fontSize:12,marginTop:10, color:'grey',textAlign:'justify'}}>
                  BNI Griya Multiguna adalah Kredit yang diberikan kepada anggota masyarakat dengan agunan berupa properti siap huni dengan kepemilikan agunan atas nama pemohon atau pasangan pemohon (suami/istri) sepanjang tidak ada perjanjian pisah harta....
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



 <Card style={{flex: 0, marginTop:10}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://medioenblog.files.wordpress.com/2018/01/bni1200x630bb.jpg'}} />
                <Body>
                  <Text style={{fontSize: 18, fontWeight: "bold"}}>BNI Fleksi</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.bni.co.id/portals/1/BNI/Personal/Pinjaman/Images/BP_fleksi.jpg'}} style={{height: hp('15%'), width: wp('80%'),resizeMode: 'stretch', flex: 1}}/>
                <Text style={{fontSize:12,marginTop:10, color:'grey',textAlign:'justify'}}>
                  Merupakan fasilitas Kredit Tanpa Agunan (KTA) yang diberikan kepada Pegawai Aktif yang mempunyai penghasilan tetap (fixed income) yang pembayaran gajinya (payroll) disalurkan melalui BNI, untuk keperluan konsumtif yang tidak bertentangan dengan peraturan maupun Undang-Undang yang berlaku....
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
