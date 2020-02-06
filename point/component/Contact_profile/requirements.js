import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Button, Body, Title, Right } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {
  return (
    <View style={styles.container}>
       <Button  transparent style={{paddingTop: 1, width: wp('80%'), borderWidth:1, borderColor: "grey", borderRadius:80,marginRight:wp('4%')}}onPress={()=>this.props.navigation.navigate('Training')}>
          <Icon name='add' style={{fontSize: 17, fontWeight:"bold", paddingTop:5, color:"#063359"}}/>
          <Text style={{fontSize: 12, color:"black", fontWeight:"bold"}}>Add new Requirements</Text>
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20
  },
});
