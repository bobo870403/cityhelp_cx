'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
	Image,
	TouchableOpacity,
} from 'react-native';
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Buttons from '../../component/Buttons'
class friends extends Component {
	render() {
		return (
			<View style={{flex:1}}>
        <NavBar style={styles.nav} title={'朋友群'}/>
				<View style={styles.main}>
            <View style={styles.main_panel}>
              <Buttons type={5} imguri={require('../../img/tongxunlu.png')} text={'通讯录'}/>
              <View style={styles.line}/>
              <Buttons type={5} imguri={require('../../img/xinpengyou.png')} text={'新朋友'}/>
              <View style={styles.line}/>
              <Buttons type={5} imguri={require('../../img/qunliao.png')} text={'群聊'}/>
              <View style={styles.line}/>
              <Buttons type={5} imguri={require('../../img/tongzhi.png')} text={'通知'}/>

            </View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#f0f0f0'
	},
	main_panel:{
		minHeight:150,
		marginTop:10,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:"#9999",
		backgroundColor:'#fff',
	},
  line:{
    marginLeft:pxToDp(30),
    borderBottomWidth:0.8,
    borderBottomColor:'#ccc'
  }
});

export default friends;
