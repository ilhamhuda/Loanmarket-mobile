import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header, Label, DatePicker, Content, Radio, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
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
  static navigationOptions = {
    header: null
}
constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      
      <Container>
        <Header style={{backgroundColor: "#063359"}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Group_contact')}>
              <Text style={{color: "#ffffff", fontSize: 12}}>Cancel</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#ffffff", fontSize: 16}}>Edit</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{color: "#ffffff", fontSize: 12}}>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Group Name</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Address</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}>
            <Item>
            <Icon active name='search' style={{color: "#000001", fontSize: 20, paddingLeft: 10}} />
            <Input placeholder='Search'/>
          </Item>
          
            </Item>
            <List>
                          

                          <ListItem>
                            <Left>
               
                          <Button transparent onPress={()=>this.props.navigation.navigate('Contact_detail')}>
                          <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg'}} />
                            
                            <Text style={{color:"#000001"}}>Ilham Huda</Text>
                            </Button>
                            </Left>
                            <Right>
                            <Radio selected={false} />
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
                            <Radio selected={true} />
                            </Right>
                          </ListItem>
                        </List>
        </Content>
      </Container>
    );
  }
}
