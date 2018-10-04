import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default ({ navigation }) => (
  <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
    <View style={ { paddingHorizontal: 10 } }>
      <Icon name="md-menu" size={ 24 } />
    </View>
  </TouchableOpacity>
);
