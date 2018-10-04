import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
  StyleSheet
} from 'react-native';

import SignupForm from 'components/SignupForm';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  headerContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  formContainer: {
    padding: 20
  },
  title: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.9
  }
});

export default SignUp;
