import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View, Text,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,ToastAndroid,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import api from '../api'; 
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  List,
  ListItem,
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
    // headerTitle: <LogoTitle />,
    headerTitle: 'My Profile',
  };

  constructor(props) {		
    super(props);	
    const { params } = this.props.navigation.state;		
    const cekid = params ? params.id : null;	
		this.state = {profile:[],loading:true,keyid:cekid,email:null,name:null,address:null,company_name:null}; 
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
      return<ActivityIndicator color='#00a8ea' style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80}}/>;
    }
    return (
      <Container style={{backgroundColor:'#f5f5f5'}}>
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
              marginBottom:20
            }}>
            <CardItem
              style={{
                backgroundColor: '#ffffff',
                paddingTop: 30,
                paddingBottom: 30,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: 'ffffff',
              }}>
              
              <View style={{flex:1, flexDirection:'column',marginLeft:0}}  >
                   <View style={{flex:1, flexDirection:'row',}}>
               <Left>
                  <Text
                    style={{
                      color: '#313233',
                      paddingBottom: 2,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
       {this.state.name}
                  </Text>
                  </Left>
                  <Right>

                  
                                     <Button style={{marginLeft:40,marginBottom:20,flex:1,borderRadius:10,width:wp('30%'),height:hp('5%'),borderColor:'#313233',borderWidth:1, flexDirection:'row'}} transparent onPress={()=>this.props.navigation.navigate('Profileedit')}>
                                 <Icon  name="md-create"  style={{color: "#313233",marginLeft:10, fontSize: 10}}/>
                                 <Text style={{marginLeft:-30,color:'#313233', textAlign: 'center', fontSize: 10 }}>
                                 Edit Profile
                                 </Text>
                               </Button>
                               </Right>
                  </View>
                  <View style={{flex:1, flexDirection:'row',}}>
                   <View style={{flex:1, flexDirection:'column'}}>
                   <Text
                    style={{ color: '#313233', paddingBottom: 2,  fontSize: 12 }}>
                     <Icon name="md-person" style={{fontSize: 17,marginLeft:10, color:'#313233'}}/> Position  
                  </Text>
                    <Text
                    style={{ color: '#313233', paddingBottom: 2,  fontSize: 12 }}>
                     <Icon name="md-home" style={{fontSize: 17,marginLeft:10, color:'#313233'}}/> Company  
                  </Text>
                  <Text
                    style={{ color: '#313233', paddingBottom: 2,  fontSize: 12 }}>
                     <Icon name="md-call" style={{fontSize: 17,marginLeft:10, color:'#313233'}}/> Phone  
                  </Text>
                   <Text
                    style={{ color: '#313233', paddingBottom: 2,  fontSize: 12 }}>
                     <Icon name="md-mail" style={{fontSize: 17,marginLeft:10, color:'#313233'}}/> Email  
                  </Text>
                   </View>

                    <View style={{flex:1, flexDirection:'column'}}>
                    <Text
                    style={{ color: '#313233', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>{this.state.position}
                
                  </Text>
                      <Text
                    style={{ color: '#313233', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>{this.state.company_name}
                
                  </Text>
                  <Text
                    style={{ color: '#313233', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>{this.state.phone}
                  
                  </Text>
                  <Text
                    style={{ color: '#313233', paddingBottom: 2, fontWeight: 'bold', fontSize: 12 }}>{this.state.email}
                  </Text>
                   </View>
                  </View>
                
      
                 
        
               
         </View>
            </CardItem>
          </Card>
          <View style={{ paddingRight: 0 }}>
          <List style={{backgroundColor: '#00a8ea', height:45, borderRadius:10, marginBottom:10}}>
                               
    
            <ListItem style={{ paddingTop:-10}}>
              <Left>
 
            <Button transparent onPress={()=>this.props.navigation.navigate('Login')}>
   
              
              <Text style={{color:"white"}}>Logout</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Login')}>
              <Icon  name="md-log-out"  style={{color: "white", paddingLeft: 12}}/>
            </Button>
              </Right>
            </ListItem>
         
          </List>
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
          
            </Text>
        
          </CardItem>
        </Content>
      </Container>
    );
  }
}

