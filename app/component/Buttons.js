'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Text,
} from 'react-native';
import pxToDp from '../util/pxToDp'
import Icon from 'react-native-vector-icons/Ionicons';

class Buttons extends Component {
  render() {
    if (this.props.type == 0) {
      return this.btn0();
    }
    if (this.props.type == 1) {
      return this.btn1();
    }
    if (this.props.type == 2) {
      return this.btn2();
    }
    if (this.props.type == 3) {
      return this.btn3();
    }
    if (this.props.type == 4) {
      return this.btn4();
    }
    if (this.props.type == 5) {
      return this.btn5();
    }
  }
  btn0() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props._onPress}>
        <Image style={styles.img} source={this.props.imguri}>
          <Text style={styles.imgText}>{this.props.text}</Text>
        </Image>
      </TouchableOpacity>
    );
  }
  btn1() {
    return (
      <TouchableHighlight style={{flex:1}} onPress={this.props._onPress}>
       <View style={styles.btn}>
        {(this.props.iconName)?<Icon name={this.props.iconName} size={40} color={(this.props.colors)?this.props.colors:"#fdbf3c"} style={{backgroundColor:'transparent'}}/>:<View/>}
         <Text style={{color:'#666',marginTop:pxToDp(10)}}>{this.props.text}</Text>
       </View>
      </TouchableHighlight>
    );
  }
  btn2(){
    return (
      <TouchableOpacity
        onPress={this.props._onPress}
        style={{flex:1,
                backgroundColor:'#fff',
                marginLeft:1,
                justifyContent:'center',
                alignItems:'center'}}>
        {(this.props.iconName)?<Icon name={this.props.iconName} size={30} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>:<Image style={{width:pxToDp(70),height:pxToDp(61),resizeMode:Image.resizeMode.contain}} source={this.props.imguri}/>}
        <Text style={{color:'#666',
                      marginTop:pxToDp(10)}}>
                      {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
  btn3() {
    return (
      <TouchableOpacity style={{flex:1,alignItems:'center'}} activeOpacity={0.8} onPress={this.props._onPress}>
        <Image style={[styles.img,{width:pxToDp(70),height:pxToDp(70)}]} source={this.props.imguri}>
        </Image>
        <Text style={{color:'#fff',marginTop:5,fontSize:12}}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
  btn4() {
    return (
      <TouchableOpacity style={{width:pxToDp(225),height:pxToDp(145),alignItems:'center'}} activeOpacity={0.8} onPress={this.props._onPress}>
        <Image style={[styles.img,{width:pxToDp(80),height:pxToDp(80)}]} source={this.props.imguri}>
        </Image>
        <Text style={{color:'#8e8e8e',marginTop:5,fontSize:12}}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
  btn5() {
    return (
      <TouchableOpacity style={{flexDirection:'row',marginLeft:pxToDp(30),height:pxToDp(90),alignItems:'center'}} activeOpacity={0.8} onPress={this.props._onPress}>
        <Image style={[styles.img,{width:pxToDp(60),height:pxToDp(60)}]} source={this.props.imguri}>
        </Image>
        <Text style={{color:'#8e8e8e',fontSize:14,flex:1,marginLeft:5}}>{this.props.text}</Text>
        <Icon name={'ios-arrow-forward'} size={20} color="#999" style={{backgroundColor:'transparent',marginRight:5}}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: pxToDp(187),
    height: pxToDp(187),
    resizeMode: Image.resizeMode.contain,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imgText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: pxToDp(24),
    marginBottom: pxToDp(10),
  },
  btn: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 1,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default Buttons;
