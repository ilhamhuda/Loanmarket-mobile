import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

type Props = {};
class Home extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <View>
          <Text>Hellooo!!</Text>
          <View style={{ width: 200, height: 900, backgroundColor: 'blue' }} />
        </View>
      </ScrollView>
    );
  }
}

export default Home;