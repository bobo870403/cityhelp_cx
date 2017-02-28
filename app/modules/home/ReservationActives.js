


import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from '../../component/navBar'
import pxToDp from '../../util/pxToDp'

var ProgressBar = require('ProgressBarAndroid');

import React, {
	Component
} from 'react';

import {
  WebView,

  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  PixelRatio,
  TextInput,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  InteractionManager,
  BackAndroid,
} from 'react-native';

var {
  height,
  width
} = Dimensions.get('window');
var Global = require('../../component/Global')
import HTTPUtil from '../../util/HTTPUtil'
import ReservationInfo from './ReservationInfo'
import Login from '../users/login.js'

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>内容页面</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: arial, sans-serif;
        background: #fff;
      }
      img {
        width:250px；
        height:200px;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>`;

class ReservationActives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: '',
      isOver: this.props.route.isOver,
      buttonColor: '#fff',
      webHeight: 100,
			html:null,
    }
    this.onNavigationStateChange=this.onNavigationStateChange.bind(this);
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      if (this.state.isOver == 0) {
        this.setState({
          buttonColor: '#eeeeee'
        });
      } else {
        this.setState({
          buttonColor: '#5172bc'
        });
      }
      this.fetchData();
    });
  }
  fetchData(){
		// console.log(this.props.route.activityAlias)
    let url = Global.hostip + Global.findActivity;
		let formdata={'activityAlias':this.props.route.activityAlias}
		HTTPUtil.get(url,formdata).then((json) => {
			console.log(json)
			//处理 请求success
			if (json.success) {
				this.setState({
					data:json.data,
					loading:false,
					html:HTML+json.data.activityDescription+"</body></html>"
				})
			} else {
				//处理自定义异常
				console.warn('异常 ');
				this.doException(json);
			}
		}, (json) => {
			//TODO 处理请求fail
			console.warn('网络失败',json);
		})
  }
  _onPress() {
		// 读取
	  Global.storage.load({
	    key: 'loginState',
	    autoSync: false,
	    syncInBackground: false
	  }).then(ret => {
			this.props.navigator.push({
				component: ReservationInfo,
				data: this.state.data,
				usersData:ret,
			});
	  }).catch(err => {
	    console.warn(err.message);
	    switch (err.name) {
	        case 'NotFoundError':
						this.props.navigator.push({
							component: Login,
						});
	            // TODO;
	            break;
	        case 'ExpiredError':
						this.props.navigator.push({
							component: Login,
						});
	            // TODO
	            break;
	    }
	  })
  }
  _back() {
    this.props.navigator.pop();
  }
  _renderLoading() {

  }
  _render() {
    if (this.state.loading) {
      return (
        <View style={{marginTop:height/2-80,width:80,height:80,backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,justifyContent:'center',alignSelf:'center'}}>
              <ActivityIndicator
                style={{alignItems:'center'}}
                size="small"/>
              <Text style={{color:'#ffffff',fontSize:12,textAlign:'center',marginTop:5}}>正在加载... </Text>
          </View>
      );
    } else {
      return (
        <View style={{flex:1}}>
          <View>
            <Image
                style={{width:width,height:pxToDp(500),resizeMode:Image.resizeMode.cover}}
                  source={{uri:this.state.data.logoUrl}}/>
          </View>
          <View style={styles.names}>
						<Text style={{marginLeft:5,fontFamily:'FZXiYuan-M01S',fontSize:pxToDp(36)}}>{this.state.data.activityName}</Text>
					</View>
          <View style={styles.rowView}>
              <Icon
                    name='ios-call-outline'
                    size={25}
                    color='#4F8EF7'
                    style={styles.icon}/>
              <Text style={{flex:1,marginLeft:pxToDp(4),fontFamily:'FZXiYuan-M01S'}}>咨询:</Text>
              <Text style={styles.fontIcon}>{(this.state.data.telNo)?this.state.data.telNo:'暂无'}</Text>
            </View>
            <View style={styles.rowView}>
              <Icon
                    name='ios-calendar-outline'
                    size={25}
                    color='#4F8EF7'
                    style={styles.icon}/>
              <Text style={{flex:1,marginLeft:pxToDp(4),fontFamily:'FZXiYuan-M01S'}}>时间:</Text>
              <Text style={styles.fontIcon}>{(this.state.data.startDate)?this.state.data.startDate:'暂无'}</Text>
            </View>
            <View style={styles.rowView}>
              <Icon
                    name='ios-navigate-outline'
                    size={25}
                    color='#4F8EF7'
                    style={styles.icon}/>
                <Text style={{flex:1,marginLeft:pxToDp(4),fontFamily:'FZXiYuan-M01S'}}>地址:</Text>
                <Text style={styles.fontIcon} numberOfLines={2}>{(this.state.data.address)?this.state.data.address:'暂无'}</Text>
            </View>
            {this._renderJoin()}
            <View style={{borderTopWidth:1,borderTopColor:'#779cc7',height:pxToDp(32),backgroundColor:'#eef4f7'}}/>
            <Text style={{margin:pxToDp(10),fontFamily:'FZXiYuan-M01S'}}>活动详情</Text>
            {this._renderHtml()}
            <View style={{borderTopWidth:1,borderTopColor:'#779cc7',height:pxToDp(32),backgroundColor:'#eef4f7'}}/>
          </View>
      )
    }
  }
  _renderJoin() {
    if (this.props.route.name != "venues") {
      return (<View style={styles.rowView}>
                  <Icon
                        name='ios-color-filter-outline'
                        size={25}
                        color='#4F8EF7'
                        style={styles.icon}/>
                  <Text style={{flex:1,marginLeft:pxToDp(4),fontFamily:'FZXiYuan-M01S'}} numberOfLines={2}>参与方式:</Text>
                  <Text style={styles.fontIcon} numberOfLines={2}>{this.state.joinText}</Text>
                </View>)
    } else {
      return (<View/>)
    }
  }
  _renderHtml() {
    return (<View style={{flex:1,backgroundColor:'#eeeeee'}}>
              <WebView
                automaticallyAdjustContentInsets={false}
                style={{height:this.state.webHeight}}
                source={{html: this.state.html,baseUrl:'http://www.jianshu.com'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                onNavigationStateChange={this.onNavigationStateChange}
                startInLoadingState={true}
                scalesPageToFit={true}
              />
          </View>)
  }

  onNavigationStateChange(navState) {
    var url = navState.url;
    var s = url.indexOf('#');
    var l = url.length;
    url = url.substring(s + 1);
    if (!isNaN(url)) {
      this.setState({
        webHeight: parseInt(url)
      });
      return false
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <NavBar style={styles.nav} title={'预约活动'} isShowLeftButton={1} leftFun={()=>this._back()}/>
        <ScrollView style={styles.scrollContent} automaticallyAdjustContentInsets={false}>
            {this._render()}
        </ScrollView>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',borderTopWidth:1,borderTopColor:'#eee'}} activeOpacity={0.9} onPress={()=>this._onPress()}>
					<Icon
						name='md-heart'
						size={25}
						color='#4F8EF7'
						style={[{flex:0.3,textAlign:'center'}]}/>

					<Icon
							name='md-star'
							size={25}
							color='#4F8EF7'
							style={[{flex:0.3,textAlign:'center'}]}/>
					<Icon
							name='ios-redo'
							size={25}
							color='#4F8EF7'
							style={[{flex:0.3,textAlign:'center'}]}/>
          <View style={[styles.reserveVeiw,{backgroundColor:this.state.buttonColor}]} >
            <Text style={styles.reserveText}>立即预约</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: Global.baseColor,
    paddingBottom: 10
  },
  tiltleName: {
    marginTop: 20,
    fontSize: 0.05 * width,
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  scrollContent: {
    flex: 12,
    backgroundColor: '#fefefe',
    marginBottom:pxToDp(35)
  },
  webView: {
    height: 700,
  },
  shadowView: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  picTumb: {
    flex: 1,

  },
  names: {

    height: 0.1 * height,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(93,183,255,0.3)'
  },
  rowView: {
    flexDirection: 'row',
    height: 0.07 * height,
    width: width,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(93,183,255,0.3)'
  },
  icon: {
    width: pxToDp(44),

    marginLeft: pxToDp(10),
    color: 'rgb(93,183,255)'
  },
  fontIcon: {
    flex: 4,
		fontFamily:'FZXiYuan-M01S'
  },
  commentView: {
    flexDirection: 'row',
  },
  reserveVeiw: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#3366cc',
    height: pxToDp(100),
  },
  reserveText: {
    color: '#ffffff',
    fontSize: pxToDp(36),
		fontFamily:'FZXiYuan-M01S'
  }

});
export default ReservationActives;
