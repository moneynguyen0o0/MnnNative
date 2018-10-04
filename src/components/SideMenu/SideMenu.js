import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';
import { DrawerItems } from 'react-navigation';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#0033FF',
    paddingVertical: 28,
    paddingLeft: 17,
    paddingTop: StatusBar.currentHeight + 10,
    alignItems: 'center',
  },
  header: {
    color: '#FFF',
    paddingLeft: 9,
    fontSize: 16
  }
});

export default SideMenu;
