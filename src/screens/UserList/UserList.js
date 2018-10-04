import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { object, array, bool, func } from 'prop-types';
import { connect } from 'react-redux';

import { actions as userActions, selectors as userSelectors } from '../../store/reducers/user';
import withLoading from '../../hoc/withLoading';

class UserList extends Component {
  static propTypes = {
    requestUsers: func.isRequired,
    session: object,
    users: array,
    error: object,
    isWaiting: bool
  }

  componentDidMount() {
    const {
      session: {
        authenticated,
        data: auth
      },
      users,
      requestUsers
    } = this.props;

    if (!users.length && authenticated) {
      requestUsers(auth);
    }
  }

  render() {
    const { users } = this.props;

    return (
      <View style={ styles.container }>
        { users.map((user, index) => <Text key={ index }>{user.fullname}</Text>) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const mapStateToProps = state => {
  const {
    users: {
      error, isWaiting
    },
    session
  } = state;

  return {
    users: userSelectors.getFilteredUsers(state),
    session,
    error,
    isWaiting
  };
};

export default connect(mapStateToProps, {
  requestUsers: userActions.requestUsers
})(withLoading()(UserList));
