import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  View,
  AsyncStorage,
  ScrollView,ToastAndroid,
  Act, Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import api from './api'; 
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
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
export default class App extends Component {
  
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerLeft: null
  };

 
  constructor(props) {		
    super(props);	
    const { params } = this.props.navigation.state;		
    const cekid = params ? params.id : null;	
		this.state = {profile:[],keyid:cekid,loading:true,email:null,name:null,address:null,company_name:null}; 
	}

  componentWillMount(){   
		api.getDetailUser(global.userid).then((result)=>{ 
			var p = result[0];
	      	this.setState({profile:p,name:p.name,company_name:p.company_name,address:p.address,email:p.email,loading:false});      
        }); 
  }
  
  // 	logout = async () => {
  //     	out = await AsyncStorage.removeItem("logged_id"); 
	// 	    logged_id = null;
  //       ToastAndroid.show("Logout", ToastAndroid.SHORT);  
  //       this.setState({profile:null});
  //     	this.props.navigation.navigate("Home")
	// } 

	// componentWillMount(){   
	// 	api.getDetailUser().then((result)=>{ 
	//       this.setState({profile:result.data});      
	//     }); 
	// }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator color='#00a8ea' style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80}}/>;
    }
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
          {this.state.name} 
            </Text>
            <Text
              style={{ color: 'white', paddingBottom: 10, fontSize: 12 }}>
             {this.state.company_name} 
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
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4FSM0uYRUq_CxTgbkd6KGBYPhX_cNVmcVKeuh5UuDLhie7n5o',
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
                  source={require('../assets/1.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center', color:"#575757",fontWeight:'bold', fontSize:12}}>To do list</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: hp('20%'),
                  width: wp('20%'),
                  marginRight: wp('3%'),
                }}
                onPress={() => this.props.navigation.navigate('Contact')}>
                <Image
                  source={require('../assets/3.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center',color:"#575757",fontWeight:'bold', fontSize:12}}>
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
                  source={require('../assets/4.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center',color:"#575757",fontWeight:'bold', fontSize:12 }}>
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
                  source={require('../assets/2.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center',color:"#575757",fontWeight:'bold', fontSize:12 }}>
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
                  source={require('../assets/5.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center', color:"#575757",fontWeight:'bold', fontSize:12}}>Banks</Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={{
                  height: hp('20%'),
                  width: wp('20%'),
                  marginRight: wp('3%'),
                }}
                onPress={() => this.props.navigation.navigate('Groupcontact')}>
                <Image
                  source={require('../assets/7.png')}
                  style={{
                    height: hp('13%'),
                    width: wp('21%'),
                    marginRight: wp('2%'),
                  }}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: 'center', color:"#575757",fontWeight:'bold', fontSize:12 }}>
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

