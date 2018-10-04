import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import { actions as sessionActions } from 'store/reducers/session';
import LoginForm from 'components/LoginForm';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50'
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end'
  },
  title: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.9
  }
});

const mapStateToProps = ({ session }) => ({ session });

export default connect(mapStateToProps, {
  login: sessionActions.requestLogin
})(SignIn);
