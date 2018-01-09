# dashen01Image


## xcode里面添加图片
> 添加图片
right click ios -> reveal in findle -> ios -> xcode open dashen01Image.xcodeeproj -> 
dashen01Image -> images.xcassets -> drag your images into here

> index.ios.js里面引入数据
import BadgeData from './BadgeData.json';

> BadgeData.json数据书写格式(danjianbao)为照片名字
```
{
  "data": [
    {
      "icon": "danjianbao",
      "title": "单肩包"
    }
  ]
}
```



## 遍历数组,返回一个数据数组
```
renderAllBadge() {
    // 定义数组,装所有的子组件
    let allBadge = [];
    let imgArr = ImageData.data;
    for (let i = 0; i < imgArr.length; i++) {
      // 取出单独的数据对象
      let item = imgArr[i];
      // 直接转入数组
      allBadge.push(
          <View
              // 关键
              key={i}
              style={styles.outViewStyle}
          >
            <Image
                style={styles.imageStyle}
                source={{uri: item.img}}
            />
            <Text style={styles.mainTitleStyle}>{item.title}</Text>
          </View>
      );
    }
    // 返回数组
    return allBadge;
  }
```



## flex布局
> 默认为纵轴,确定主轴的方向为横轴: flexDirection: 'row'
> 换行显示: flexWrap: 'wrap'
> 设置主轴的对齐方式: justifyContent: 'center'
> 侧轴为主轴的相反轴,设置侧轴的对齐方式: alignItems: 'center'
