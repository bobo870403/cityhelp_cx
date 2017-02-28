'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  SegmentedControlIOS,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
const {
  height,
  width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

import FinishHandleInfo from './finishFlowInfo';
class myFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this._onChange = this._onChange.bind(this);
  }
  _onChange(event) {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
  }
  _back() {
    this.props.navigator.pop();
  }
  _renderContent() {
    var renderView;
    if (this.state.selectedIndex == 0) {
      renderView = <NowHandle/>
    } else if (this.state.selectedIndex == 1) {
      renderView = <FinishHandle navigator={this.props.navigator}/>
    } else if (this.state.selectedIndex == 2) {
      // renderView = <Combination />
    } else if (this.state.selectedIndex == 3) {
      // renderView = <Combination />
    }
    return (
      <View style={{flex:1}}>
		          {renderView}
		  </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar style={styles.nav} title={'我的流程'} isShowLeftButton={1} leftFun={()=>this._back()}/>
        <View style={styles.segmentedControl}>
              <SegmentedControlIOS  onChange={this._onChange} tintColor="#fd7e2d" values={['正在办理', '完结事件']} selectedIndex={0}/>
        </View>
        <ScrollView style={{flex:1}}>
          	{this._renderContent()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  segmentedControl: {
    backgroundColor: '#fff',
    paddingLeft: pxToDp(30),
    paddingRight: pxToDp(30),
    paddingTop: pxToDp(40),
    paddingBottom: pxToDp(40)
  },
  li: {
    backgroundColor: '#fff',
    marginTop: 1,
    paddingTop: pxToDp(30),
    paddingBottom: pxToDp(30),
    paddingLeft: pxToDp(20),
    flexDirection: 'row'
  },
  fontColor: {
    color: '#666'
  },
  btn: {
    width: pxToDp(155),
    height: pxToDp(57),
    backgroundColor: '#fd7e2d',
    borderRadius: pxToDp(10),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default myFlow;
class NowHandle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.li}>
          <View style={{flex:2.5}}>
                <Text style={styles.fontColor}>事件：2016年1月12日提交教师资格认定</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:pxToDp(20)}}>
                  <Icon name="ios-shuffle" size={30} color="#666"/>
                  <Text style={[styles.fontColor,{marginLeft:pxToDp(25),marginTop:pxToDp(-5)}]}>进度状态：待审批</Text>
                </View>
          </View>
        </View>
        <View style={styles.li}>
          <View style={{flex:2.5}}>
                <Text style={styles.fontColor}>事件：2016年1月12日提交教师资格认定</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:pxToDp(20)}}>
                  <Icon name="ios-shuffle" size={30} color="#fd7e2d"/>
                  <Text style={[styles.fontColor,{color:'#fd7e2d',marginLeft:pxToDp(25),marginTop:pxToDp(-5)}]}>进度状态：退回(原因：提交照片太模糊)</Text>
                </View>
                <View style={[styles.btn,{width:pxToDp(400)}]}>
                    <Text style={{color:'#fff'}}>点击可以补充或更改资料</Text>
                </View>
          </View>
        </View>

      </View>
    );
  }
}
class FinishHandle extends Component {
  _gotoInfo() {
    this.props.navigator.push({
      component: FinishHandleInfo,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.li}>
          <View style={{flex:2.5}}>
                <Text style={styles.fontColor}>事件：2016年1月12日提交教师资格认定</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:pxToDp(20)}}>
                  <Icon name="md-clock" size={20} color="#666"/>
                  <Text style={[styles.fontColor,{marginLeft:pxToDp(5)}]}>完成日期：2016年1月15日</Text>
                </View>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>this._gotoInfo()} style={styles.btn}>
              <Text style={{color:'#fff'}}>点击查看</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.li}>
          <View style={{flex:2.5}}>
                <Text style={styles.fontColor}>事件：2016年1月12日提交教师资格认定</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:pxToDp(20)}}>
                  <Icon name="md-clock" size={20} color="#666"/>
                  <Text style={[styles.fontColor,{marginLeft:pxToDp(5)}]}>完成日期：2016年1月15日</Text>
                </View>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.btn}>
              <Text style={{color:'#fff'}}>点击查看</Text>
            </View>
          </View>
        </View>
        <View style={styles.li}>
          <View style={{flex:2.5}}>
                <Text style={styles.fontColor}>事件：2016年1月12日提交教师资格认定</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:pxToDp(20)}}>
                  <Icon name="md-clock" size={20} color="#666"/>
                  <Text style={[styles.fontColor,{marginLeft:pxToDp(5)}]}>完成日期：2016年1月15日</Text>
                </View>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.btn}>
              <Text style={{color:'#fff'}}>点击查看</Text>
            </View>
          </View>
        </View>
        <View style={styles.li}>
          <View style={{flex:2.5}}>
                <Text style={styles.fontColor}>事件：2016年1月12日提交教师资格认定</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:pxToDp(20)}}>
                  <Icon name="md-clock" size={20} color="#666"/>
                  <Text style={[styles.fontColor,{marginLeft:pxToDp(5)}]}>完成日期：2016年1月15日</Text>
                </View>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.btn}>
              <Text style={{color:'#fff'}}>点击查看</Text>
            </View>
          </View>
        </View>
        <View style={styles.li}>
          <View style={{flex:2.5}}>
                <Text style={styles.fontColor}>事件：2016年1月12日提交教师资格认定</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:pxToDp(20)}}>
                  <Icon name="md-clock" size={20} color="#666"/>
                  <Text style={[styles.fontColor,{marginLeft:pxToDp(5)}]}>完成日期：2016年1月15日</Text>
                </View>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.btn}>
              <Text style={{color:'#fff'}}>点击查看</Text>
            </View>
          </View>
        </View>
        <View style={styles.li}>
          <View style={{flex:2.5}}>
                <Text style={styles.fontColor}>事件：2016年1月12日提交教师资格认定</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:pxToDp(20)}}>
                  <Icon name="md-clock" size={20} color="#666"/>
                  <Text style={[styles.fontColor,{marginLeft:pxToDp(5)}]}>完成日期：2016年1月15日</Text>
                </View>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.btn}>
              <Text style={{color:'#fff'}}>点击查看</Text>
            </View>
          </View>
        </View>
        <View style={styles.li}>
          <View style={{flex:2.5}}>
                <Text style={styles.fontColor}>事件：2016年1月12日提交教师资格认定</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:pxToDp(20)}}>
                  <Icon name="md-clock" size={20} color="#666"/>
                  <Text style={[styles.fontColor,{marginLeft:pxToDp(5)}]}>完成日期：2016年1月15日</Text>
                </View>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.btn}>
              <Text style={{color:'#fff'}}>点击查看</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
