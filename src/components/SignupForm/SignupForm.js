import React, { Component } from 'react';
import { func } from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

class SignupForm extends Component {
  static propTypes = {
    submit: func.isRequired
  }

  state = {
    user: {
      email: '',
      password: '',
      fullname: ''
    }
  }

  onSubmit = () => {
    const { submit } = this.props;
    const { user } = this.state;

    submit(user);
  }

  onChange = name => event => {
    const { text: value } = event.nativeEvent;
    const { user } = this.state;

    user[name] = value;

    this.setState({ user });
  }

  render() {
    return (
      <View style={ styles.container }>
        <StatusBar barStyle="light-content" />
        <TextInput style={ styles.input }
          onChange={ this.onChange('fullname') }
          underlineColorAndroid="transparent"
          autoCorrect={ false }
          returnKeyType="next"
          placeholder='Full name'
          placeholderTextColor='rgba(225,225,225,0.7)'
        />
        <TextInput style={ styles.input }
          onChange={ this.onChange('email') }
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={ false }
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email'
          placeholderTextColor='rgba(225,225,225,0.7)'
        />
        <TextInput style={ styles.input }
          onChange={ this.onChange('password') }
          underlineColorAndroid="transparent"
          returnKeyType="go"
          placeholder='Password'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry
        />
        <TouchableOpacity style={ styles.buttonContainer } onPress={ this.onSubmit }>
          <Text style={ styles.buttonText }>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch'
  },
  input: {
    marginBottom: 10,
    height: 50,
    color: '#fff',
    borderBottomColor: '#3498db',
    borderBottomWidth: 1
  },
  buttonContainer: {
    marginTop: 40,
    backgroundColor: '#2980b6',
    paddingVertical: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});

export default SignupForm;
