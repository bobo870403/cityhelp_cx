'use strict';
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View, // 类似于DIV
  Text,
  WebView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
  StatusBar
} from 'react-native';

import Gallery from 'react-native-gallery';
import Icon from 'react-native-vector-icons/Ionicons'

import NavBar from './navBar'
import HTTPUtil from '../util/HTTPUtil'
import pxToDp from '../util/pxToDp'
import Global from './Global'
const {
  height,
  width
} = Dimensions.get('window');

let htmlContent = ` <h1>加载网页失败了</h1>`
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
let summaryList = [];
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      html: HTML,
      type: "",
    };
  }
  componentWillMount() {
    let url = Global.hostip + Global.detailUri;
    let formdata = {
      'contentid': this.props.route.id
    };
    HTTPUtil.get(url, formdata).then((json) => {
      // console.log(json)
      //处理 请求success
      if (json.success) {
        htmlContent = json.data.contents;
        let imgList = [];
        if (json.data.cmsContentPictures) {
          for (var i of json.data.cmsContentPictures) {
            imgList.push(i.picture)
            summaryList.push(i.pictureDesc)
          }
        }
        console.log(summaryList);
        this.setState({
          loaded: true,
          type: json.data.contentType,
          imgList: imgList,
          summary: summaryList[0],
          html: HTML + htmlContent + '</body></html>',
        })
      } else {
        //处理自定义异常
        console.warn('异常 ');
        this.doException(json);
      }
    }, (json) => {
      //TODO 处理请求fail
      console.warn('网络失败');
    })
  }

  _back() {
    this.props.navigator.pop();
  }
  render() {
    if (this.state.loaded) {
      if (this.state.type == 'PHO') {
        return (
          <View style={{flex:1,backgroundColor:'black'}}>
             <StatusBar
               backgroundColor="blue"
               barStyle="light-content"
             />
             <View style={{marginTop:10}}>
                <TouchableOpacity onPress={()=>this._back()} style={{height:60,alignItems: 'center',flexDirection: 'row',paddingLeft:pxToDp(10),backgroundColor:'black'}}><Icon
                  name='ios-arrow-dropleft-outline'
                  size={pxToDp(70)}
                  color='#fff'
                  style={{width:pxToDp(70),height:pxToDp(70)}}/>

                </TouchableOpacity>
             </View>
             <Gallery
                style={{flex: 1, backgroundColor: 'black'}}
                onPageSelected={(page)=>{this.setState({
                  summary:summaryList[parseInt(page)]
                })}}
                images={this.state.imgList}/>
             <View style={{position:'absolute',bottom:20,left:5,right:5,backgroundColor:'rgba(0,0,0,0.4)',height:120,justifyContent: 'center',}}>
               <Text style={{color:'#fff'}}>{this.state.summary}</Text>
             </View>
        </View>
        );
      } else {
        return (
          <View style={{flex:1}}>
            <NavBar style={styles.nav} title={' '} isShowLeftButton={1} leftFun={()=>this._back()}/>
            <View style={styles.content}>
              <WebView  style={{
                backgroundColor: '#fff',
                height: 100,
              }}
              source={{html: this.state.html,baseUrl:'http://www.jianshu.com'}}
              automaticallyAdjustContentInset={false}
              contentInset={{top:0,left:10,bottom:20,right:10}}
              showsHorizontalScrollIndicator ={false}
              showsVerticalScrollIndicator ={false}
              startInLoadingState={true}
              // android
              domStorageEnabled={true}
              javaScriptEnabled={true}
              //ios
              bounces={true}
              allowsInlineMediaPlayback={true}
              scrollEnabled={true}
              decelerationRate="normal"
              scalesPageToFit ={false}
              />
            </View>
        </View>
        );
      }
    }
    return null;
  }
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    flex: 1,
    borderColor: '#e6e6e6',
    borderWidth: 1 / PixelRatio.get(),
  },
});
