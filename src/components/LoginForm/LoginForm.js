import React, { Component } from 'react';
import { func } from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class LoginForm extends Component {
  static propTypes = {
    submit: func.isRequired
  }

  state = {
    user: {
      email: '',
      password: ''
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
        <TextInput style={ styles.input }
          onChange={ this.onChange('email') }
          autoCapitalize="none"
          autoCorrect={ false }
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email'
          placeholderTextColor='rgba(225,225,225,0.7)'
        />
        <TextInput style={ styles.input }
          onChange={ this.onChange('password') }
          returnKeyType="go"
          placeholder='Password'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry
        />
        <TouchableOpacity style={ styles.buttonContainer } onPress={ this.onSubmit }>
          <Text style={ styles.buttonText }>LOGIN</Text>
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
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 15,
    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});

export default LoginForm;
