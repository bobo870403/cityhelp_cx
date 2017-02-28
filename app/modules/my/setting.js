'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image,
	TouchableOpacity,
	Switch
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

import RssSetting from './rssSetting';
import MyMessage from './myMessage';
class setting extends Component {
	_back() {
		this.props.navigator.pop();
	}
	_gotoRssSetting() {
		this.props.navigator.push({
			component: RssSetting,
		})
	}
	_gotoMessSetting() {
		this.props.navigator.push({
			component: MyMessage,
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'通用设置'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.main}>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>订阅设置：</Text>
						<Icon name="ios-arrow-forward-outline" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoMessSetting()} style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>消息设置：</Text>
						<Icon name="ios-arrow-forward-outline" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</TouchableOpacity>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>消息通知：</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<TouchableOpacity onPress={()=>this._gotorp()} style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>声音：</Text>
						<Switch value={true} style={{marginRight:pxToDp(10)}}/>
					</TouchableOpacity>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>震动</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>字体：</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>关于我们：</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<View style={[styles.li,{marginBottom:1}]}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>检查版本更新：</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
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
	main: {
		// flex:1,
		backgroundColor: 'rgba(0,0,0,0.1)'
	},
	li: {
		paddingTop: pxToDp(20),
		paddingBottom: pxToDp(20),
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 1
	}
});


export default setting;