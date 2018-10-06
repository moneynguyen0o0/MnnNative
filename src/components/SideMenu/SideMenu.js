import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { DrawerItems } from 'react-navigation';

import styles from './styles';

const LOGO_URL = 'https://enotif.herokuapp.com/assets/3vfPeAD.png';

class SideMenu extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity>
            <View style={ styles.container }>
              <Image
                source={ {
                  uri: LOGO_URL,
                  width: 40,
                  height: 40,
                } }
              />
              <Text style={ styles.header }>
                Side Menu
              </Text>
            </View>
          </TouchableOpacity>
          <DrawerItems { ...this.props } />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SideMenu;
