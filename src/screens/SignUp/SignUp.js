import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import SignupForm from 'components/SignupForm';

import styles from './styles';

class SignUp extends Component {
  onSubmit = user => {
    Alert.alert('OK! FINE!');
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={ styles.container }>
        <View style={ styles.headerContainer }>
          <Text style={ styles.title }>SIGN UP</Text>
        </View>
        <View style={ styles.formContainer }>
          <SignupForm submit={ this.onSubmit } />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUp;
