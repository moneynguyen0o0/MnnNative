import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

export default (loadingProp = 'isWaiting') => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    static displayName = 'LoadingHOC'

    render() {
      return this.props[loadingProp] ? <ActivityIndicator size="large" color="0000ff" /> : <WrappedComponent { ...this.props } />;
    }
  };
};
