import React, { Component } from 'react';
import { Image, AppRegistry, StyleSheet,  Dimensions,  Linking, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card, CardItem, Tab, ScrollableTab,  TabHeading, Tabs, Text, Header, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
import Tab1 from './Contact_profile/notes';
import Tab2 from './Contact_profile/tasks';
import Tab3 from './Contact_profile/properties';
import Tab4 from './Contact_profile/requirements';
var screenWidth = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Communications from 'react-native-communications';
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
// class Notes extends React.Component {
//   render() {
//   return (
//     <View >
//        <Button  transparent style={{paddingTop: 1, width: wp('80%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Notes_add')}>
//           <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
//           <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new Note</Text>
//         </Button>
//     </View>
//   );
// }
// }
export default class Tasks extends Component {
  // static navigationOptions = {
  //   headerTitle: <LogoTitle />,
  //   headerTintColor: 'white',
  //   headerStyle: {
  //     backgroundColor: '#063359',
  //   },
  // };
  static navigationOptions = {
    header: null
}
  render() {
    return (
      
      <Container>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contact')}>
              <Icon name='arrow-back' style={{color: "#ffffff", fontSize: 20, paddingLeft: 10}}/>
              <Title style={{color: "#ffffff", fontSize: 12}}>Contacts</Title>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Detail</Title>
          </Body>
        </Header>
        <Content>
        <View style={{flex: 1, flexDirection: 'row',margin:20}}>
              
              <Thumbnail style={{borderWidth: 2, width: wp('20%'),height: hp('15%'),  borderColor: '#063359'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />  

              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:30}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Ilham Huda</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name="md-pin" color="white" style={{fontSize: 12, paddingRight:10, color:"grey"}}/>
                  <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
              </View>
                 <View style={{flex: 1, flexDirection: 'row'}}>
                 <Button onPress={()=>{Linking.openURL('tel:089601777308');}} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} >
                  <Icon name="md-call" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                 <Button onPress={() => Communications.phonecall('0123456789', true)}  transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-text" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                 <Button onPress={() => Communications.email(['aboutreact11@gmail.com', 'hello@aboutreact.com'],null,null,'Demo Subject','Demo Content for the mail')} transparent style={{paddingTop: 1, borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-mail" color="white" style={{fontSize: 17, paddingTop:5, color:"#063359"}}/>
                 </Button>
                 {/* <TouchableOpacity style={{paddingTop: 1, borderWidth:3, borderColor: "white", borderRadius:15, height: hp('5%'),marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-text" color="white" style={{fontSize: 30}}/>
                 </TouchableOpacity>
                 <TouchableOpacity style={{paddingTop: 1, borderWidth:3, borderColor: "white", borderRadius:15, height: hp('5%'),marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
                  <Icon name="md-mail" color="white" style={{fontSize: 30}}/>
                 </TouchableOpacity> */}
                </View>
                </View>  
              </View>
          <View style={{paddingRight:5, backgroundColor:'#f5f5f5'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={{marginTop:15, marginBottom:20,  paddingHorizontal:10}}>
      
        <TouchableOpacity  onPress={()=>{this.scroll.scrollTo({x:0})}} style={{height: hp('3%'),width: wp('18.5%'),marginRight:wp('4%')}} >
 <Text style={{textAlign:'center', fontSize:15}}>Notes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{this.scroll.scrollTo({x:screenWidth})}} style={{height: hp('3%'),width: wp('18.5%'),marginRight:wp('4%')}}>
 <Text style={{textAlign:'center', fontSize:15}}>Loan </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{this.scroll.scrollTo({x:screenWidth * screenWidth})}} style={{height: hp('3%'),width: wp('30%'),marginRight:wp('4%')}} >
  <Text style={{textAlign:'center', fontSize:15}}>Requirements</Text>
          </TouchableOpacity>

        </ScrollView>
     
         {/* <Button  transparent style={{paddingTop: 1, width: wp('80%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Newnote')}>
          <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
          <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new Note</Text>
        </Button> */}
      </View> 
            {/* <Tabs renderTabBar={()=> <ScrollableTab />} tabBarUnderlineStyle={{ backgroundColor: '#063359',height:3 }}>
          <Tab heading={ <TabHeading ><Text style={{color:'#063359'}}>Notes</Text></TabHeading>}  >
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Text style={{color:'#063359'}}>Loan</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Text style={{color:'#063359'}}>Requirements</Text></TabHeading>}>
            <Tab4 />
          </Tab>
        </Tabs> */}
         <View style={styles.MainContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={(node)=> this.scroll = node}
        >
          <View style={styles.ScrollContainer}>

              <Button  transparent style={{paddingTop: 1, width: wp('80%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Notes_add')}>
          <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
          <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new Note</Text>
        </Button>
 <View style={{flex: 1, flexDirection: 'column', margin:10,width: wp('90%')}}>
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Title Note </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Detail Notes</Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           13 Agustus 2019</Text>
             </View>
  
            
              <ListItem style={{ height: 50,marginLeft:-10,backgroundColor:"#f5f5f5",width: wp('90%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color:"#000001", fontSize:14}}>Read Note</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent >
              <Icon  name="arrow-forward"  style={{color: "#000001", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
                </View> 
               
               
               
              </View>
 
              <View style={{flex: 1, flexDirection: 'column', margin:10,width: wp('90%')}}>
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Title Note </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Detail Notes</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="time"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           13 Agustus 2019</Text>
             </View>
              <ListItem style={{ height: 40,marginLeft:-10,backgroundColor:"#f5f5f5",width: wp('90%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color:"#000001", fontSize:14}}>Read Note</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent >
              <Icon  name="arrow-forward"  style={{color: "#000001", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
                </View> 
               
          </View>
  
          </View>
          
          <View style={styles.ScrollContainer}>

          <Button  transparent style={{paddingTop: 1, width: wp('80%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Newnote')}>
          <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
          <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new Loan</Text>

  
  
        </Button>
                
 <View style={{flex: 1, flexDirection: 'column', margin:10,width: wp('90%')}}>
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Title Note </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Detail Notes</Text>
              <View style={{flex: 1, flexDirection: 'row', width:100}}> 
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="bed"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           4</Text>
             </View>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="car"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           3</Text>
             </View>
             </View>
            
              <ListItem style={{ height: 50,marginLeft:-10,backgroundColor:"#f5f5f5",width: wp('90%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color:"#000001", fontSize:14}}>Read Note</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent >
              <Icon  name="arrow-forward"  style={{color: "#000001", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
                </View> 
               
               
               
              </View>
 
              <View style={{flex: 1, flexDirection: 'column', margin:10,width: wp('90%')}}>
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Title Note </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Detail Notes</Text>
              <View style={{flex: 1, flexDirection: 'row', width:100}}> 
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="bed"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           4</Text>
             </View>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="car"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           3</Text>
             </View>
             </View>
              <ListItem style={{ height: 40,marginLeft:-10,backgroundColor:"#f5f5f5",width: wp('90%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color:"#000001", fontSize:14}}>Read Note</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent >
              <Icon  name="arrow-forward"  style={{color: "#000001", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
                </View> 
               
          </View>
          </View>
          <View style={styles.ScrollContainer}>

          <Button  transparent style={{paddingTop: 1, width: wp('80%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}} onPress={()=>this.props.navigation.navigate('Requirement_add')}>
          <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
          <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new Requirements</Text>
        </Button>
        
 <View style={{flex: 1, flexDirection: 'column',height: 60, margin:10,width: wp('90%')}}>
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Type </Text>
              
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Residential</Text><View style={{flex: 1, flexDirection: 'row', width:100}}> 
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="bed"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           4</Text>
             </View>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="car"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           3</Text>
             </View>
             </View>
  
            
              <ListItem style={{ height: 40,marginLeft:-10,backgroundColor:"#f5f5f5",width: wp('90%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color:"#000001", fontSize:14}}>Read Note</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent >
              <Icon  name="arrow-forward"  style={{color: "#000001", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
                </View> 
               
               
               
              </View>
 
              <View style={{flex: 1, flexDirection: 'column',height: 60, margin:10,width: wp('90%')}}>
       
              <View style={{flex: 1, flexDirection: 'Column',paddingLeft:10,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Type </Text>
              
   <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Residential</Text>
   <View style={{flex: 1, flexDirection: 'row', width:100}}> 
             <View style={{flex: 1,height:30, flexDirection: 'row'}}>  
             <Icon  name="bed"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           4</Text>
             </View>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="car"  style={{color: "#000001", marginRight:5, fontSize:14, paddingLeft: 10}}/>
             <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>
           3</Text>
             </View>
             </View>
              <ListItem style={{ height: 40,marginLeft:-10,backgroundColor:"#f5f5f5",width: wp('90%')}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Text style={{color:"#000001", fontSize:14}}>Read Note</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent >
              <Icon  name="arrow-forward"  style={{color: "#000001", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
                </View> 
               
          </View>
      
          </View>
        </ScrollView>
      </View>
        </Content>
       
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  ScrollContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    marginTop: 20,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ScrollTextContainer: {
    fontSize: 20,
    padding: 15,
    color: '#000',
    textAlign: 'center'
  },
  ButtonViewContainer: {
    flexDirection: 'row',
    paddingTop: 35,
  },
  ButtonContainer: {
    padding: 30,
  },
});