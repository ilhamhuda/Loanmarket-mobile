import React, { Component } from 'react';
import { Image, Linking, ImageBackground, Textarea, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, CheckBox, Header, Label, DatePicker, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base'
class LogoTitle extends React.Component {
  render() {
    return (

      <Text style={{fontWeight:"bold", color:'white'}}> Contact</Text>
    );
  }
}
export default class Tasks extends Component {
  static navigationOptions = {
    title: 'SMS Communicator',
    headerTintColor: 'black',
    headerRight: (
          <Button transparent onPress={()=>this.props.navigation.navigate('Contactadd')}>
              <Icon style={{color: "black", fontSize: 20}}  name='send' />
            </Button>
    )
  };
constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), checked: false };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      
      <Container>
        
        <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
          <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Default</Text>
            </ListItem>
            </List>
            <View style={{marginTop:10,flex: 1, flexDirection: 'column'}}>
                <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Not Contacted</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Cold leads</Text>
             </View>
                  <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Debitor</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Hot leads</Text>
             </View>
                  <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>in CPA Process</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Just imported</Text>
             </View>
                  <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Not connected</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Rejected</Text>
             </View>
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Success</Text>
             </View>
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Undecided leads</Text>
             </View>
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30,marginBottom:10}}>Warm leads</Text>
             </View>
            </View>

             <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Lenders</Text>
            
            </ListItem>
              <View style={{marginTop:10,flex: 1, flexDirection: 'column'}}>
             
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30,marginBottom:10}}>Warm leads</Text>
             </View>
            </View>
            </List>
                <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Database</Text>
            </ListItem>
              <View style={{marginTop:10,flex: 1, flexDirection: 'column'}}>
             
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30,marginBottom:10}}> Prospek</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30,marginBottom:10}}>Relasi</Text>
             </View>
            </View>
            </List>
                <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Kategori Umum Nasabah
</Text>
            </ListItem>
            </List>
            
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Message Type</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>From</Label>
              <Input />
            </Item>
              <Item style={{marginTop:10}}floatingLabel last>
              <Label>Timing</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10}}floatingLabel last>
              <Label>Template</Label>
              <Input />
            </Item>
            <Item style={{marginTop:10, height: 300}}floatingLabel last>
              <Label>Message</Label>
              <Input />
            </Item>
            <List>
       
            </List>
    
        </Content>
      </Container>
    );
  }
}
