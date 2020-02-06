import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Card, Header, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base';
import { Searchbar } from 'react-native-paper';
import api from '../api'; 
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
    this.state = { bank : []};
  }

  componentWillMount(){		
    api.getBank().then((result)=>{ 
      this.setState({bank:result.data})
        }
    );
  }

  render_bank(listing){
    return(
      <ListItem>
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
            <Thumbnail style={{borderWidth: 2, borderColor: '#ffffff'}} source={{uri: listing.imageurl}} />
              
              <Text style={{color:"#000001"}}>{listing.name}</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Banksdetail')}>
              <Icon name="arrow-forward"  style={{color: "#bdbebf", paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
    )
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
                   
                	{this.state.bank.map((item)=>this.render_bank(item))}            
            
          
          </List>
        </Content>
      </Container>
    );
  }
}
