import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
//import LoginView from './app/dashen01Image';
// Bug! TextInput 太短
//import LoginView from './app/dashen02TextInput';
//import LoginView from './app/dashen03Touchable';
// Bug! Img 不能加入
//import LoginView from './app/dashen05ScrollView';
//import LoginView from './app/dashen07ListView';
// Bug! Img 不能加入! 粘顶效果没有!
import LoginView from './app/dashen08ListView';
// Bug! 只能用IOS
//import LoginView from './app/dashen09JNav';


export default class XuanZhiHua extends Component {
  render() {
    return (
        <LoginView/>
    );
  }
}

AppRegistry.registerComponent('XuanZhiHua', () => XuanZhiHua);