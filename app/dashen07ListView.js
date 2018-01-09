import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ListView,
    TouchableOpacity,
    AlertIOS,
    Alert,
    Platform,
} from 'react-native';
import shareData from '../json/shareData.json';


let {width} = Dimensions.get('window');
let cols = 3;
let cellWH = 100;
let vMargin = (width - cellWH * cols) / (cols + 1);
let hMargin = 25;


export default class dashen07ListView extends Component {
  constructor() {
    super();
    this.state = {
      // 初始化数据源(rowHasChanged是优化的一种手段，只有当r1 !== r2的时候才会重新渲染)
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows(shareData.data)

      // .cloneWithRows(shareData.data), 替换下面的写法

      //return{
      //  // 给dataSource传递一组 数组
      //  dataSource: ds.cloneWithRows(['内容0', '内容1', '内容2', '内容3', '内容4', '内容5'])
      //}
    }
  }

  render() {
    return (
        <ListView
            // dataSource：设置ListView的数据源
            dataSource={this.state.dataSource}
            // 根据数据源创建一个Item
            contentContainerStyle={styles.listViewStyle}
            // ScrollView 全部属性
            // initialListSize：指定在组件刚挂载的时候渲染多少行数据。用这个属性来确保首屏显示合适数量的数据，而不是花费太多帧逐步显示出来
            // onChangeVisibleRows：（(visibleRows, changedRows) => void）当可见的行的集合变化的时候调用此回调函数。visibleRows 以 { sectionID: { rowID: true }}的格式包含了所有可见行，而changedRows 以{ sectionID: { rowID: true | false }}的格式包含了所有刚刚改变了可见性的行，其中如果值为true表示一个行变得可见，而为false表示行刚刚离开可视区域而变得不可见
            // onEndReached：当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用。原生的滚动事件会被作为参数传递。译注：当第一次渲染时，如果数据不足一屏（比如初始值是空的），这个事件也会被触发
            // onEndReachedThreshold：调用onEndReached之前的临界值，单位是像素
            // pageSize：每次事件循环（每帧）渲染的行数
            // removeClippedSubviews：用于提升大列表的滚动性能。需要给行容器添加样式overflow:'hidden'。（Android已默认添加此样式）此属性默认开启
            // renderFooter：（() => renderable）页头与页脚会在每次渲染过程中都重新渲染（如果提供了这些属性）。如果它们重绘的性能开销很大，把他们包装到一个StaticContainer或者其它恰当的结构中。页脚会永远在列表的最底部，而页头会在最顶部
            // renderHeader： 在每一次渲染过程中Footer(尾)该会一直在列表的底部，header(头)该会一直在列表的头部
            // renderRow：【(rowData, sectionID, rowID, highlightRow) => renderable
            // 从数据源(Data source)中接受一条数据，以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器
            // 如果某一行正在被高亮（通过调用highlightRow函数），ListView会得到相应的通知。当一行被高亮时，其两侧的分割线会被隐藏。行的高亮状态可以通过调用highlightRow(null)来重置
            // 注：这里的this.renderRow是隐式写法，系统会根据函数的需要，将对应的参数传递过去（共有4个参数：rowData, sectionID, rowID, highlightRow）
            renderRow={this.renderRow}
            // renderScrollComponent：【(props) => renderable】指定一个函数，在其中返回一个可以滚动的组件。ListView将会在该组件内部进行渲染。默认情况下会返回一个包含指定属性的ScrollView
            // renderSectionHeader：【(sectionData, sectionID) => renderable】
            // 如果提供了此函数，会为每个小节(section)渲染一个粘性的标题。
            // 粘性是指当它刚出现时，会处在对应小节的内容顶部；继续下滑当它到达屏幕顶端的时候，它会停留在屏幕顶端，一直到对应的位置被下一个小节的标题占据为止
            // renderSeparator：【(sectionID, rowID, adjacentRowHighlighted) => renderable】
            // 如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来
            // scrollRenderAheadDistance：当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行
            // stickyHeaderIndices（iOS）：一个子视图下标的数组，用于决定哪些成员会在滚动之后固定在屏幕顶端。举个例子，传递stickyHeaderIndices={[0]}会让第一个成员固定在滚动视图顶端。这个属性不能和horizontal={true}一起使用
        />
    );
  }

  // 返回一个Item
  // rowData:数据, sectionID:分组ID, rowID:行ID, highlightRow:是否高亮选中行的信息
  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              if (Platform.OS === 'ios') {
                // stuff for ios
                AlertIOS.alert('GanYihuan')
              } else {
                // stuff for android
                Alert.alert('GanYihuan')
              }
            }}
        >
          <View style={styles.innerViewStyle}>
            <Image
                style={styles.iconStyle}
                source={{uri: rowData.icon}}
            />
            <Text>{rowData.title}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  listViewStyle: {
    // 改变主轴的方向
    flexDirection: 'row',
    // 多行显示
    flexWrap: 'wrap',
  },
  iconStyle: {
    width: 80,
    height: 80,
  },
  innerViewStyle: {
    alignItems: 'center',
    width: cellWH,
    height: cellWH,
    marginLeft: vMargin,
    marginTop: hMargin,
  }
});


