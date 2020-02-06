import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card, Header, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
import { Searchbar } from 'react-native-paper';
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
    title: 'Bank Cabang',
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
         <Searchbar
       style={{backgroundColor:"white", marginTop: 10,margin:5,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search Bank"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
          <List style={{backgroundColor: 'white', marginTop:10, borderRadius:10}}>
                               
            <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://medioenblog.files.wordpress.com/2018/01/bni1200x630bb.jpg'}} />
              
              <Text style={{color:"#000001"}}>BNI</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
              <Icon name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
 
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlEBxHp6P7CXey44ePWVPurMS4XlWZTLUWok8R9WRGAljMD7N'}} />
              
              <Text style={{color:"#000001"}}>BCA</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
              <Icon  name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://logoeps.com/wp-content/uploads/2012/11/bank-mandiri-logo-vector.png'}} />
              
              <Text style={{color:"#000001"}}>Mandiri</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
              <Icon  name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>


              <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://medioenblog.files.wordpress.com/2018/01/bni1200x630bb.jpg'}} />
              
              <Text style={{color:"#000001"}}>BNI</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
              <Icon name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
 
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlEBxHp6P7CXey44ePWVPurMS4XlWZTLUWok8R9WRGAljMD7N'}} />
              
              <Text style={{color:"#000001"}}>BCA</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
              <Icon  name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: 'https://logoeps.com/wp-content/uploads/2012/11/bank-mandiri-logo-vector.png'}} />
              
              <Text style={{color:"#000001"}}>Mandiri</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
              <Icon  name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
