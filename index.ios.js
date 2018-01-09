import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator, TabBarBottom} from 'react-navigation';

import ImgData from './json/XMGBuy/Img.json';

import LaunchImage from './Component/Main/XMGLaunchImage';
import MainScreen from './Component/Main/XMGMain';
import ShopPage from './Component/Shop/XMGShop'; // 1
import MorePage from './Component/More/XMGMore'; // 2
import MinePage from './Component/Mine/XMGMine'; // 3
import HomePage from './Component/Home/XMGHome'; // 4
import HomeDetailScreen from './Component/Home/XMGHomeDetail';
import ShopCenterDetailScreen from './Component/Home/XMGShopCenterDetail';


class XuanZhiHua extends Component {
  render() {
    return (
        <Navigator/>
    );
  }
}


class TabBarItem extends Component {
  render() {
    return (
        <Image
            style={{tintColor: this.props.tintColor, width: 25, height: 25}}
            source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
        />
    )
  }
}


const Tab = TabNavigator(
    {
      Shop: {
        screen: ShopPage,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: '商家',
          tabBarIcon: ({focused, tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri: ImgData.data[3].img}}
                  selectedImage={{uri: ImgData.data[4].img}}
              />
          )
        })
      },
      More: {
        screen: MorePage,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: '更多',
          tabBarIcon: ({focused, tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri: ImgData.data[7].img}}
                  selectedImage={{uri: ImgData.data[8].img}}
              />
          )
        })
      },
      Mine: {
        screen: MinePage,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: '我的',
          tabBarIcon: ({focused, tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri: ImgData.data[5].img}}
                  selectedImage={{uri: ImgData.data[6].img}}
              />
          )
        })
      },
      Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: '首页',
          tabBarIcon: ({focused, tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri: ImgData.data[1].img}}
                  selectedImage={{uri: ImgData.data[2].img}}
              />
          )
        })
      },
    }, {
      animationEnabled: false, // 切换页面时是否有动画效果
      tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
      swipeEnabled: false, // 是否可以左右滑动切换tab
      backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
      //tabBarComponent: TabBarBottom,
      lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
      initialRouteName: 'Mine', // 设置默认的页面组件
      tabBarOptions: {
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showLabel: true, // 是否显示label，默认开启。
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        upperCaseLabel: false, // 是否使标签大写，默认为true。
        inactiveBackgroundColor: '#E8E5F8', // label和icon的背景色 不活跃状态下（未选中）。
        indicatorStyle: {
          height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
          // TabBar 背景色
          backgroundColor: '#fff'
        },
        labelStyle: {
          fontSize: 10, // 文字大小
        }
      }
    }
);


const Navigator = StackNavigator(
    {
      Home: {
        screen: LaunchImage,
        navigationOptions: {
          header: null
        }
      },
      Main: {
        screen: Tab,
        navigationOptions: {
          header: null
        }
      },
      HomeDetail: {
        screen: HomeDetailScreen,
        navigationOptions: {
          header: null
        }
      },
      ShopCenterDetail: {
        screen: ShopCenterDetailScreen,
        navigationOptions: {
          header: null
        }
      }
    }
);


AppRegistry.registerComponent('XuanZhiHua', () => XuanZhiHua);
