'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
const {
  height,
  width,

} = Dimensions.get('window');
import NavigationBar from 'react-native-navbar';
import NavBar from '../../component/navBar'
import pxToDp from '../../util/pxToDp'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons';

class newList extends Component {
  rightFun() {

  }
  gotoNew() {
    this.props.navigator.pop()
  }
  render() {
    const titleConfig = {
      title: '生活服务',
      tintColor: '#666',
    };

    return (
      <View style={styles.container}>
        <NavBar style={styles.nav} title={'生活服务'} isShowLeftButton={1} leftFun={()=>this.gotoNew()}/>
        <ScrollView style={styles.sroll}
                  automaticallyAdjustContentInsets={false}>
                    <View style={styles.head}>
                      <Icon name="ios-checkmark-circle-outline" size={pxToDp(54)} color="red" style={{backgroundColor:'transparent'}}/>
            <Text style={{marginLeft:pxToDp(10),color:'red',fontSize:pxToDp(38)}}>综合服务</Text>
                    </View>

                    <View style={styles.sing}>
            <View style={[styles.singRow,{alignItems: 'center'}]}>
              <Icon name="md-list-box" size={pxToDp(84)} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
              <Text style={{marginTop:pxToDp(10),color:'#fd7e2d'}}>新闻资讯</Text>
            </View>
            <View style={styles.singRow}>
              <TouchableOpacity onPress={()=>this.gotoNew()} style={styles.singTextView}>
                <Text style={{color:'#666'}}>新闻资讯</Text>
              </TouchableOpacity>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>新闻资讯</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>新闻资讯</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>新闻资讯</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>新闻资讯</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>新闻资讯</Text>
              </View>
            </View>
          </View>
          <View style={styles.sing}>
            <View style={[styles.singRow,{alignItems: 'center'}]}>
              <Icon name="md-pizza" size={pxToDp(84)} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
              <Text style={{marginTop:pxToDp(10),color:'#fd7e2d'}}>饮食男女</Text>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>饮食男女</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>饮食男女</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>饮食男女</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>饮食男女</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>饮食男女</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>饮食男女</Text>
              </View>
            </View>
          </View>
          <View style={styles.sing}>
            <View style={[styles.singRow,{alignItems: 'center'}]}>
              <Icon name="md-man" size={pxToDp(84)} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
              <Text style={{marginTop:pxToDp(10),color:'#fd7e2d'}}>社保查询</Text>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>社保查询</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>社保查询</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>社保查询</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>社保查询</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>社保查询</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>社保查询</Text>
              </View>
            </View>
          </View>
          <View style={styles.sing}>
            <View style={[styles.singRow,{alignItems: 'center'}]}>
              <Icon name="md-flag" size={pxToDp(84)} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
              <Text style={{marginTop:pxToDp(10),color:'#fd7e2d'}}>同城活动</Text>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>同城活动</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>同城活动</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>同城活动</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>同城活动</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>同城活动</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>同城活动</Text>
              </View>
            </View>
          </View>
          <View style={styles.sing}>
            <View style={[styles.singRow,{alignItems: 'center'}]}>
              <Icon name="md-book" size={pxToDp(84)} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
              <Text style={{marginTop:pxToDp(10),color:'#fd7e2d'}}>同城活动</Text>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>亲子教育</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>亲子教育</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>亲子教育</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>亲子教育</Text>
              </View>
            </View>
            <View style={styles.singRow}>
              <View style={styles.singTextView}>
                <Text style={{color:'#666'}}>亲子教育</Text>
              </View>
              <View style={[styles.singTextView,{marginTop:1,borderTopColor:'rgba(0,0,0,0.1)',borderTopWidth:1}]}>
                <Text style={{color:'#666'}}>亲子教育</Text>
              </View>
            </View>
          </View>
        </ScrollView>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  head: {
    height: pxToDp(80),
    backgroundColor: '#fff',
    marginLeft: pxToDp(20),
    marginRight: pxToDp(20),
    marginTop: pxToDp(30),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sroll: {
    // marginBottom: pxToDp(100)
  },
  sing: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: pxToDp(190),
    marginLeft: pxToDp(20),
    marginRight: pxToDp(20),
    flexDirection: 'row',
    paddingLeft: 1,
    marginTop: pxToDp(30)
      // paddingRight: 1,
  },
  singRow: {
    flex: 1,
    backgroundColor: '#fff',
    // marginLeft: 1,
    marginBottom: 1,
    marginRight: 1,
    marginTop: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  singTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  }
});


export default newList;