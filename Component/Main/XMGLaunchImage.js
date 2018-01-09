import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';
import ImgData from './../../json/XMGBuy/Img.json';


export default class Launch extends Component {
  render() {
    let item = ImgData.data[0];
    return (
        <Image
            style={styles.launchImageStyle}
            source={{uri: item.img}}
        />
    );
  }

  // 复杂的操作:定时器\网络请求
  componentDidMount(){
    const { navigate } = this.props.navigation;
    setTimeout(()=> {
      navigate("Main");
    }, 1000);
  }
}


const styles = StyleSheet.create({
  launchImageStyle: {
    flex: 1
  }
});

// 输出组件类
//module.exports = Launch;
