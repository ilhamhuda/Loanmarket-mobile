import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Tasks from './component/Other/task';
import Login from './component/login';
import Home from './component/home';
import Notesadd from './component/Contact_profile/notesadd';
import Requirement_add from './component/Contact_profile/requirementsadd';
import Cpadetail from './component/Contact_profile/cpadetail';
import Status from './component/Contact_profile/status';
import Notesdetail from './component/Contact_profile/notesdetail';
import Requirement_detail from './component/Contact_profile/requirementsdetail';
import Taskadd from './component/Other/task_add';
import { createStackNavigator } from 'react-navigation';
import Marketing from './component/Marketing/marketing';
import Profile from './component/Other/profile';
import Profileedit from './component/Other/profile_edit';

import Ecommunicatortemplate from './component/Marketing/e_communicator_template';
import Scommunicator from './component/Marketing/s_communicator';
import Ecommunicator from './component/Marketing/e_communicator';
import Product from './component/Other/product';
import Productdetail from './component/Other/productdetail';
import Artikel2 from './component/Artikel/2';
import Artikel3 from './component/Artikel/3';
import Artikel4 from './component/Artikel/4';
import Artikel5 from './component/Artikel/5';
import Artikel6 from './component/Artikel/6';
import Artikel7 from './component/Artikel/7';
import Contact from './component/Contact/contact';
import Groupcontact from './component/Group/groupcontact';
import Groupcontactdetail from './component/Group/group_contact_detail';
import Groupcontactedit from './component/Group/group_contact_edit';
import Groupcontacteditcontact from './component/Group/group_contact_edit_contact';
import Groupcontactadd from './component/Group/group_contact_add';
import Matching from './component/Other/matching';
import Banks from './component/Bank/banks';
import Banksdetail from './component/Bank/banksdetail';
import Banksproduct from './component/Bank/banksproduct';
import Banksproductdetail from './component/Bank/banksproductdetail';
import Banksdetailcabang from './component/Bank/banksdetailcabang';
import Contactadd from './component/Contact/contact_add';
import Contactreq from './component/Contact/Contact_req';
import Contactuser from './component/Contact/contact_user';
import Contactdetail from './component/Contact/contact_detail';
import Contactinfo from './component/Contact/Contact_info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR28lvMjk1NHJDhddi6f3pPcvj7aK-98o03iFYEL7FMSVMyJAQT',
        }}
        style={{ height: hp('7%'), width: wp('40%'), marginRight: wp('4%') }}
        resizeMode="contain"
      />
    );
  }
}
class App extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    return (
      <Container>
        <Content
          style={{
            padding: 15,
            borderTopWidth: 15,
            borderTopColor: '#f7f5f0',
          }}>
          <Card
            style={{
              borderRadius: 10,
              borderWidth: 0,
              borderColor: '#ffffff',
            }}>
            <CardItem
              style={{
                backgroundColor: '#00a8ea',
                paddingTop: 30,
                paddingBottom: 30,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: 'ffffff',
              }}>
              <Left>
                <Body>
                  <Text
                    style={{ color: 'white', paddingBottom: 5, fontSize: 12 }}>
                    Welcome Back,
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      paddingBottom: 5,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Ilham Huda
                  </Text>
                  <Text
                    style={{ color: 'white', paddingBottom: 10, fontSize: 12 }}>
                    Raywhite Bandung
                  </Text>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: 'white',
                      borderRadius: 15,
                      height: hp('5%'),
                      width: wp('30%'),
                      marginRight: wp('4%'),
                    }}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: hp('1%'),
                        fontSize: 10,
                        color: 'white',
                      }}>
                      Profile Saya{' '}
                      <Icon
                        name="md-arrow-dropright"
                        color="white"
                        style={{ fontSize: 12 }}
                      />
                    </Text>
                  </TouchableOpacity>
                </Body>
              </Left>
              <Right>
                <Thumbnail
                  style={{
                    borderWidth: 2,
                    width: wp('20%'),
                    height: hp('15%'),
                    borderColor: '#ffffff',
                  }}
                  source={{
                    uri:
                      'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg',
                  }}
                />
              </Right>
            </CardItem>
          </Card>
          <View style={{ paddingRight: 0 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 30, marginBottom: 20, paddingHorizontal: 5 }}>
              <TouchableOpacity
                style={{
                  height: hp('20%'),
                  width: wp('20%'),
                  marginRight: wp('3%'),
                }}
                onPress={() => this.props.navigation.navigate('Tasks')}>
                <Image
                  source={require('./assets/1.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center', fontSize: 10 }}>To do list</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: hp('20%'),
                  width: wp('20%'),
                  marginRight: wp('3%'),
                }}
                onPress={() => this.props.navigation.navigate('Contact')}>
                <Image
                  source={require('./assets/3.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                  Contacts{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: hp('20%'),
                  width: wp('20%'),
                  marginRight: wp('3%'),
                }}
                onPress={() => this.props.navigation.navigate('Marketing')}>
                <Image
                  source={require('./assets/4.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                  E-Marketing
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: hp('20%'),
                  width: wp('20%'),
                  marginRight: wp('3%'),
                }}
                onPress={() => this.props.navigation.navigate('Product')}>
                <Image
                  source={require('./assets/2.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                  Product
                </Text>
              </TouchableOpacity>
            </ScrollView>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: -40,
                marginBottom: 20,
                paddingHorizontal: 10,
              }}>
              <TouchableOpacity
                style={{
                  height: hp('20%'),
                  width: wp('20%'),
                  marginRight: wp('3%'),
                }}
                onPress={() => this.props.navigation.navigate('Banks')}>
                <Image
                  source={require('./assets/5.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center', fontSize: 10 }}>Banks</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: hp('20%'),
                  width: wp('20%'),
                  marginRight: wp('3%'),
                }}
               onPress={() => this.props.navigation.navigate('Matching')}>
                <Image
                  source={require('./assets/6.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  esizeMode="contain"
                />
                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                  Matching
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: hp('20%'),
                  width: wp('20%'),
                  marginRight: wp('3%'),
                }}
                onPress={() => this.props.navigation.navigate('Groupcontact')}>
                <Image
                  source={require('./assets/7.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                  Group Contact
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* <TouchableOpacity style={{borderRadius:10, borderWidth: 0, borderColor: '#ffffff'}}>
      <ImageBackground source={{uri: 'https://image.shutterstock.com/image-illustration/blue-white-black-abstract-background-260nw-645331459.jpg'}} style={{height: hp('10%'),width: wp('92%'), borderRadius:10, borderWidth: 0, borderColor: '#ffffff'}}>
      <Text style={{textAlign:'center', fontSize:10, color:"white",marginTop:wp('5%')}}>Copyright@ 2019</Text>
       </ImageBackground>
       </TouchableOpacity> #063359#*/}
          <CardItem
            style={{
              backgroundColor: '00a8ea',
              height: hp('7%'),
              width: wp('92%'),
              borderRadius: 10,
              borderWidth: 0,
              borderColor: '#ffffff',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: 'white',
                marginTop: wp('2%'),
                fontWeight: 'bold',
              }}>
              Copyright@ 2019
            </Text>
            <Text style={{ fontSize: 10, color: 'white', marginTop: wp('2%') }}>
              {' '}
              MyContacts
            </Text>
          </CardItem>
        </Content>
      </Container>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    App: { screen: App },
    Tasks: { screen: Tasks },
    Taskadd: { screen: Taskadd },
    Notesadd: { screen: Notesadd },
    Notesdetail: { screen: Notesdetail },
    Contactdetail: { screen: Contactdetail },
    Marketing: { screen: Marketing },
    Scommunicator: { screen: Scommunicator },
    Ecommunicator: { screen: Ecommunicator },
    Ecommunicatortemplate: { screen: Ecommunicatortemplate },
    Product: { screen: Product },
    Productdetail: { screen: Productdetail },
    Requirementsadd: { screen: Requirement_add },
    Requirementsdetail: { screen: Requirement_detail },
    Contact: { screen: Contact },
    Login: { screen: Login },
    Contactadd: { screen: Contactadd },
    Contactreq: { screen: Contactreq },
    Contactuser: { screen: Contactuser },
    Banks: { screen: Banks },
    Banksproduct: { screen: Banksproduct },
    Banksproductdetail: { screen: Banksproductdetail },
    Banksdetailcabang: { screen: Banksdetailcabang },
    Banksdetail: { screen: Banksdetail },
    Matching: { screen: Matching },
    Cpadetail: { screen: Cpadetail },
    Groupcontact: { screen: Groupcontact },
    Home: { screen: Home },
    Groupcontactadd: { screen: Groupcontactadd },
    Groupcontactdetail: { screen: Groupcontactdetail },
        Groupcontactedit: { screen: Groupcontactedit},
            Groupcontacteditcontact: { screen: Groupcontacteditcontact },
    Profile: { screen: Profile },
    Profileedit: { screen: Profileedit },
    Artikel2: { screen: Artikel2 },
    Artikel3: { screen: Artikel3 },
    Artikel4: { screen: Artikel4 },
    Status: { screen: Status },
    Artikel5: { screen: Artikel5 },
    Artikel6: { screen: Artikel6 },
    Artikel7: { screen: Artikel7 },
    Contactinfo: { screen: Contactinfo },
  },
  {
    initialRouteName: 'Login',
  }
);

export default HomeStack;
