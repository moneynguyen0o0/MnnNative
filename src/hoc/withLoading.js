import React, { Component } from 'react';
import Loading from '../components/Loading';

export default (loadingProp = 'isWaiting') => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    static displayName = 'LoadingHOC'

    render() {
      return this.props[loadingProp] ? <Loading /> : <WrappedComponent { ...this.props } />;
    }
  };
};
