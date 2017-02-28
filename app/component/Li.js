/**
 * 滚动列表单挑模板
 */

'use strict';
import React, {
  Component
} from 'react';

import {
  StyleSheet, // 样式
  Text, // 文本
  View, // 类似于DIV
  Image,
  PixelRatio,
  Platform
} from 'react-native';

import Dimensions from 'Dimensions';

var {
  width,
  height
} = Dimensions.get('window')

export default class Li extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.type == 'activies') {
      return this.li4(this.props.data);;
    }
    if (this.props.data.contentPic.length >= 3) {
      return this.li3(this.props.data);
    } else if (this.props.data.contentPic.length >= 1) {
      return this.li1(this.props.data);
    }
    //  else {
    //   return this.li0(this.props.data);
    // }
  }

  li0(data) {
    return (
      <View style={styles.list}>
                <Text style={styles.listTitle}>{data.title}</Text>
                <Text style={styles.listMute}>{data.source_public_time}    {data.source}</Text>
      </View>
    );
  }

  li1(data) {
    return (
      <View style={styles.list}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.listTitle}>{data.contentTitle}</Text>
                        <Text style={styles.listMute} numberOfLines={3}> {data.summary} {data.publishDate}   </Text>
                    </View>
                    <Image style={styles.listImg} source={(data.contentPic[0])?{uri:data.contentPic[0]}:require('../img/default_img.png')}/>
                </View>
            </View>
    );
  }

  li3(data) {
    return (
      <View style={styles.list}>
                <Text style={styles.listTitle}>{data.contentTitle}</Text>
                <View style={{marginTop:3,flexDirection:'row'}}>
                    <Image style={styles.listImg} source={(data.contentPic[0])?{uri:data.contentPic[0]}:require('../img/default_img.png')} />
                    <Image style={styles.listImg} source={(data.contentPic[1])?{uri:data.contentPic[1]}:require('../img/default_img.png')} />
                    <Image style={styles.listImg} source={(data.contentPic[2])?{uri:data.contentPic[2]}:require('../img/default_img.png')} />
                </View>
            </View>
    );
  }
  li4(data) {
    return (
      <View style={{flex:1,marginBottom:10,backgroundColor:'#fff',borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.2)'}}>
        <Image style={{width:width,height:220}} source={(data.logoUrl)?{uri:data.logoUrl}:require('../img/default_img.png')}>
          <View style={{position:'absolute',left:10,bottom:5,flexDirection:'row'}}>
            <View style={styles.tag}><Text style={{fontFamily:'FZXiYuan-M01S',color:'#fff',fontSize:10}}>亲子</Text></View>
            <View style={styles.tag}><Text style={{fontFamily:'FZXiYuan-M01S',color:'#fff',fontSize:10}}>草地音乐节</Text></View>
            <View style={styles.tag}><Text style={{fontFamily:'FZXiYuan-M01S',color:'#fff',fontSize:10}}>公益</Text></View>
          </View>
          <View style={{position:'absolute',right:0,bottom:5,flexDirection:'row'}}>
            <View style={[styles.right_tag,{backgroundColor:'#798bc9'}]}><Text style={{fontFamily:'FZXiYuan-M01S',color:'#fff',fontSize:16}}>免费</Text></View>
          </View>
          <View style={{position:'absolute',left:0,top:0,}}>
            <Image style={{width:37,height:37}} source={require('../img/yg.png')}/>
          </View>
        </Image>
        <Text style={{fontFamily:'FZXiYuan-M01S',color:'#000',marginTop:10,marginLeft:10,fontSize:18}}>{data.activityName}</Text>
        <Text style={{fontFamily:'FZXiYuan-M01S',color:'#999',marginTop:5,marginLeft:10,marginBottom:10}}>{data.address}<Text> | {data.startDate}</Text></Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  list: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
    marginBottom: 1,
  },
  listTitle: {
    marginTop: -4,
    lineHeight: 23,
    fontWeight: '400',
    marginBottom: 4,
    letterSpacing: 0.8,
    fontSize: ('ios' == Platform.OS) ? 19 : 17,
    color: ('ios' == Platform.OS) ? '#333' : '#555',
  },
  listImg: {
    marginLeft: 2,
    marginRight: 2,
    width: (Dimensions.get('window').width - 22) / 3,
    height: (Dimensions.get('window').width - 22) * 10 / 43,
    backgroundColor: '#eeeeee'
  },
  listMute: {
    fontSize: 12,
    color: '#999',
    marginTop: 10,
  },
  tag: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 5,
  },
  right_tag: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 5,
  }
});