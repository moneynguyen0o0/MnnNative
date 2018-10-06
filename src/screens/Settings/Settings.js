import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Button
} from 'react-native';

import { actions as sessionActions } from '../../store/reducers/session';

import styles from './styles';

class Settings extends Component {
  static propTypes = {
    logout: func.isRequired
  }

  signOut = () => {
    const {
      navigation: {
        navigate
      },
      logout
    } = this.props;

    logout(() => navigate('Auth'));
  }

  render() {
    return (
      <View style={ styles.container }>
        <Button title="Sign Out" onPress={ this.signOut } />
      </View>
    );
  }
}

export default connect(null, {
  logout: sessionActions.requestLogout
})(Settings);
