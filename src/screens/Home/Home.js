import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component {
  render() {
    return (
      <Container style={ styles.container }>
        <Text style={ styles.welcome }>Welcome to React Native!</Text>
        <Text style={ styles.instructions }>To get started, edit App.js</Text>
        <Text style={ styles.instructions }>{instructions}</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
});
