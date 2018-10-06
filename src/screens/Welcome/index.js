import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

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

export default Welcome;
