import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    // 创建一个原生的WebView，可以用于访问一个网页。
    WebView,
} from 'react-native';


export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://www.baidu.com/"
    }
  }

  render() {
    return (
        <View style={styles.container}>
          {this.renderNavBar()}
          <WebView
              // source 在WebView中载入一段静态的html代码或是一个url（还可以附带一些header选项）。
              source={{uri: this.state.url}}  // change url
              // (ios) 指定HTML5视频是在网页当前位置播放还是使用原生的全屏播放器播放。要让视频在网页中播放，不光要将这个属性设为true，HTML中的视频元素本身也需要包含webkit-playsinline属性。
              automaticallyAdjustContentInsets={false}
              // 仅限Android平台。iOS平台JavaScript是默认开启的。
              javaScriptEnabled={true}
              // 仅限Android平台。指定是否开启DOM本地存储。
              domStorageEnabled={true}
              // 指定一个浮点数，用于设置在用户停止触摸之后，此视图应以多快的速度停止滚动。也可以指定预设的字符串值，如"normal"和"fast"
              decelerationRate="normal"
              // 强制WebView在第一次加载时先显示loading视图。默认为true。
              startInLoadingState={true}
              // scalesPageToFit bool 设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例。
              // renderLoading function 设置一个函数，返回一个加载指示器。
              // renderError function 设置一个函数，返回一个视图用于显示错误。
              // onLoadStart function 加载开始时调用。
              // onLoadEnd function 加载结束时（无论成功或失败）调用。
              // onLoad function 加载成功时调用。
              // onError function 加载失败时调用。
              // mediaPlaybackRequiresUserAction bool 设置页面中的HTML5音视频是否需要在用户点击后再开始播放。默认值为true.
              // injectedJavaScript string 设置在网页加载之前注入的一段JS代码。
          />
        </View>
    );
  }

  // 导航栏
  renderNavBar() {
    return (
        <View style={styles.navOutViewStyle}>
          <TouchableOpacity style={styles.leftViewStyle} onPress={()=>{this.popTopHome()}}>
            <Image style={styles.navImageStyle} source={{uri: 'icon_shop_local'}}/>
          </TouchableOpacity>
          <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>商家</Text>
          <TouchableOpacity style={styles.rightViewStyle} onPress={()=>{alert('点了!')}}>
            <Image style={styles.navImageStyle} source={{uri: 'icon_shop_search'}}/>
          </TouchableOpacity>
        </View>
    )
  }

  popTopHome() {
    const {navigate} = this.props.navigation;
    navigate("Home");
  }
}


const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  navImageStyle: {
    width: Platform.OS === 'ios' ? 28 : 24,
    height: Platform.OS === 'ios' ? 28 : 24
  },
  leftViewStyle: {
    position: 'absolute',
    left: 10,
    bottom: Platform.OS === 'ios' ? 15 : 13
  },
  rightViewStyle: {
    // 绝对定位
    position: 'absolute',
    right: 10,
    bottom: Platform.OS === 'ios' ? 15 : 13
  },
  navOutViewStyle: {
    height: Platform.OS === 'ios' ? 64 : 44,
    backgroundColor: 'rgba(255,96,0,1.0)',
    // 设置主轴的方向
    flexDirection: 'row',
    // 垂直居中 ---> 设置侧轴的对齐方式
    alignItems: 'center',
    // 主轴方向居中
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  }
});


// 输出组件类
//module.exports = Shop;
