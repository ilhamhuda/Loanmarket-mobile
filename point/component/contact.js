import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
      
      <Container>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('App')}>
              <Icon name='arrow-back' style={{color: "#ffffff", fontSize: 20, paddingLeft: 10}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Contacts</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contact_add')}>
              <Icon style={{color: "#ffffff", fontSize: 20}}  name='add' />
            </Button>
          </Right>
        </Header>
        <Content style={{borderTopWidth:15, borderTopColor: "#e6e9ed"}}>
        <Item>
            <Icon active name='search' style={{color: "#000001", fontSize: 20, paddingLeft: 10}} />
            <Input placeholder='Search'/>
          </Item>
          <List>
            
            <ListItem itemDivider>
              <Text>Property Owners</Text>
            </ListItem>
                      
            <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Contact_detail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />
              
              <Text style={{color:"#000001"}}>Ilham Huda</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent>
              <Icon  name="arrow-forward"  style={{color: "#000001", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text>All Contacts</Text>
            </ListItem>  
            <ListItem>
              <Left>
 
            <Button transparent onPress={()=>this.props.navigation.navigate('Contact_detail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />
              
              <Text style={{color:"#000001"}}>Ilham Huda</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Contact_detail')}>
              <Icon  name="arrow-forward"  style={{color: "#000001", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                
            <Button transparent>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-29213/160_OnePlus7_DxOMark_Selfie-1-e1557408678866-1024x768.jpg'}} />
              
              <Text style={{color:"#000001"}}>Budi Marpaung</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent>
              <Icon  name="arrow-forward"  style={{color: "#000001", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
