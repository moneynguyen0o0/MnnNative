import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';

import { actions as sessionActions } from 'store/reducers/session';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(null, {
  logout: sessionActions.requestLogout
})(Settings);
