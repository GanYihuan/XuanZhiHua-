# TextInput


## 根据不同的传入参数赋予不同的样式
```
...
{this._renderImage(1)}

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
```



## TextInput
```
 <TextInput
  style={styles.textInputStyle}
  // 文本输入的默认值,搭配JS动态设置
  // value="设置了Value"
  // 设置键盘类型
  keyboardType="number-pad"
  // 值为真，文本输入可以输入多行
  multiline={false}
  // password：如果值为真，文本输入框就成为一个密码区域
  password={false}
  // placeholder：在文本输入之前提示用户文本框功能，也就是占位文字
  placeholder={'UserName'}
  // placeholderTextColor：占位字符串的文本颜色
  placeholderTextColor="#f00"
  // autoCapitalize：控制TextInput是否要自动将特定字符切换为大写
  // none：不自动使用任何东西
  // sentences：每个句子的首字母（默认）
  // words：每一个单词的首字母
  // characters：所有字符
  autoCapitalize="none"
  // autoCorrect：如果为false，会关闭拼写自动修正,默认值是true。
  autoCorrect={false}
  // autoFocus：如果为true，在componentDidMount后会获得焦点。默认值为false。
  autoFocus={true}
  // clearButtonMode：清除按钮出现的时机
  // never：不出现
  // while-editing：编辑的时候出现
  // unless-editing：没有编辑时出现
  // always：总是出现
  clearButtonMode="always"
  // clearTextOnFocus：如果为true，每次开始输入的时候都会清除文本框的内容
  clearTextOnFocus={true}
  // editable：如果值为假，文本是不可编辑，默认值为真
  editable={true}
  // enablesReturnKeyAutomatically：如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。
  enablesReturnKeyAutomatically={false}
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
  // secureTextEntry：如果值为真，文本输入框就会使输入的文本变模糊，以便于像密码这样敏感的文本保持安全
  secureTextEntry={false}
  // onChange：当文本框内容变化时调用此回调函数
  onChange={() => {alert('文本框内容改变')}}
  // onChangeText：当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递
  // onChangeText={(Text) => {alert('文字改变')}}
  // onFocus：当文本框获得焦点的时候调用此回调函数
  // onFocus={() => {alert('文本框获得焦点')}}
  // onBlur：当文本框失去焦点的时候调用此回调函数
  // onBlur={() => {alert('失去焦点')}}
  // onEndEditing：结束编辑时，调用回调函数
  // onEndEditing={() => {alert('结束文本编辑')}}
/>
```


