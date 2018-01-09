
## 吸顶效果
```
<ScrollView
    style={styles.scrollViewStyle}
    // 吸顶效果(3)
    contentInset={{top: -200}}  // 滚动往上走了200
    contentOffset={{y: 200}}  // 初始滚动坐标
>
    <View style={styles.container}>
      <View style={styles.topViewStyle}></View>
    </View>
</ScrollView>

  container: {
    // 吸顶效果(1)
    height: Platform.OS === 'ios' ? 400 : 200,
    backgroundColor: 'rgba(255,96,0,1.0)'
  },
  topViewStyle: {
    flexDirection: 'row',
    // 设置侧轴的对齐方式
    alignItems: 'center',
    // 设置主轴的对齐方式
    justifyContent: 'space-around',
    // 吸顶效果(2)
    marginTop: Platform.OS === 'ios' ? 280 : 80
  },
```


## 数据放入滚动栏里
```
    <ScrollView
      horizontal={true} // 水平排列
      pagingEnabled={true}  // 自动分页
      showsHorizontalScrollIndicator={false}  // 隐藏水平滚动条
      onMomentumScrollEnd={this.onScrollAnimationEnd.bind(this)}  // 一帧滚动结束callback,(e):ScrollView
    ></ScrollView>
    
  // 当一帧滚动结束的时候调用
  onScrollAnimationEnd(e) {
    // 求出当前的页码  e.nativeEvent.contentOffset.x : 滑动的路径长度
    let offsetX = e.nativeEvent.contentOffset.x;
    let currentPage = Math.floor(offsetX / width);
    // 更新状态机
    this.setState({
      activePage: currentPage
    });
  }
```



