import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header, Content,Card, CardItem, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';

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
    header: null
}
  render() {
    return (
      
      <Container  style={{backgroundColor: "#e6e9ed"}}>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Group_contact')}>
              <Icon name='arrow-back' style={{color: "#ffffff", fontSize: 20, paddingLeft: 10}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Group Detail</Title>
          </Body>
          <Right>
          <Button transparent>
              <Text style={{color: "#ffffff", fontSize: 12}}>Edit</Text>
            </Button>
          </Right>
        </Header>
        
        <Content style={{margin:15, backgroundColor: "#e6e9ed", borderTopColor: "#e6e9ed", borderBottomColor: "#e6e9ed"}}>
        {/* <List style={{backgroundColor: 'white', marginTop:10}}>
          <View style={{flex: 1, flexDirection: 'Column',paddingLeft:20,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Raywhite Jakarta </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
            </View> 
          </List> */}
      
          <List style={{backgroundColor: 'white', marginTop:10}}>
          <View style={{flex: 1, flexDirection: 'Column',paddingLeft:20,paddingTop:20,paddingBottom:10}}>
              <Text style={{color:"#063359", paddingBottom:5, fontSize: 18, fontWeight: "bold"}}>Raywhite Jakarta </Text>
              <Text style={{color:"#063359", paddingBottom:10, fontSize: 12, color:"grey"}}>Jln Ciwastra Komplek Pemda no 65</Text>
            </View>   
            <Item>
            <Icon active name='search' style={{color: "#000001", fontSize: 20, paddingLeft: 10}} />
            <Input placeholder='Search'/>
          </Item>   
            <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail')}>
         <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />
              
              <Text style={{color:"#000001"}}>Ilham Huda</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent>
              <Icon name="arrow-forward"  style={{color: "#000001", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
 
            <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail')}>
          <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />
              
              <Text style={{color:"#000001"}}>Ilham Huda</Text>
            </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail')}>
              <Icon  name="arrow-forward"  style={{color: "#000001", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                
            <Button transparent>
         <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />
              
              <Text style={{color:"#000001"}}>Ilham Huda</Text></Button>
              </Left>
              <Right>
              <Button transparent>
              <Icon  name="arrow-forward"  style={{color: "#000001", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
          </List>
     

          <List>
                          

          
          </List>
        </Content>
      </Container>
    );
  }
}
