import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Welcome extends Component {
  render() {
    const {
      navigation: {
        navigate
      }
    } = this.props;

    return (
      <View style={ styles.container }>
        <View style={ styles.main }>
          <TouchableOpacity style={ styles.buttonContainer } onPress={ () => navigate('SignIn') }>
            <Text style={ styles.buttonText }>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.buttonContainer } onPress={ () => navigate('SignUp') }>
            <Text style={ styles.buttonText }>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },
  main: {
    alignSelf: 'stretch'
  },
  buttonContainer: {
    backgroundColor: '#1abc9c',
    paddingVertical: 20,
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});

export default Welcome;
