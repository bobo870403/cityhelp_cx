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
  InteractionManager
} from 'react-native';

import ProgressBar from 'ProgressBarAndroid';
import * as CmsListAction from '../actions/CmsListAction'
import Li from './Li';
import Detail from './Detail';
import ReservationActives from '../modules/home/ReservationActives'
import LoadMoreFooter from '../common/LoadMoreFooter';
import Loading from '../common/Loading';

let PAGE_SIZE = 6; //每页条数
let total = 1; //总数
let nowPage = 1; //当前页码
let isLoading = true;
let isLoadMore = false;
let isNoData = true;
let isRefreshing = false;
let listDatas = [];
let url = null;
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
    url = this.props.url;
    this._renderList = this._renderList.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this._reloadLists = this._reloadLists.bind(this);
    this.navHandleChange = this.navHandleChange.bind(this);
  }
  componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        const {
          dispatch
        } = this.props
        dispatch(CmsListAction.cmsList(url, this.props.columnAlias, nowPage, PAGE_SIZE, isNoData, isLoadMore, isRefreshing, isLoading));
      })
    }
    /**
     * 列表单挑模板
     * @param  {[type]} data      [数据]
     * @param  {[type]} sectionID [description]
     * @param  {[type]} rowID     [description]
     * @return {[type]}           [description]
     */
  _renderList(data, sectionID, rowID) {
      return (
        <TouchableOpacity activeOpacity={0.4} key={data.id} onPress={()=>this.navHandleChange(data)}>
          <Li data={data} type={this.props.sing}/>
        </TouchableOpacity>
      );
    }
    /**
     * 单条进入handle
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
  navHandleChange(data) {
      if (this.props.sing == 'activies') {
        this.props.navigator.push({
          component: ReservationActives,
          activityAlias: data.activityAlias,
        });
      } else {
        this.props.navigator.push({
          component: Detail,
          id: data.id,
        });
      }
    }
    /**
     * 下拉刷新
     * @return null
     */
  _reloadLists() {
      InteractionManager.runAfterInteractions(() => {
        const {
          dispatch
        } = this.props;
        isLoadMore = false;
        isRefreshing = true;
        nowPage = 1;
        dispatch(CmsListAction.cmsList(url, this.props.columnAlias, nowPage, PAGE_SIZE, isNoData, isLoadMore, isRefreshing, isLoading));
      })
    }
    /**
     *  上拉加载
     * @return {[type]} [description]
     */
  onEndReached() {
    InteractionManager.runAfterInteractions(() => {
      const {
        dispatch
      } = this.props;
      isLoadMore = true;
      isLoading = false;
      isRefreshing = false;
      nowPage++;
      dispatch(CmsListAction.cmsList(url, this.props.columnAlias, nowPage, PAGE_SIZE, isNoData, isLoadMore, isRefreshing, isLoading));
    })
  }
  renderFooter() {
    const {
      CmsList
    } = this.props;
    return <LoadMoreFooter title = {(CmsList.isNoData) ? '没有更多数据了' : '正在加载更多……'}
                type = {(CmsList.isNoData) ? 'NoData' : 'HasData'}/>
  }

  _onScroll() {
    if (!isLoadMore) isLoadMore = true;
  }
  render() {
    const {
      CmsList
    } = this.props;
    let CmsListDatas = CmsList.ClassDate;
    if (CmsList.isLoading) {
      return <Loading />
    } else {
      return (
        <View style={{flex: 1}} >
            <ListView style={{flex:1,overflow: 'hidden'}}
              initialListSize={20}
              pageSize={10}
              scrollRenderAheadDistance={50}
              removeClippedSubviews={true}
              dataSource = {
                  this.state.dataSource.cloneWithRows(CmsListDatas)
                } // 渲染的数据聚合
              renderRow={this._renderList}  // 单一条数模板
              minPulldownDistance={30}   // 最新下拉长度
              onScroll={this._onScroll}
              renderFooter={this.renderFooter.bind(this)}
              onEndReached={this.onEndReached.bind(this)}
              onEndReachedThreshold={100}
              refreshControl={
                <RefreshControl
                  refreshing={CmsList.isRefreshing}
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