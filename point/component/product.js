import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import Tab1 from './Product/individual';
import Tab2 from './Product/perusahaan';
import { Container, Tabs, TabHeading, Tab, Header, Content, List, ListItem, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
class LogoTitle extends React.Component {
  render() {
    return (
      <Text style={{fontWeight:"bold", color:"white"}}> Tasks</Text>
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
            <Title style={{color: "#ffffff", fontSize: 16}}>Product</Title>
          </Body>
          <Right>
         
          </Right>
        </Header>
  <Tabs tabBarUnderlineStyle={{ backgroundColor: '#063359',height:3 }}>
          <Tab heading={ <TabHeading ><Text style={{color:'#063359'}}>Individu</Text></TabHeading>}  >
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Text style={{color:'#063359'}}>Perusahaan</Text></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
