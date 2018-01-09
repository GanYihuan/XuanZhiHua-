import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import LoginView from './app/dashen01Image';
//import LoginView from './app/dashen02TextInput';
//import LoginView from './app/dashen03Touchable';
//import LoginView from './app/dashen05ScrollView';
//import LoginView from './app/dashen07ListView';
//import LoginView from './app/dashen08ListView';
import LoginView from './app/dashen09JNav';


export default class XuanZhiHua extends Component {
  render() {
    return (
        <LoginView/>
    );
  }
}

AppRegistry.registerComponent('XuanZhiHua', () => XuanZhiHua);