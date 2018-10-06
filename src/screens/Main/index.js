import { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import { isUserAuthenticated } from '../../utils/auth';

class Main extends Component {
  static propTypes = {
    session: object.isRequired
  }

  constructor(props) {
    super(props);

    this.loadApp();
  }

  loadApp = () => {
    const {
      session: {
        data: auth
      }
    } = this.props;

    let screen = 'Auth';

    if(isUserAuthenticated(auth)) {
      screen = 'App';
    }

    this.props.navigation.navigate(screen);
  }

  render() {
    return null;
  }
}

export default connect(({ session }) => ({ session }))(Main);
