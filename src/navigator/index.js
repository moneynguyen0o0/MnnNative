import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import {
  MainScreen,
  WelcomeScreen,
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  UserListScreen,
  UserAddScreen,
  SettingsScreen
} from 'screens';

import {
  MenuIcon,
  SideMenu
} from 'components';

const HomeTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: () => (
        <Icon name="md-home" size={ 24 } />
      )
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'SETTINGS',
      tabBarIcon: () => (
        <Icon name="md-settings" size={ 24 } />
      )
    }
  }
});

const HomeStackNavigator = createStackNavigator({
  HomeTabNavigator: {
    screen: HomeTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Stack',
      headerLeft: (
        <MenuIcon navigation={ navigation } />
      )
    })
  }
});

const UserTabNavigator = createBottomTabNavigator({
  UserListScreen: {
    screen: UserListScreen,
    navigationOptions: {
      tabBarLabel: 'LIST',
      tabBarIcon: () => (
        <Icon name="md-list" size={ 24 } />
      )
    }
  },
  UserAddScreen: {
    screen: UserAddScreen,
    navigationOptions: {
      tabBarLabel: 'ADD',
      tabBarIcon: () => (
        <Icon name="md-create" size={ 24 } />
      )
    }
  }
});

const UserStackNavigator = createStackNavigator({
  UserTabNavigator: {
    screen: UserTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'User Stack',
      headerLeft: (
        <MenuIcon navigation={ navigation } />
      )
    })
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStackNavigator,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="md-home" size={ 24 } style={ {color: tintColor} } />
      )
    }
  },
  User: {
    screen: UserStackNavigator,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="md-list" size={ 24 } style={ {color: tintColor} } />
      )
    }
  }
}, {
  contentComponent: SideMenu,
  contentOptions: {
    activeTintColor: '#e91e63'
  }
});

const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

export default createSwitchNavigator({
  Main: MainScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});
