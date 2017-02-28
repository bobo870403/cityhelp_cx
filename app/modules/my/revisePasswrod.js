'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';


class revisePasswrod extends Component {
  _back() {
    this.props.navigator.pop();
  }
	render() {
		return (
      <View style={styles.container}>
        <NavBar style={styles.nav} title={'修改密码'} isShowLeftButton={1} leftFun={()=>this._back()}/>
        <View style={styles.main}>
          <View style={[styles.textContainer,{marginTop:pxToDp(30)}]}>
            <Text style={styles.textStyles}>原始密码:</Text>
            <TextInput style={[styles.input,{flex:3.9}]}/>
          </View>
          <View style={[styles.textContainer,{marginTop:pxToDp(30)}]}>
            <Text style={styles.textStyles}>新密码:</Text>
            <TextInput style={[styles.input,{flex:3.9}]}/>
          </View>
          <View style={[styles.textContainer,{marginTop:pxToDp(30)}]}>
            <Text style={styles.textStyles}>重复密码:</Text>
            <TextInput style={[styles.input,{flex:3.9}]}/>
          </View>
          <View style={[styles.textContainer,{marginTop:pxToDp(30)}]}>
            <Text style={styles.textStyles}>验证码:</Text>
            <TextInput style={[styles.input,{flex:2}]}/>
            <TouchableOpacity onPress={()=>this._gotoResult()} style={styles.btn_short}>
              <Text style={{color:'#fff',fontSize:pxToDp(30)}}>发送手机验证码</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>this._gotoResult()} style={styles.btn}>
            <Text style={{color:'#fff',fontSize:pxToDp(40)}}>修改密码</Text>
          </TouchableOpacity>
          <View style={[styles.btn,{backgroundColor:'#ccc'}]}>
            <Text style={{color:'#fff',fontSize:pxToDp(40)}}>重置</Text>
          </View>
        </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff'
  },
  main:{
    // flex:1,
      // backgroundColor: 'rgba(0,0,0,0.1)'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: pxToDp(25),
  },
  textStyles: {
    flex: 1,
    color: '#666',
    paddingLeft: pxToDp(25),
    paddingRight: pxToDp(25),
  },
  input: {
    flex: 2.5,
    height: pxToDp(73),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: pxToDp(15)
  },
  btn: {
    backgroundColor: '#fd7e2d',
    height: pxToDp(90),
    marginLeft: pxToDp(25),
    marginRight: pxToDp(25),
    borderRadius: pxToDp(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(30),
  },
  btn_short: {
    backgroundColor: '#fd7e2d',
    height: pxToDp(70),
    marginLeft: pxToDp(25),
    paddingLeft:pxToDp(20),
    paddingRight:pxToDp(20),
    borderRadius: pxToDp(10),
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default revisePasswrod;
