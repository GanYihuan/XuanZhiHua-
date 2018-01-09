# ListView九宫格布局



## ListView
```
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows(shareData.data)
      // shareData.data => Array
    }
  }
```
```
 <ListView
    dataSource={this.state.dataSource}
    renderRow={this.renderRow}
    contentContainerStyle={styles.listViewStyle}
 />
```
```
// rowData:数据, sectionID:分组ID, rowID:行ID, highlightRow:是否高亮选中行的信息
  renderRow(rowData, sectionID, rowID, highlightRow) {}
```



## AlertIOS
```
AlertIOS.alert('GanYihuan')
```



## styles
```
  listViewStyle: {
    // 改变主轴的方向
    flexDirection: 'row',
    // 多行显示
    flexWrap: 'wrap',
  },
```