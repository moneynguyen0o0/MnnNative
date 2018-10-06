import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';

import { actions as sessionActions } from '../../store/reducers/session';
import LoginForm from '../../components/LoginForm';

import styles from './styles';

class SignIn extends Component {
  static propTypes = {
    session: object.isRequired,
    login: func.isRequired
  }

  onSubmit = user => {
    const { login } = this.props;

    login(user, () => {
      this.props.navigation.navigate('App');
    });
  }

  render() {
    const {
      session: {
        isWaiting,
        error
      }
    } = this.props;

    const { message, errors } = error || {};

    return (
      <KeyboardAvoidingView behavior="padding" style={ styles.container }>
        <View style={ styles.headerContainer }>
          <Text style={ styles.title }>LOGIN</Text>
        </View>
        <View style={ styles.errorContainer }>
          { errors ? errors.map((err, index) => <Text key={ index }>{err.messages}</Text>) : <Text>{message}</Text> }
        </View>
        {
          isWaiting ? <View style={ styles.loadingContainer }>
            <ActivityIndicator size="large" color="0000ff" />
          </View> : <View style={ styles.formContainer }>
            <LoginForm submit={ this.onSubmit } />
          </View>
        }
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = ({ session }) => ({ session });

export default connect(mapStateToProps, {
  login: sessionActions.requestLogin
})(SignIn);
