'use strict';

import React, {
  Component
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ListView,
  AsyncStorage,
  Navigator,
  Alert,
  RefreshControl,
  AppState,
  ActivityIndicator,
  Platform
} from 'react-native';

import ProgressBar from 'ProgressBarAndroid';
import Li from './Li';
import Detail from './Detail';
let LISTS_KEY = 'new';
var ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});
let PAGE_SIZE = 6; //每页条数
let pageTotal = 1; //总页数
let page = 1; //当前页码
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: null,
      loaded: false,
      isRefreshing: false,
      isEnd: false,
    };
    this._renderList = this._renderList.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this._reloadLists = this._reloadLists.bind(this);
    this.navHandleChange = this.navHandleChange.bind(this);

  }
  componentDidMount() {
      if (!this.state.loaded) {
        this._loadinitData();
      }
    }
    // 异步加载数据
  async _loadinitData() {
      var tmp = await AsyncStorage.getItem(LISTS_KEY + 'index');
      if (tmp != null) {
        tmp = JSON.parse(tmp);
        if (tmp.lists.length > 2) {
          if (tmp.lists[0].length > 6) {
            tmp.lists.splice(0, tmp.lists.length - 2);
          } else {
            tmp.lists.splice(1, tmp.lists.length - 2);
          }
          AsyncStorage.setItem(LISTS_KEY + "index", JSON.stringify(tmp)).done();
        }
        this.setState({
          datas: tmp,
          loaded: true,
        });
      } else {
        await this.getData('init');
      }
    }
    // 获取数据
  async getData(pos) {
    if (pos == 'refresh') {
      AsyncStorage.removeItem(LISTS_KEY + 'index');
      this.setState({
        datas: null,
        loaded: false,
      })
      page = 1;
    }
    var url = this.props.url;
    var formdata = new FormData();
    formdata.append("columnAlias", this.props.columnAlias);
    formdata.append("pageNum", page);
    formdata.append("pageSize", PAGE_SIZE);
    fetch(url, {
        method: 'POST',
        body: formdata
      })
      .then((response) => response.json())
      .then(
        (responseData) => {
          console.log(responseData)
          if (responseData.success) {
            if (this.state.datas == null) {
              var tmp = {
                lists: [responseData.data],
                pageCount: Math.ceil(responseData.totalCount / PAGE_SIZE),
                nowPage: 1,
              };
            } else {
              var tmp = this.state.datas;
              tmp.lists.push(responseData.data);
              tmp.nowPage = this.state.page;
              tmp.pageCount = Math.ceil(responseData.totalCount / PAGE_SIZE);
            }
            this.setState({
              datas: tmp,
              loaded: true,
            });
            AsyncStorage.setItem(LISTS_KEY + "index", JSON.stringify(tmp)).done();
          } else {
            Alert.alert('暂无最新，请稍等片刻！');
          }
        }
      )
      .done();
  }
  _renderList(data, sectionID, rowID) {
      return (
        <TouchableOpacity activeOpacity={0.4} key={data.id} onPress={()=>this.navHandleChange(data)}>
          <Li data={data} />
        </TouchableOpacity>
      );
    }
    // 进入详情页
  navHandleChange(data) {
    this.props.navigator.push({
      component: Detail,
      id: data.id,
    });
  }
  _reloadLists() {
    this.setState({
      isRefreshing: true
    });
    setTimeout(() => {
      this.getData('refresh');
      this.setState({
        isRefreshing: false
      });
    }, 1000);
  }
  renderFooter() {
      if (Platform.OS === 'ios') {
        if (this.state.isEnd) {
          return (
            <View style={{height:40,alignItems:'center',justifyContent:'center'}}>
            <Text>已经到最底了</Text>
          </View>
          );
        } else {
          return (
            <View style={{height:40,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator color = {'#d43d3d'} />
          </View>
          );
        }

      } else {
        return (
          <View style={{height:40,alignItems:'center',justifyContent:'center'}}>
          <ProgressBar color = {'#d47b83'} styleAttr="Small" />
        </View>
        );
      }
    }
    // 数据加载到底部时候拉取新数据
  onEndReached() {
    // 防止多次重复加载
    let nowPage;
    if (page >= this.state.datas.nowPage) {
      nowPage = page;
    } else {
      nowPage = this.state.datas.nowPage;
    }
    if (nowPage <= this.state.datas.pageCount) {
      nowPage++;
      page = nowPage;
      this.getData('bottom');
    } else {
      this.setState({
        isEnd: true,
      })
    }
  }
  render() {
    if (!this.state.loaded) {
      if (Platform.OS === 'ios') {
        return (
          <View style={{flex:1}}>
              <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator color = {'#d43d3d'} />
              </View>
            </View>
        );
      } else {
        return (
          <View style={{flex:1}}>
              <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <ProgressBar color = {'#d47b83'} />
              </View>
            </View>
        );
      }
    } else {
      return (
        <View style={{flex: 1}} >
            <ListView style={{flex:1,overflow: 'hidden'}}
              initialListSize={20}
              pageSize={10}
              scrollRenderAheadDistance={50}
              removeClippedSubviews={true}
              dataSource={ds.cloneWithRowsAndSections(this.state.datas.lists)} // 渲染的数据聚合
              renderRow={this._renderList}  // 单一条数模板
              minPulldownDistance={30}   // 最新下拉长度
              renderFooter={this.renderFooter.bind(this)}
              onEndReached={this.onEndReached.bind(this)}
              onEndReachedThreshold={100}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={this._reloadLists}
                  tintColor=  "#000"
                  title="正在刷新..."
                />
              }
            />
          </View>
      );
    }
  }
};