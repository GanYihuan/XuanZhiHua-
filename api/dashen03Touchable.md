# Touchable



## 不可改变的值
```
        // 不可改变的值 es5
        getDefaultProps(){
          age: 18
        }
        // 不可改变的值 es6
        static defaultProps = {
          age: 18
        };
```



## 可以改变的值
```
        // 可以改变的值 es5
        getInitialState(){
          return {
           title: '不透明触摸',
            person: '张三'
          }
        }
        // 可以改变的值 es6
          constructor() {
            super();
            this.state = {
              title: '',
              person: ''
            }
          }
```



## TouchableOpacity
```
          <TouchableOpacity
              activeOpacity={0.5} // 设置当用户触摸的时候，组件的透明度（取值：0 ~ 1）
              onPress={() => this.activeEvent('点击')} // onPress：点击
              onPressIn={() => this.activeEvent('按下')} // onPressIn：按住
              onPressOut={() => this.activeEvent('抬起')} // onPressOut：抬起
              onLongPress={() => this.activeEvent('长按')} // onLongPress：长按
              underlayColor={'#0f0'} // underlayColor：当触摸或者点击控件的时候显示出的颜色
              // disabled={true} // 如果为true,则禁止此组件的一切交互
              // onHideUnderlay：当底层被隐藏的时候调用
              // onShowUnderlay：当底层显示的时候调用
              // onLayout{nativeEvent: {layout: {x, y, width, height}}}：当加载或者布局改变的时候被调用
              // pressRetentionOffset {top: number, left: number, bottom: number, right: number}：在当前视图不能滚动的前提下指定这个属性，可以决定当手指移开多远距离之后，会不再激活按钮。但如果手指再次移回范围内，按钮会被再次激活。只要视图不能滚动，你可以来回多次这样的操作。确保你传入一个常量来减少内存分配
              // hitSlop {top: number, left: number, bottom: number, right: number}：这一属性定义了按钮的外延范围。这一范围也会使pressRetentionOffset（见下文）变得更大。 注意：触摸范围不会超过父视图的边界，也不会影响原先和本组件层叠的视图（保留原先的触摸优先级）
          >
            <View style={styles.innerViewStyle}>
              <Text ref="textNor">常用的事件</Text>
            </View>
          </TouchableOpacity>
```



## 改变状态 getInitialState()
```
        this.setState({
          title: event,
          person: '李四'
        });
```



## 设置ref,拿到View,获取DOM节点
```
        <View ref="topView"></View>
        this.refs.topView;
```