import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Button, Body, Title, Right } from 'native-base';

export default function App() {
  return (
    <View style={styles.container}>
        <Icon name="navigate" />
      <Text>You have no tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:70
  },
});
