import React, { Component } from 'react';
import { Image, ImageBackground,Linking, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card,CardItem, Header, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
import { Searchbar } from 'react-native-paper';
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
    title: 'Branch',
    headerTintColor: 'black'
  };
constructor(props) {
    super(props);
    this.state = { firstQuery : ''};
  }
  render() {
    return (
      
      <Container style={{backgroundColor: "#f5f5f5"}}>
       
        <Content style={{margin:15, backgroundColor: "#f5f5f5", borderTopColor: "#e6e9ed", borderBottomColor: "#e6e9ed"}}>
            
    <Card
            style={{
              borderRadius: 10,
              borderWidth: 0,
              borderColor: '#ffffff',
            }}>
            <CardItem
              style={{
                backgroundColor: 'white',
                paddingTop: 5,
                paddingBottom: 10,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: 'ffffff',
              }}>
       <View style={{flex: 1, flexDirection: 'row'}}>
              <Thumbnail style={{borderWidth: 2,marginTop:10, borderColor: '#ffffff'}} source={{uri: 'https://medioenblog.files.wordpress.com/2018/01/bni1200x630bb.jpg'}} />
              
         <View style={{paddingLeft:10, paddingTop:20, paddingBottom:5}}>
              <Text style={{color:"black", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>BNI Jakarta Pusat</Text>
         </View>
</View>            
            </CardItem>
          
          </Card>

      
            <Searchbar
       style={{backgroundColor:"white",marginBottom: 10,margin:5,marginTop:10,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search Branch"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />

          <Card
            style={{
              borderRadius: 10,
              marginTop: 20,
              borderWidth: 0,
              borderColor: '#ffffff',
            }}>
            <CardItem
              style={{
                backgroundColor: 'white',
                paddingTop: 5,
                paddingBottom: 10,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: 'ffffff',
              }}>
       <View style={{flex: 1, flexDirection: 'row'}}>
 
         <View style={{paddingLeft:10, paddingTop:20, paddingBottom:5}}>
         
              <Text style={{color:"black", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>ABDUL MUIS	</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
               <Icon name="md-pin" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
               <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>JL. ABDUL MUIS NO. 7A , JAK-PUS, GEDUNG DEPARTEMEN PERHUBUNGAN</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
               <Icon name="md-call" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
               <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>(021) 3520840, 3500870, 3500871</Text>
              </View>
         </View>
</View>            
            </CardItem>
          </Card>

            <Card
            style={{
              borderRadius: 10,
              marginTop: 20,
              borderWidth: 0,
              borderColor: '#ffffff',
            }}>
            <CardItem
              style={{
                backgroundColor: 'white',
                paddingTop: 5,
                paddingBottom: 10,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: 'ffffff',
              }}>
       <View style={{flex: 1, flexDirection: 'row'}}>
 
         <View style={{paddingLeft:10, paddingTop:20, paddingBottom:5}}>
         
              <Text style={{color:"black", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>BENDUNGAN HILIR D/H GRANADA	</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
               <Icon name="md-pin" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
               <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>JL. BENDUNGAN HILIR RAYA BLOK G-1 NO. 3B JAKSEL</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
               <Icon name="md-call" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
               <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>(021) 3520840, 3500870, 3500871</Text>
              </View>
         </View>
</View>            
            </CardItem>
          </Card>

          
          <Card
            style={{
              borderRadius: 10,
              marginTop: 20,
              borderWidth: 0,
              borderColor: '#ffffff',
            }}>
            <CardItem
              style={{
                backgroundColor: 'white',
                paddingTop: 5,
                paddingBottom: 10,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: 'ffffff',
              }}>
       <View style={{flex: 1, flexDirection: 'row'}}>
 
         <View style={{paddingLeft:10, paddingTop:20, paddingBottom:5}}>
         
              <Text style={{color:"black", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>ABDUL MUIS	</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
               <Icon name="md-pin" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
               <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>JL. ABDUL MUIS NO. 7A , JAK-PUS, GEDUNG DEPARTEMEN PERHUBUNGAN</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
               <Icon name="md-call" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
               <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>(021) 3520840, 3500870, 3500871</Text>
              </View>
         </View>
</View>            
            </CardItem>
          </Card>

            <Card
            style={{
              borderRadius: 10,
              marginTop: 20,
              borderWidth: 0,
              borderColor: '#ffffff',
            }}>
            <CardItem
              style={{
                backgroundColor: 'white',
                paddingTop: 5,
                paddingBottom: 10,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: 'ffffff',
              }}>
       <View style={{flex: 1, flexDirection: 'row'}}>
 
         <View style={{paddingLeft:10, paddingTop:20, paddingBottom:5}}>
         
              <Text style={{color:"black", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>BENDUNGAN HILIR D/H GRANADA	</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
               <Icon name="md-pin" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
               <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>JL. BENDUNGAN HILIR RAYA BLOK G-1 NO. 3B JAKSEL</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
               <Icon name="md-call" style={{fontSize: 17,marginLeft:1, color:'#cfd4d1'}}/>
               <Text style={{marginLeft:-10,paddingBottom:10, fontSize: 12, color:"grey", width:wp('60%')}}>(021) 3520840, 3500870, 3500871</Text>
              </View>
         </View>
</View>            
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
