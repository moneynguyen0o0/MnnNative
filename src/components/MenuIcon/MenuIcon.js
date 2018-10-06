import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default ({ navigation }) => (
  <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
    <View style={styles.container}>
      <Icon name="md-menu" size={ 24 } />
    </View>
  </TouchableOpacity>
);
