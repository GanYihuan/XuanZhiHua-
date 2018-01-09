import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';
import ImageData from '../json/imgData.json';


let {width} = Dimensions.get('window');


export default class dashen02TextInput extends Component {
  render() {
    return (
        <View style={styles.container}>
          {this._renderImage(0)}
          <TextInput
              style={styles.textInputStyle}
              // value={"设置了Value"} // 文本输入的默认值,搭配JS动态设置
              keyboardType={"number-pad"} // 设置键盘类型
              multiline={false} // 值为真，文本输入可以输入多行
              password={false} // password：如果值为真，文本输入框就成为一个密码区域
              secureTextEntry={false} // 如果值为真，文本输入框就会使输入的文本变模糊，以便于像密码这样敏感的文本保持安全
              placeholder={'UserName'} // placeholder：在文本输入之前提示用户文本框功能，也就是占位文字
              placeholderTextColor={"#f00"} // placeholderTextColor：占位字符串的文本颜色
              editable={true} // editable：如果值为假，文本是不可编辑，默认值为真
              enablesReturnKeyAutomatically={false} // 如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。
              clearTextOnFocus={false} // clearTextOnFocus：如果为true，每次开始输入的时候都会清除文本框的内容
              autoCorrect={false} // autoCorrect：如果为false，会关闭拼写自动修正,默认值是true。
              autoFocus={true} // autoFocus：如果为true，在componentDidMount后会获得焦点。默认值为false。
              // autoCapitalize：控制TextInput是否要自动将特定字符切换为大写
              // none：不自动使用任何东西
              // sentences：每个句子的首字母（默认）
              // words：每一个单词的首字母
              // characters：所有字符
              autoCapitalize={"none"}
              // clearButtonMode：清除按钮出现的时机
              // never：不出现
              // while-editing：编辑的时候出现
              // unless-editing：没有编辑时出现
              // always：总是出现
              clearButtonMode={"always"}
              // returnKeyType：决定返回键的样式
              // default
              // go
              // google
              // join
              // next
              // route
              // search
              // send
              // yahoo
              // done
              // emergency-call
              returnKeyType="go"
              // onChange：当文本框内容变化时调用此回调函数
              // onChange={() => {alert('文本框内容改变')}}
              // onChangeText：当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递
              // onChangeText={(Text) => {alert('文字改变')}}
              // onFocus：当文本框获得焦点的时候调用此回调函数
              // onFocus={() => {alert('文本框获得焦点')}}
              // onBlur：当文本框失去焦点的时候调用此回调函数
              // onBlur={() => {alert('失去焦点')}}
              // onEndEditing：结束编辑时，调用回调函数
              // onEndEditing={() => {alert('结束文本编辑')}}
          />
          <TextInput
              style={styles.textInputStyle}
              placeholder={'Password'}
              placeholderTextColor={"#00f"} // placeholderTextColor：占位字符串的文本颜色
              password={true}
              keyboardType={'default'}
              clearButtonMode={'always'}
              clearButtonMode={"always"}
              secureTextEntry={true}
          />
          <View style={styles.loginBtnStyle}>
            <Text style={{color: '#fff'}}>Login</Text>
          </View>
          <View style={styles.settingStyle}>
            <Text>Can't Login</Text>
            <Text>New User</Text>
          </View>
          <View style={styles.otherLoginStyle}>
            <Text>Other Login: </Text>
            {this._renderImage(1)}
            {this._renderImage(2)}
            {this._renderImage(3)}
          </View>
        </View>
    );
  }

  _renderImage(index) {
    let allImage = [];
    let imgsArr = ImageData.data;
    let imgItem = imgsArr[index];
    let styleType = (index === 0) ? styles.imgheader : styles.imgfooter;

    allImage.push(
        <Image
            key={index}
            style={styleType}
            source={{uri: imgItem.img}}
        />
    );
    return allImage;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 默认为纵向.设置侧轴的对齐方式
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  iconStyle: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 30,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  otherImageStyle: {
    width: 50,
    height: 50,
    marginLeft: 8,
    borderRadius: 25,
  },
  textInputStyle: {
    width: width,
    height: 38,
    marginBottom: 1,
    // 内容居中
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  loginBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    height: 35,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#00f',
  },
  settingStyle: {
    // 设置主轴的方向
    flexDirection: 'row',
    // 主轴的对齐方式
    justifyContent: 'space-between',
    width: width * 0.9,
  },
  otherLoginStyle: {
    // backgroundColor:'red',
    // 设置主轴的方向
    flexDirection: 'row',
    // 设置侧轴的对齐方式
    alignItems: 'center',
    // 绝对定位
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  imgheader: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 30,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  imgfooter: {
    width: 50,
    height: 50,
    marginLeft: 8,
    borderRadius: 25,
  }
});

