import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card, Header, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
      
      <Container style={{backgroundColor: "#e6e9ed"}}>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('App')}>
              <Icon name='arrow-back' style={{color: "#ffffff", fontSize: 20, paddingLeft: 10}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Banks</Title>
          </Body>
          <Right>
         
          </Right>
        </Header>
        <Content style={{margin:15, backgroundColor: "#e6e9ed", borderTopColor: "#e6e9ed", borderBottomColor: "#e6e9ed"}}>
        <Card style={{backgroundColor:"white", paddingTop: 0, borderRadius:10,paddingBottom: 0, borderRadius:100, borderWidth: 0, borderColor: 'white'}}>
           <View style={{flex:1, flexDirection:'row'}}>
            <Icon active name='search' style={{color: "#000001", fontSize: 20, marginLeft: 10,marginTop:10}} />
            <Input placeholder='Search'/>
            </View>
          </Card>
          <List style={{backgroundColor: 'white', marginTop:10}}>
                               
            <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banks_detail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://medioenblog.files.wordpress.com/2018/01/bni1200x630bb.jpg'}} />
              
              <Text style={{color:"#000001"}}>BNI</Text>
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
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlEBxHp6P7CXey44ePWVPurMS4XlWZTLUWok8R9WRGAljMD7N'}} />
              
              <Text style={{color:"#000001"}}>BCA</Text>
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
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://logoeps.com/wp-content/uploads/2012/11/bank-mandiri-logo-vector.png'}} />
              
              <Text style={{color:"#000001"}}>Mandiri</Text>
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
